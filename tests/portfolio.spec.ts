import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 390, 768, 1440]) {
  test(`original layout, themes and accessibility at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Ardi Wirya",
    );
    await expect(page.locator("#cv")).toContainText("PT Bakrie Autoparts");
    const heroPhoto = page.locator("#cv img");
    await expect(heroPhoto).toHaveAttribute("src", /ardi-hero\.webp/);
    await expect
      .poll(() =>
        heroPhoto.evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
      )
      .toBe(true);
    await expect(page.getByRole("tab", { name: "Experience", exact: true }))
      .toHaveAttribute("aria-selected", "true");
    await expect(page.locator("#about")).toContainText("Malikussaleh University");
    await expect(page.locator("#about")).toContainText("3.75");
    await page.locator("#about summary").click();
    await expect(page.getByText(/Clustering Analysis.*Isolation Forest/)).toBeVisible();
    await page.locator("#about summary").click();
    await expect(page.locator("#projects button")).toHaveCount(8);
    await expect(page.locator("#certificate-list button")).toHaveCount(9);
    for (const theme of ["dark", "light"]) {
      if (theme === "light")
        await page
          .getByRole("button", { name: "Switch to light theme" })
          .click();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze()
        ).violations,
      ).toEqual([]);
    }
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    expect(errors).toEqual([]);
  });
}

test("mobile menu, About tabs, and keyboard navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "About" })
    .click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await page.getByRole("tab", { name: "Experience", exact: true }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Sep 2026 - Present");
  await expect(page.getByRole("tabpanel")).toContainText("Jul 2023 - Aug 2026");
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Skills" })).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Organizations" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("UniSZA");
  await page.keyboard.press("End");
  await expect(page.getByRole("tabpanel")).toContainText("SENASTIKA");
});

test("project modal retains features, both clinic repos, focus management and Escape", async ({
  page,
}) => {
  await page.goto("/");
  const card = page.getByRole("button", {
    name: "Clinic Information System",
    exact: true,
  });
  await card.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Front-End Repo" }),
  ).toHaveAttribute("href", "https://github.com/ardiwirya/klinik-frontend");
  await expect(
    dialog.getByRole("link", { name: "Back-End Repo" }),
  ).toHaveAttribute("href", "https://github.com/ardiwirya/klinik-backend");
  await expect(
    dialog.getByRole("heading", { name: "Key Features" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "View Live Demo" }),
  ).toHaveCount(0);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(card).toBeFocused();
  await page
    .getByRole("button", { name: "Resumake AI — Resume Builder" })
    .click();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: "View Live Demo" }),
  ).toHaveAttribute("href", "https://resumake-ai.vercel.app/");
  await page.mouse.click(2, 2);
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("all certificates and certificate details remain available in light theme", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await page.getByRole("button", { name: "Show More" }).click();
  await expect(page.locator("#certificate-list button")).toHaveCount(15);
  await page
    .getByRole("button", {
      name: "JavaScript Programming Fundamentals",
      exact: true,
    })
    .click();
  await expect(
    page.getByRole("dialog").getByRole("link", { name: "View Certificate" }),
  ).toHaveAttribute(
    "href",
    "https://www.dicoding.com/certificates/NVP7NMO8VZR0",
  );
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.getByRole("button", { name: "Close details" }).click();
  await page.getByRole("button", { name: "Show Less" }).click();
  await expect(page.locator("#certificate-list button")).toHaveCount(9);
});

test("contact form preserves success, errors, and entered text on failure without sending mail", async ({
  page,
}) => {
  await page.goto("/");
  let succeed = false;
  await page.route("**/api/contact", async (route) => {
    expect(route.request().postDataJSON()).toMatchObject({
      name: "Test visitor",
      email: "test@example.com",
      subject: "Test subject",
      message: "Test message",
    });
    await route.fulfill({
      status: succeed ? 200 : 502,
      contentType: "application/json",
      body: JSON.stringify(
        succeed ? { success: true } : { error: "Unavailable" },
      ),
    });
  });
  await page.getByLabel("Your Name").fill("Test visitor");
  await page.getByLabel("Your E-mail").fill("test@example.com");
  await page.getByLabel("Subject", { exact: true }).fill("Test subject");
  await page.getByLabel("Message", { exact: true }).fill("Test message");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator("#contact").getByRole("alert")).toContainText(
    "Something went wrong",
  );
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue(
    "Test message",
  );
  succeed = true;
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Message sent successfully",
  );
  await expect(page.getByLabel("Message", { exact: true })).toHaveValue("");
});

test("CV, invalid contact requests, sitemap and robots are served correctly", async ({
  request,
}) => {
  const cv = await request.get("/CV_Ardi_Wirya_Indarto.pdf");
  expect(cv.status()).toBe(200);
  expect(cv.headers()["content-type"]).toContain("application/pdf");
  expect((await request.post("/api/contact", { data: {} })).status()).toBe(400);
  expect(
    (
      await request.post("/api/contact", {
        data: "invalid json",
        headers: { "Content-Type": "application/json" },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/contact", {
        data: { name: [], email: "invalid", subject: "Test", message: "Test" },
      })
    ).status(),
  ).toBe(400);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  const validFields = {
    name: "Test visitor",
    email: "test@example.com",
    subject: "Test subject",
    message: "Test message",
  };
  const invalidBodies: unknown[] = [
    null,
    [],
    "text",
    42,
    true,
    { ...validFields, name: " ".repeat(10) },
    { ...validFields, email: "invalid" },
    { ...validFields, name: "a".repeat(101) },
    { ...validFields, email: `${"a".repeat(243)}@example.com` },
    { ...validFields, subject: "a".repeat(201) },
    { ...validFields, message: "a".repeat(5001) },
  ];
  for (const body of invalidBodies) {
    const response = await request.post("/api/contact", {
      data: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    expect(response.status()).toBe(400);
  }
  expect((await request.get("/robots.txt")).status()).toBe(200);
});

test("theme button still works when browser storage is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("Storage unavailable");
    };
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

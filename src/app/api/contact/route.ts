import { Resend } from "resend";
import { profile } from "../../data/profile";

const limits = { name: 100, email: 254, subject: 200, message: 5000 };

type ContactMessage = Record<keyof typeof limits, string>;

function isContactMessage(body: unknown): body is ContactMessage {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return false;
  }
  const fields = body as Record<string, unknown>;
  return Object.entries(limits).every(([field, max]) => {
    const value = fields[field];
    return typeof value === "string" && value.trim().length > 0 && value.length <= max;
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (
    !isContactMessage(body) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())
  ) {
    return Response.json(
      { error: "Please provide a valid name, email, subject, and message." },
      { status: 400 },
    );
  }
  if (!process.env.RESEND_API_KEY)
    return Response.json(
      {
        error: "Email is temporarily unavailable. Please contact me directly.",
      },
      { status: 503 },
    );
  const name = body.name.trim();
  const email = body.email.trim();
  const subject = body.subject.trim();
  const message = body.message.trim();
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error)
      return Response.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 },
      );
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }
}

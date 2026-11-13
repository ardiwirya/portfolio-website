"use client";
import { useState } from "react";
import {
  SKILLS_DATA,
  EXPERIENCE_DATA,
  ORGANIZATIONS_DATA,
  HONOR_AWARDS_DATA,
} from "../data/about";
import { profile } from "../data/profile";

const tabs = [
  { id: "experience", title: "Experience", items: EXPERIENCE_DATA },
  { id: "skills", title: "Skills", items: SKILLS_DATA },
  { id: "organizations", title: "Organizations", items: ORGANIZATIONS_DATA },
  { id: "award", title: "Awards", items: HONOR_AWARDS_DATA },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AboutSection() {
  const [active, setActive] = useState<TabId>("experience");
  const tab = tabs.find((item) => item.id === active) ?? tabs[0];
  return (
    <section className="text-foreground" id="about">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-base lg:text-lg">{profile.about}</p>
        <details className="mt-5 text-sm text-muted">
          <summary className="cursor-pointer">
            Education · {profile.education.institution} · GPA {profile.education.gpa}
          </summary>
          <p className="mt-2">{profile.education.degree} · {profile.education.date}</p>
          <p className="mt-2">{profile.education.thesis}</p>
          <p className="mt-2">{profile.education.detail}</p>
        </details>
        <div
          role="tablist"
          aria-label="About me"
          className="flex flex-row flex-wrap gap-4 mt-5"
        >
          {tabs.map((item, index) => (
            <button
              type="button"
              role="tab"
              key={item.id}
              id={`tab-${item.id}`}
              aria-controls={`panel-${item.id}`}
              aria-selected={active === item.id}
              tabIndex={active === item.id ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                let next;
                if (event.key === "ArrowRight")
                  next = (index + 1) % tabs.length;
                if (event.key === "ArrowLeft")
                  next = (index + tabs.length - 1) % tabs.length;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = tabs.length - 1;
                if (next === undefined) return;
                event.preventDefault();
                setActive(tabs[next].id);
                document.getElementById(`tab-${tabs[next].id}`)?.focus();
              }}
              className={`pb-2 min-h-11 font-semibold border-b-4 ${active === item.id ? "border-primary-500 text-foreground" : "border-transparent text-muted hover:text-foreground"}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
          className="mt-2"
        >
          {tab.items.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-3 py-4 ${index < tab.items.length - 1 ? "border-b border-outline" : ""}`}
            >
              <div>
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-muted mb-1">
                  {item.language ?? item.institution}
                </p>
                <p className="text-sm text-muted mb-1">
                  {[item.date ?? item.monthYear, item.totalDuration]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
                {item.description && (
                  <p className="text-sm text-muted mt-2">
                    {item.description}
                  </p>
                )}
                {item.highlights && (
                  <ul className="list-disc pl-4 mt-2 text-sm text-muted space-y-1">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

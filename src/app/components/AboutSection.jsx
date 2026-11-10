"use client";
import { useState } from "react";
import Image from "next/image";
import {
  SKILLS_DATA,
  EXPERIENCE_DATA,
  ORGANIZATIONS_DATA,
  HONOR_AWARDS_DATA,
} from "../data/about";
import { profile } from "../data/profile";

const tabs = [
  { id: "skills", title: "Skills", items: SKILLS_DATA },
  { id: "experience", title: "Experience", items: EXPERIENCE_DATA },
  { id: "organizations", title: "Organizations", items: ORGANIZATIONS_DATA },
  { id: "award", title: "Awards", items: HONOR_AWARDS_DATA },
];

export default function AboutSection() {
  const [active, setActive] = useState("skills");
  const tab = tabs.find((item) => item.id === active);
  return (
    <section className="text-foreground" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/programmer.png"
          alt="Software engineering activity"
          width={700}
          height={700}
          sizes="(max-width: 768px) 90vw, 45vw"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">{profile.about}</p>
          <div
            role="tablist"
            aria-label="About me"
            className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 mt-5"
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
                  document.getElementById(`tab-${tabs[next].id}`).focus();
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
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    width={50}
                    height={50}
                    className="object-contain w-12 h-12 flex-shrink-0"
                  />
                )}
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
      </div>
    </section>
  );
}

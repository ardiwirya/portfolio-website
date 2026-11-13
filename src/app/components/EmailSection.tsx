"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../data/profile";
import Link from "next/link";

const EmailSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("from_name"),
      email: formData.get("reply_to"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: unknown = await res.json();
      if (
        !res.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-9">
        <h2 className="text-xl font-bold text-foreground my-2">
          Let&apos;s Connect
        </h2>
        <p className="text-muted mb-4 max-w-md">
          Have a frontend role or a web project in mind? Send me a message
          with the project details, or connect with me on GitHub and LinkedIn.
        </p>
        <p className="text-muted mb-4">Based in {profile.location}.</p>
        <div className="flex flex-wrap gap-4 text-sm underline underline-offset-4">
          <Link href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="from_name"
              className="text-foreground block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              name="from_name"
              type="text"
              id="from_name"
              maxLength={100}
              autoComplete="name"
              required
              className="bg-surface border border-outline placeholder:text-muted text-foreground text-sm rounded-lg block w-full p-2.5"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="reply_to"
              className="text-foreground block mb-2 text-sm font-medium"
            >
              Your E-mail
            </label>
            <input
              name="reply_to"
              type="email"
              id="reply_to"
              maxLength={254}
              autoComplete="email"
              required
              className="bg-surface border border-outline placeholder:text-muted text-foreground text-sm rounded-lg block w-full p-2.5"
              placeholder="john.doe@company.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-foreground block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              maxLength={200}
              required
              className="bg-surface border border-outline placeholder:text-muted text-foreground text-sm rounded-lg block w-full p-2.5"
              placeholder="Discussion on Software Development Collaboration..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-foreground block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              maxLength={5000}
              required
              className="bg-surface border border-outline placeholder:text-muted text-foreground text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p
              role="status"
              className="text-secondary-700 dark-status-success text-sm mt-2"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="text-red-600 dark-status-error text-sm mt-2"
            >
              Something went wrong. Please try again or email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

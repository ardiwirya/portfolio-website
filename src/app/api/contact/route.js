import { Resend } from "resend";
import { profile } from "../../data/profile";

const limits = { name: 100, email: 254, subject: 200, message: 5000 };
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (
    !body ||
    Object.entries(limits).some(
      ([field, max]) =>
        typeof body[field] !== "string" ||
        !body[field].trim() ||
        body[field].length > max,
    ) ||
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
  const { name, email, subject, message } = Object.fromEntries(
    Object.keys(limits).map((key) => [key, body[key].trim()]),
  );
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

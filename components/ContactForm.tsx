"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const TOPICS = [
  "Satellite Broadcast",
  "Data Center & Colocation",
  "IT Support & Managed Services",
  "Network & Connectivity",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const topic = String(form.get("topic") || "");
    const message = String(form.get("message") || "");

    const subject = `Enquiry: ${topic || "General"} — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:info@hd-networks.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required />
        <div>
          <label className="eyebrow text-slate block mb-2.5" htmlFor="topic">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            className="w-full border border-line bg-white rounded-card px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-signal-blue transition-colors"
          >
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="eyebrow text-slate block mb-2.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-line bg-white rounded-card px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-signal-blue transition-colors resize-none"
          placeholder="Tell us about your infrastructure, timeline, or the problem you're solving."
        />
      </div>

      <button type="submit" className="btn-primary">
        Send message
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </button>

      {sent && (
        <p className="font-mono text-xs text-signal-blue uppercase tracking-wide">
          Opening your email client to send this to info@hd-networks.com&hellip;
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-slate block mb-2.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-white rounded-card px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-signal-blue transition-colors"
      />
    </div>
  );
}

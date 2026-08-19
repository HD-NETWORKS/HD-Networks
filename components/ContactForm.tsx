"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

const TOPICS = [
  "Satellite Broadcast",
  "Data Center & Colocation",
  "IT Support & Managed Services",
  "Network & Connectivity",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      topic: String(data.get("topic") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-14">
        <CheckCircle2 size={36} className="text-signal-blue mb-4" strokeWidth={1.75} />
        <p className="font-heading font-semibold text-lg mb-2">Message sent</p>
        <p className="text-slate text-sm max-w-xs">
          Thanks — we&rsquo;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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

      <p className="text-slate text-xs">
        Technical support requests are routed to our support team; everything
        else reaches sales.
      </p>

      <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </button>

      {status === "error" && (
        <p className="flex items-start gap-2 text-signal-red text-sm">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            {errorMessage} You can also email us directly at{" "}
            <a href="mailto:sales@hd-networks.com" className="underline">
              sales@hd-networks.com
            </a>
            .
          </span>
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

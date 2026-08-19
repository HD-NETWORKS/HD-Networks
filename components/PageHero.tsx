import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 bar-field text-white/[0.04]" />
      <div className="container-hd relative py-28 md:py-36">
        <p className="eyebrow text-signal-red mb-5">{eyebrow}</p>
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] max-w-3xl">
          {title}
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-xl mt-6">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

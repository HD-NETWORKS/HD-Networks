import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  index,
  title,
  description,
  points,
  href,
  id,
}: {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  points: string[];
  href: string;
  id?: string;
}) {
  return (
    <div id={id} className="card-hd p-8 flex flex-col h-full scroll-mt-28">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-paper border border-line rounded-card text-signal-blue">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <span className="font-mono text-xs text-slate">{index}</span>
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate text-[15px] leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2.5 mb-8 mt-auto">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-[14px] text-ink/80">
            <span className="mt-2 w-1.5 h-1.5 bg-signal-red shrink-0" />
            {point}
          </li>
        ))}
      </ul>
      <Link href={href} className="link-underline font-heading font-semibold text-sm text-signal-blue mt-auto">
        Learn more
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

const ITEMS = [
  "Broadcasters",
  "Telecom Operators",
  "Media Production",
  "Government",
  "Financial Services",
  "Enterprise",
  "Hospitality",
  "Streaming Platforms",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line py-6 bg-white">
      <div className="flex w-max animate-marquee gap-16">
        {loop.map((item, i) => (
          <span
            key={i}
            className="eyebrow text-slate whitespace-nowrap flex items-center gap-16"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-signal-red rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}

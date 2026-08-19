export default function SignalVisual() {
  const bars = [40, 65, 30, 80, 50, 95, 45, 70, 35, 60, 85, 42, 55, 75, 38];

  return (
    <div className="relative border border-white/10 bg-white/[0.03] rounded-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <span className="eyebrow text-white/50">Live Link Status</span>
        <span className="flex items-center gap-2 eyebrow text-signal-red">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse-dot" />
          On Air
        </span>
      </div>

      <svg viewBox="0 0 400 170" className="w-full h-auto mb-8" fill="none">
        <ellipse cx="80" cy="95" rx="46" ry="46" stroke="#3E4095" strokeWidth="1.5" opacity="0.5" />
        <circle cx="80" cy="95" r="4" fill="#ED3237" />
        <text x="80" y="152" textAnchor="middle" className="font-mono" fontSize="10" fill="#8A8CA8">
          LONDON
        </text>

        <ellipse cx="320" cy="95" rx="46" ry="46" stroke="#3E4095" strokeWidth="1.5" opacity="0.5" />
        <circle cx="320" cy="95" r="4" fill="#ED3237" />
        <text x="320" y="152" textAnchor="middle" className="font-mono" fontSize="10" fill="#8A8CA8">
          LAGOS
        </text>

        <path
          d="M80 95 Q200 -10 320 95"
          stroke="#3E4095"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.8"
        />
        <circle r="3.5" fill="#fff">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M80 95 Q200 -10 320 95" />
        </circle>

        <circle cx="200" cy="35" r="10" stroke="#ED3237" strokeWidth="1.5" fill="#15162B" />
        <circle cx="200" cy="35" r="3" fill="#ED3237" />
      </svg>

      <div className="flex items-end gap-1 h-16">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 bg-signal-blue/70"
            style={{
              height: `${h}%`,
              animation: `pulse-dot ${1.2 + (i % 5) * 0.15}s ease-in-out infinite`,
              animationDelay: `${i * 0.06}s`,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
        <div>
          <p className="font-heading font-bold text-lg text-white">99.9%</p>
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-wide mt-1">Uptime target</p>
        </div>
        <div>
          <p className="font-heading font-bold text-lg text-white">24/7</p>
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-wide mt-1">NOC monitoring</p>
        </div>
        <div>
          <p className="font-heading font-bold text-lg text-white">2</p>
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-wide mt-1">Global offices</p>
        </div>
      </div>
    </div>
  );
}

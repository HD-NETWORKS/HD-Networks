export default function FootprintVisual() {
  const rings = [34, 58, 84, 112];

  return (
    <div className="relative border border-white/10 bg-white/[0.03] rounded-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <span className="eyebrow text-white/50">Beam Footprint</span>
        <span className="flex items-center gap-2 eyebrow text-signal-red">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse-dot" />
          Illustrative
        </span>
      </div>

      <svg viewBox="0 0 400 280" className="w-full h-auto" fill="none">
        {rings.map((r, i) => (
          <ellipse
            key={r}
            cx="200"
            cy="140"
            rx={r}
            ry={r * 0.82}
            stroke="#3E4095"
            strokeWidth="1.25"
            strokeDasharray="4 5"
            opacity={0.75 - i * 0.14}
          />
        ))}

        <circle cx="200" cy="140" r="5" fill="#ED3237" />
        <circle cx="200" cy="140" r="10" stroke="#ED3237" strokeWidth="1.25" opacity="0.6" />
        <text x="200" y="165" textAnchor="middle" className="font-mono" fontSize="9" fill="#ffffff" opacity="0.7">
          TELEPORT
        </text>

        {[
          { x: 92, y: 96, label: "WEST AFRICA" },
          { x: 300, y: 88, label: "EAST AFRICA" },
          { x: 96, y: 208, label: "CENTRAL AFRICA" },
          { x: 296, y: 216, label: "SOUTHERN AFRICA" },
        ].map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="3" fill="#8A8CA8" />
            <text
              x={p.x}
              y={p.y - 10}
              textAnchor="middle"
              className="font-mono"
              fontSize="8.5"
              fill="#8A8CA8"
              letterSpacing="0.5"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      <p className="font-mono text-[10px] text-white/35 uppercase tracking-wide text-center -mt-2">
        Stylized representation: request a detailed footprint map for your location
      </p>
    </div>
  );
}

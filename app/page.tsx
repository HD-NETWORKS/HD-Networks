import Link from "next/link";
import { Satellite, Database, LifeBuoy, Network, ArrowUpRight, ArrowRight, RadioTower } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import SignalVisual from "@/components/SignalVisual";
import StatCounter from "@/components/StatCounter";
import Marquee from "@/components/Marquee";

const SERVICES = [
  {
    icon: Satellite,
    index: "01",
    title: "Satellite Broadcast",
    description:
      "Uplink, downlink and teleport services for live broadcast, managed streaming and worldwide viewer distribution.",
    points: ["Teleport uplink & downlink", "Multi-protocol streaming (SRT/RTMP/HLS)", "Browser-based viewer access"],
    href: "/services#broadcast",
  },
  {
    icon: Database,
    index: "02",
    title: "Data Center & Colocation",
    description:
      "Rack, cage and suite colocation on redundant power and cooling, engineered for continuous uptime.",
    points: ["N+1 power & cooling", "24/7 remote hands", "Hosted or self-managed equipment"],
    href: "/services#datacenter",
  },
  {
    icon: LifeBuoy,
    index: "03",
    title: "IT Support & Managed Services",
    description:
      "Proactive monitoring, helpdesk and infrastructure management for teams that can't afford downtime.",
    points: ["24/7 NOC monitoring", "Managed servers & endpoints", "Rapid-response helpdesk"],
    href: "/services#it-support",
  },
  {
    icon: Network,
    index: "04",
    title: "Network & Connectivity",
    description:
      "Resilient last-mile and backbone connectivity linking client sites worldwide to the wider world.",
    points: ["Dedicated internet access", "Point-to-point links", "Redundant routing paths"],
    href: "/services#network",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Engineers, not ticket queues",
    body: "Every account is backed by engineers who know satellite, data center and network infrastructure — not a first-line script.",
  },
  {
    n: "02",
    title: "Two hubs, one standard",
    body: "Our London and Lagos operations centers run to the same monitoring, escalation and reporting standard, wherever in the world your infrastructure sits.",
  },
  {
    n: "03",
    title: "Redundant by design",
    body: "Power, cooling, uplink and routing paths are built with failover in mind, so a single fault never becomes an outage.",
  },
  {
    n: "04",
    title: "Built for broadcast-grade reliability",
    body: "Signal continuity standards from the broadcast world are applied across every service we run, including IT and data center.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 bar-field text-white/[0.045]" aria-hidden />
        <div className="container-hd relative pt-20 md:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <div>
              <Reveal>
                <p className="eyebrow text-signal-red mb-6 flex items-center gap-2">
                  <RadioTower size={14} />
                  London &amp; Lagos &middot; Serving Clients Worldwide
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-2xl">
                  Signal, space and support that stay{" "}
                  <span className="text-signal-red">on air.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl mt-7">
                  HD Networks engineers and operates satellite broadcast links,
                  data center &amp; colocation space, and managed IT infrastructure —
                  monitored around the clock for clients worldwide, from our
                  London and Lagos operations centers.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-4 mt-10">
                  <Link href="/services" className="btn-primary">
                    Explore our services
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                  <Link href="/contact" className="btn-ghost-dark">
                    Talk to an engineer
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="w-full">
              <SignalVisual />
            </Reveal>
          </div>
        </div>

        <div className="bar-divider" />
        <div className="container-hd">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14">
            <StatCounter value={99.9} decimals={1} suffix="%" label="Uptime target" />
            <StatCounter value={24} suffix="/7" label="NOC monitoring" />
            <StatCounter value={2} label="Offices: London & Lagos" />
            <StatCounter value={3} prefix="~" suffix=" min" label="Target response time" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-28">
        <div className="container-hd">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">What we do</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-2xl">
              Infrastructure across four disciplines, run to one standard.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* WHY HD NETWORKS */}
      <section className="bg-ink text-white py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bar-field text-white/[0.03]" aria-hidden />
        <div className="container-hd relative">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">Why HD Networks</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-2xl">
              Built on standards borrowed from broadcast.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 mt-16">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.n} delay={i * 90}>
                <div className="flex gap-6 border-t border-white/15 pt-6">
                  <span className="font-mono text-signal-red text-sm shrink-0">{cap.n}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2.5">{cap.title}</h3>
                    <p className="text-white/55 text-[15px] leading-relaxed">{cap.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP: SATELLITE BROADCAST */}
      <section className="py-24 md:py-28">
        <div className="container-hd grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">Flagship capability</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Satellite broadcast infrastructure, engineered end to end.
            </h2>
            <p className="text-slate text-[17px] leading-relaxed mb-8">
              From teleport uplink and downlink to managed multi-protocol
              streaming, HD Networks designs and operates the broadcast
              chain that gets your signal to air — and keeps it there,
              wherever your viewers are watching from.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Teleport uplink, downlink & satellite space segment",
                "Managed streaming — SRT, RTMP, HLS, ZIXI & more",
                "Satellite support for viewers & end-users",
                "Watch instantly in any browser — no app or decoder required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink/85">
                  <span className="mt-2 w-2 h-2 bg-signal-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services#broadcast" className="btn-ghost">
              View broadcast services
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-ink rounded-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bar-field text-white/[0.05]" aria-hidden />
              <div className="relative flex flex-col gap-6">
                {["Uplink", "Space Segment", "Downlink", "Distribution"].map((stage, i) => (
                  <div key={stage} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/40 w-6">{`0${i + 1}`}</span>
                    <div className="flex-1 h-9 bg-white/5 border border-white/10 rounded-card flex items-center px-4 relative overflow-hidden">
                      <span
                        className="absolute inset-y-0 left-0 bg-signal-blue/50"
                        style={{ width: `${55 + i * 11}%` }}
                      />
                      <span className="relative font-mono text-[11px] uppercase tracking-wide text-white">
                        {stage}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-white/40 w-6">05</span>
                  <div className="flex-1 h-9 bg-white/5 border border-white/10 rounded-card flex items-center gap-2.5 px-3">
                    <span className="flex gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                    </span>
                    <span className="flex-1 font-mono text-[11px] text-white/70 truncate">
                      yourbrand.watch/live
                    </span>
                    <span className="flex items-center gap-1.5 text-signal-red font-mono text-[10px] shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse-dot" />
                      LIVE
                    </span>
                  </div>
                </div>
                <p className="relative font-mono text-[10px] text-white/35 uppercase tracking-wide -mt-3 pl-10">
                  Concept — viewer playback in any browser, no app required
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative bg-signal-blue overflow-hidden">
        <div className="absolute inset-0 bar-field text-white/10" aria-hidden />
        <div className="container-hd relative py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white max-w-xl">
              Let&rsquo;s design infrastructure that stays on air.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/contact" className="btn-primary !bg-white !text-signal-blue hover:!bg-white/90">
              Start a conversation
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

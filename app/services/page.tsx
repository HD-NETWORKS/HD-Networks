import type { Metadata } from "next";
import Link from "next/link";
import { Satellite, Database, LifeBuoy, Network, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FootprintVisual from "@/components/FootprintVisual";
import BackgroundVideo from "@/components/BackgroundVideo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Satellite broadcast, data center & colocation, managed IT support, and network connectivity — engineered and monitored for clients worldwide from London and Lagos.",
};

const SERVICES = [
  {
    id: "broadcast",
    icon: Satellite,
    index: "01",
    eyebrow: "Broadcast",
    title: "Satellite Broadcast",
    description:
      "End-to-end broadcast infrastructure — from teleport uplink to final-mile distribution — engineered for signal continuity and monitored around the clock.",
    features: [
      { t: "Teleport uplink & downlink", d: "Managed access to satellite space segment for permanent and occasional-use links." },
      { t: "Satellite viewer support", d: "Technical support for viewers and end-users receiving your signal via satellite, anywhere in our footprint." },
      { t: "Managed streaming operations", d: "We monitor, manage and troubleshoot your live stream on your behalf — or hand you the controls." },
      { t: "Multi-protocol & browser streaming", d: "SRT, RTMP, HLS and ZIXI ingest and delivery, with instant playback in any browser — no app or decoder required." },
    ],
  },
  {
    id: "datacenter",
    icon: Database,
    index: "02",
    eyebrow: "Infrastructure",
    title: "Data Center & Colocation",
    description:
      "Rack, cage and private suite colocation on redundant power and cooling — built so a single component failure never becomes your outage.",
    features: [
      { t: "N+1 power & cooling", d: "Redundant electrical and thermal design engineered for continuous operation." },
      { t: "24/7 remote hands", d: "On-site engineers for installs, reboots and hardware swaps at any hour." },
      { t: "Carrier-neutral cross-connects", d: "Direct interconnects to carriers, ISPs and cloud on-ramps." },
      { t: "Hosted streaming infrastructure", d: "We host and manage your streaming servers and equipment — or give you full remote control to self-manage." },
      { t: "Physical & access security", d: "Monitored, access-controlled facilities protecting your hardware." },
    ],
  },
  {
    id: "it-support",
    icon: LifeBuoy,
    index: "03",
    eyebrow: "Managed Services",
    title: "IT Support & Managed Services",
    description:
      "Proactive monitoring, helpdesk and infrastructure management, run by engineers who resolve issues before they reach your team.",
    features: [
      { t: "24/7 NOC monitoring", d: "Continuous monitoring of servers, endpoints and network health." },
      { t: "Managed servers & endpoints", d: "Patch management, backups and lifecycle support for your fleet." },
      { t: "Rapid-response helpdesk", d: "Direct access to engineers, not a scripted first-line queue." },
      { t: "IT strategy & procurement", d: "Infrastructure planning and vendor-neutral hardware sourcing." },
    ],
  },
  {
    id: "network",
    icon: Network,
    index: "04",
    eyebrow: "Connectivity",
    title: "Network & Connectivity",
    description:
      "Resilient connectivity linking client sites worldwide to each other, to our London and Lagos hubs, and to the cloud.",
    features: [
      { t: "Dedicated internet access", d: "Symmetrical, business-grade bandwidth with defined SLAs." },
      { t: "Point-to-point links", d: "Private links between sites, data centers and teleports." },
      { t: "Redundant routing paths", d: "Multi-path routing designed to remove single points of failure." },
      { t: "Network design & consulting", d: "Architecture and capacity planning for growing infrastructure." },
    ],
  },
];

function ServiceSection({ service, idx }: { service: (typeof SERVICES)[number]; idx: number }) {
  return (
    <section
      id={service.id}
      className={`scroll-mt-20 py-24 md:py-28 ${idx % 2 === 1 ? "bg-white" : ""}`}
    >
      <div className="container-hd">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-ink text-white rounded-card">
                <service.icon size={26} strokeWidth={1.75} />
              </div>
              <div>
                <p className="eyebrow text-signal-red">{service.eyebrow}</p>
                <p className="font-mono text-xs text-slate mt-1">{service.index} / 04</p>
              </div>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-5">{service.title}</h2>
            <p className="text-slate text-[16px] leading-relaxed max-w-md">{service.description}</p>
            <Link href="/contact" className="btn-ghost mt-8">
              Discuss this service
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="card-hd p-6 h-full">
                  <span className="font-mono text-xs text-signal-blue">{`0${i + 1}`}</span>
                  <h3 className="font-heading font-semibold text-[17px] mt-3 mb-2">{f.t}</h3>
                  <p className="text-slate text-sm leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const COVERAGE_REGIONS = [
  { region: "West Africa", countries: "Nigeria, Ghana, Liberia, Togo, Guinea, Gambia" },
  { region: "Central Africa", countries: "Chad, Central African Republic, Equatorial Guinea" },
  { region: "East Africa", countries: "Ethiopia, Kenya, Rwanda, Tanzania, Eritrea" },
  { region: "Southern Africa", countries: "Angola, Zambia, Mozambique, Namibia, South Africa" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines. One operating standard."
        description="Satellite broadcast, data center & colocation, managed IT support, and network connectivity — designed, deployed and monitored by the same team, to the same standard."
      />

      <ServiceSection service={SERVICES[0]} idx={0} />

      <section id="coverage" className="scroll-mt-20 bg-white py-24 md:py-28">
        <div className="container-hd grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">Coverage</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              A satellite footprint spanning West, Central, East &amp; Southern Africa.
            </h2>
            <p className="text-slate text-[16px] leading-relaxed mb-8">
              Our Ku-band footprint reaches viewers and end-users across large
              parts of the continent from a single teleport. Exact coverage
              and signal strength vary by beam and service — get in touch for
              a detailed footprint map for your location.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
              {COVERAGE_REGIONS.map((r) => (
                <div key={r.region}>
                  <p className="font-heading font-semibold text-sm mb-1">{r.region}</p>
                  <p className="text-slate text-sm leading-relaxed">{r.countries}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-ghost">
              Request a coverage map
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-ink rounded-card overflow-hidden">
              <FootprintVisual />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceSection service={SERVICES[1]} idx={2} />

      <section className="relative h-[380px] md:h-[480px] overflow-hidden bg-ink">
        <BackgroundVideo
          webm="/video/datacenter-loop.webm"
          mp4="/video/datacenter-loop.mp4"
          poster="/video/datacenter-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" aria-hidden />
        <div className="absolute inset-0 bg-signal-blue/25 mix-blend-multiply" aria-hidden />
        <div className="relative container-hd h-full flex items-end pb-12 md:pb-16">
          <Reveal>
            <p className="eyebrow text-signal-red mb-3">Inside the network</p>
            <p className="font-heading font-bold text-2xl md:text-3xl text-white max-w-lg leading-snug">
              Real racks, real uplinks — monitored around the clock, not just on the brochure.
            </p>
          </Reveal>
        </div>
      </section>

      {SERVICES.slice(2).map((service, i) => (
        <ServiceSection key={service.id} service={service} idx={i + 3} />
      ))}

      <section className="relative bg-signal-blue overflow-hidden">
        <div className="absolute inset-0 bar-field text-white/10" aria-hidden />
        <div className="container-hd relative py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white max-w-xl">
              Not sure which service fits? Let&rsquo;s talk it through.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/contact" className="btn-primary !bg-white !text-signal-blue hover:!bg-white/90">
              Contact an engineer
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

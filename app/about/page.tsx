import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, Radio, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "HD Networks is a UK and Nigeria-based infrastructure provider spanning satellite broadcast, data center & colocation, and managed IT services.",
};

const VALUES = [
  {
    icon: Radio,
    title: "Signal continuity first",
    body: "We borrow our operating standard from broadcast, where a dropped signal is never acceptable. That discipline carries into every service we run.",
  },
  {
    icon: ShieldCheck,
    title: "Direct, technical, honest",
    body: "We lead with facts and numbers, not hype. If something is at risk, you hear it from an engineer, early, in plain terms.",
  },
  {
    icon: Globe2,
    title: "Two regions, one team",
    body: "Our UK and Nigeria operations share tooling, escalation paths and reporting — infrastructure doesn't behave differently by postcode.",
  },
  {
    icon: Users,
    title: "Engineers on the account",
    body: "Clients speak to the people who build and monitor their infrastructure, not a layer of account management between them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HD Networks"
        title="Infrastructure built the way broadcast is built — to stay on."
        description="HD Networks is an infrastructure provider spanning satellite broadcast, data center & colocation, and managed IT — operating across the UK and Nigeria under a single technical standard."
      />

      <section className="py-24 md:py-28">
        <div className="container-hd grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">Our approach</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              We started in broadcast. It shows in everything else we run.
            </h2>
            <p className="text-slate text-[16px] leading-relaxed mb-5">
              Broadcast infrastructure has no tolerance for downtime — a lost
              uplink is a lost broadcast, live, in front of an audience. HD
              Networks applies that same standard of signal continuity to data
              center, colocation and managed IT services.
            </p>
            <p className="text-slate text-[16px] leading-relaxed">
              That means redundant power and routing paths as a default, not
              an upsell; monitoring that runs 24 hours a day; and engineers
              who understand infrastructure end to end, from the satellite
              link down to the rack.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-ink rounded-card p-10 relative overflow-hidden">
              <div className="absolute inset-0 bar-field text-white/[0.05]" aria-hidden />
              <div className="relative grid grid-cols-2 gap-8">
                <div>
                  <p className="font-heading font-bold text-3xl text-white">24/7</p>
                  <p className="eyebrow text-white/40 mt-2">Operations monitoring</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-white">2</p>
                  <p className="eyebrow text-white/40 mt-2">Regions: UK &amp; Nigeria</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-white">4</p>
                  <p className="eyebrow text-white/40 mt-2">Core disciplines</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-white">N+1</p>
                  <p className="eyebrow text-white/40 mt-2">Power &amp; cooling design</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28 border-y border-line">
        <div className="container-hd">
          <Reveal>
            <p className="eyebrow text-signal-red mb-4">What we value</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-xl">
              Four principles that shape how we operate.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card-hd p-8 h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-paper border border-line rounded-card text-signal-blue mb-6">
                    <v.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2.5">{v.title}</h3>
                  <p className="text-slate text-[15px] leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-signal-blue overflow-hidden">
        <div className="absolute inset-0 bar-field text-white/10" aria-hidden />
        <div className="container-hd relative py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white max-w-xl">
              Want infrastructure that runs like a broadcast signal — always on?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/contact" className="btn-primary !bg-white !text-signal-blue hover:!bg-white/90">
              Get in touch
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

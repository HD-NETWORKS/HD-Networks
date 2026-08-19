import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to an HD Networks engineer about satellite broadcast, data center & colocation, or managed IT support. Serving clients worldwide from London and Lagos.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Whether it's a broadcast link, a rack in colocation, or a network that needs to be more resilient, tell us what you're working on."
      />

      <section className="py-24 md:py-28">
        <div className="container-hd grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16">
          <Reveal>
            <div className="card-hd p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-10">
              <div>
                <p className="eyebrow text-signal-red mb-4">Direct</p>
                <div className="flex items-start gap-3 text-[15px] mb-2">
                  <Mail size={18} className="text-signal-blue mt-0.5 shrink-0" />
                  <span>
                    <a href="mailto:sales@hd-networks.com" className="link-underline">
                      sales@hd-networks.com
                    </a>
                    <span className="text-slate"> (new business)</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[15px] mb-3">
                  <Mail size={18} className="text-signal-blue mt-0.5 shrink-0" />
                  <span>
                    <a href="mailto:support@hd-networks.com" className="link-underline">
                      support@hd-networks.com
                    </a>
                    <span className="text-slate"> (technical issues)</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <MapPin size={18} className="text-signal-blue mt-0.5 shrink-0" />
                  <span>
                    Kemp House, 160 City Road, London EC1V 2NX
                    <br />
                    Magodo Phase 2, Lagos, Nigeria
                    <br />
                    <span className="text-slate">Serving clients worldwide</span>
                  </span>
                </div>
              </div>

              <div>
                <p className="eyebrow text-signal-red mb-4">Response time</p>
                <div className="flex items-start gap-3 text-[15px]">
                  <Clock size={18} className="text-signal-blue mt-0.5 shrink-0" />
                  <span>~3 minute target response, NOC monitored 24/7, all year round.</span>
                </div>
              </div>

              <div className="bg-ink rounded-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bar-field text-white/[0.05]" aria-hidden />
                <p className="relative eyebrow text-white/50 mb-3">Existing client?</p>
                <p className="relative text-white text-[15px] leading-relaxed">
                  For urgent, service-affecting issues, use the escalation
                  contact provided in your onboarding documentation for the
                  fastest response.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

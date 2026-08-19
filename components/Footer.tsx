import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { href: "/services#broadcast", label: "Satellite Broadcast" },
  { href: "/services#datacenter", label: "Data Center & Colocation" },
  { href: "/services#it-support", label: "IT Support & Managed Services" },
  { href: "/services#network", label: "Network & Connectivity" },
];

const COMPANY = [
  { href: "/about", label: "About HD Networks" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="bar-divider" />
      <div className="container-hd py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Image
              src="/hd-networks-logo.png"
              alt="HD Networks"
              width={140}
              height={66}
              className="h-11 w-auto mb-5 brightness-0 invert opacity-95"
            />
            <p className="text-white/60 text-[15px] leading-relaxed max-w-xs">
              Satellite broadcast, data center &amp; colocation, and managed IT
              infrastructure, engineered and monitored for clients worldwide
              from London and Lagos.
            </p>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-white/75 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">Company</p>
            <ul className="space-y-3">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-white/75 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[15px] text-white/75">
                <Mail size={16} className="mt-1 text-signal-red shrink-0" />
                <span>
                  <a href="mailto:sales@hd-networks.com" className="hover:text-white transition-colors">
                    sales@hd-networks.com
                  </a>
                  <br />
                  <a href="mailto:support@hd-networks.com" className="hover:text-white transition-colors">
                    support@hd-networks.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/75">
                <MapPin size={16} className="mt-1 text-signal-red shrink-0" />
                <span>
                  Kemp House, 160 City Road, London EC1V 2NX
                  <br />
                  Magodo Phase 2, Lagos, Nigeria
                </span>
              </li>
            </ul>
            <Link href="/contact" className="btn-ghost-dark mt-6">
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <p className="text-white/40 text-[13px] font-mono">
            © {new Date().getFullYear()} HD Networks. All rights reserved.
          </p>
          <p className="text-white/40 text-[13px] font-mono uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-red animate-pulse-dot" />
            Systems monitored 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-hd flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/hd-networks-logo.png" alt="HD Networks" width={132} height={62} priority className="h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`eyebrow link-underline ${
                pathname === link.href ? "text-signal-blue" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Talk to an engineer
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <div className="container-hd flex flex-col py-6 gap-6">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="eyebrow text-ink">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-fit">
              Talk to an engineer
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

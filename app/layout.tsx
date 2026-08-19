import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hd-networks.com"),
  title: {
    default: "HD Networks — Satellite Broadcast, Data Center & IT Infrastructure",
    template: "%s — HD Networks",
  },
  description:
    "HD Networks engineers and operates satellite broadcast, data center & colocation, and managed IT infrastructure for clients worldwide, from London and Lagos — monitored 24/7, built to stay on air.",
  keywords: [
    "satellite broadcast",
    "teleport services",
    "data center colocation",
    "managed IT support",
    "network infrastructure",
    "HD Networks",
    "Nigeria data center",
    "UK broadcast services",
  ],
  openGraph: {
    title: "HD Networks — Satellite Broadcast, Data Center & IT Infrastructure",
    description:
      "Engineering signal, space and support for clients worldwide — satellite broadcast, colocation, and managed IT, monitored 24/7 from London and Lagos.",
    url: "https://hd-networks.com",
    siteName: "HD Networks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
  { label: "Media", href: "#media" },
];

function HamburgerIcon() {
  return (
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="30" height="2.5" rx="1.25" fill="white" />
      <rect y="7.75" width="30" height="2.5" rx="1.25" fill="white" />
      <rect y="15.5" width="30" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}

function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute left-[14%] top-1/2 h-[160%] w-auto -translate-y-1/2 opacity-[0.14]"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="210" cy="210" r="190" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="210" cy="210" r="150" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="210" cy="210" r="110" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <ellipse cx="210" cy="210" rx="190" ry="65" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <ellipse cx="210" cy="210" rx="65" ry="190" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <line x1="20" y1="210" x2="400" y2="210" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
        <line x1="210" y1="20" x2="210" y2="400" stroke="white" strokeWidth="1" strokeDasharray="3 7" />
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-[#001540]">
      <BackgroundPattern />

      <Container className="relative flex h-[72px] items-center pr-[240px] md:pr-[270px]">
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/assets/images/logo.png"
            alt="Mir Helal"
            width={180}
            height={70}
            className="h-14 w-auto"
          />
        </Link>

        <nav className="relative z-10 ml-8 hidden items-center gap-6 md:flex lg:ml-14 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 items-center gap-5 lg:right-8 lg:gap-6">
          <Link
            href="#contact"
            className="font-bengali whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#001540] shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_26px_rgba(255,255,255,0.55)] md:px-6 md:text-sm"
          >
            যোগাযোগ ও মতামত
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            className="flex items-center justify-center transition-opacity hover:opacity-80"
          >
            <HamburgerIcon />
          </button>
        </div>
      </Container>
    </header>
  );
}

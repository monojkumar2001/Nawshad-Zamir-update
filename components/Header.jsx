"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import DrawerMenu from "@/components/DrawerMenu";

const SCROLL_THRESHOLD = 80;

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Timeline", href: "/timeline" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
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
      <div className="absolute left-20 top-0 h-full w-[55%] max-w-[620px] opacity-[0.10] mix-blend-screen sm:w-[50%] md:max-w-[720px] lg:max-w-[820px]">
        <Image
          src="/assets/images/header-shap.png"
          alt=""
          fill
          sizes="(max-width: 768px) 55vw, 820px"
          className="object-cover object-left"
          priority
        />
      </div>
    </div>
  );
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full bg-[#051A53] transition-[box-shadow,background-color] duration-500 ease-in-out ${
        isSticky
          ? "bg-[#051A53]/95 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "shadow-none"
      }`}
    >
      <BackgroundPattern />

      <Container
        className={`relative flex items-center pr-[240px] transition-all duration-500 ease-in-out md:pr-[270px] ${
          isSticky ? "h-[84px]" : "h-[84px]"
        }`}
      >
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/assets/images/logo.png"
            alt="Mir Helal"
            width={180}
            height={70}
            className={`w-auto transition-all duration-500 ease-in-out ${
              isSticky ? "h-14" : "h-16"
            }`}
          />
        </Link>

        <nav className="relative z-10 ml-24 hidden items-center gap-6 md:flex  lg:gap-14 xl:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-base font-medium text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 items-center gap-5 lg:right-8 lg:gap-6">
          <Link
            href="/inform"
            className=" whitespace-nowrap rounded-md bg-white px-5 py-2.5 text-[15px] font-semibold text-[#001540] shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow hover:shadow-[0_0_26px_rgba(255,255,255,0.55)] md:px-6 md:text-base"
          >
            যোগাযোগ ও মতামত
          </Link>
        </div>
      </Container>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        aria-controls="site-drawer"
        onClick={() => setIsMenuOpen(true)}
        className="absolute right-10 top-1/2 z-30 flex -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-80"
      >
        <HamburgerIcon />
      </button>

    </header>

    <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

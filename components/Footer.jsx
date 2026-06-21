"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Container from "@/components/Container";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "News", href: "#news" },
  { label: "Events", href: "#events" },
  { label: "Media", href: "#media" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BarristerNawshadZamir",
    Icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/mirhelal",
    Icon: FaTwitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@barristermirhelal",
    Icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/barrister-mir-mohammed-helal-uddin-4a581a2a/",
    Icon: FaLinkedinIn,
  },
];

const aboutText =
  "Since my early teenage years I have had a strong interest in the world that I live in; wanting to understand where mine and others' places can be and are in society; not just locally but globally. I always wanted to work to improve the lives of the people of Bangladesh. I realised getting involved in politics would enable me to work for the social and economic development of Bangladesh. We need change, and we need to act to bring about the change. Long live Bangladesh.";

function FooterLogo() {
  return (
    <Link href="/" className="inline-block shrink-0">
      <div className="relative inline-block border-2 border-[#D82221] px-5 py-2.5 pb-6">
        <span className="text-base font-bold uppercase tracking-[0.18em] text-white md:text-lg">
          Mir Helal
        </span>
        <span
          className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[#D82221]"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#001540]" />
      <div className="absolute inset-x-0 bottom-0 h-[70%] opacity-[0.22]">
        <Image
          src="/assets/images/shap.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-0 invert hue-rotate-[180deg] saturate-50"
        />
      </div>
    </div>
  );
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#001540] text-white ">
      <FooterBackground />

      <Container className="relative z-10">
        {/* top — logo + email */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-10 sm:flex-row sm:items-center md:py-12">
          <FooterLogo />

          <a
            href="mailto:connect@mirhelal.com"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D82221]">
              <FaEnvelope className="h-4 w-4 text-white" />
            </span>
            <span>
              <span className="block text-xs text-[#7eb8ff]">Email us</span>
              <span className="text-sm font-semibold text-white md:text-base">
                connect@mirhelal.com
              </span>
            </span>
          </a>
        </div>

        {/* main columns */}
        <div className="grid gap-10 py-10 md:grid-cols-12 md:gap-8 md:py-12 lg:gap-12">
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="mb-4 text-base font-bold text-white">About</h3>
            <p className="text-sm leading-relaxed text-gray-300 md:text-[15px] md:leading-7">
              {aboutText}
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="mb-4 text-base font-bold text-white">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="mb-2 text-base font-bold text-white">Follow Updates</h3>
            <p className="mb-5 text-sm text-[#7eb8ff]">
              Follow &amp; Subscribe in Social Medias.
            </p>
            <div className="mb-5 flex gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#0a2555] text-white transition-colors hover:border-[#D82221] hover:bg-[#D82221]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="relative border-t border-white/10 py-6 text-center">
          <p className="text-xs text-[#7eb8ff] md:text-sm">
            © Copyright Reserved by Mir Helal
          </p>

          {showTop && (
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Go to top"
              className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#D82221] text-white transition-transform hover:scale-105"
            >
              <FaArrowUp className="h-4 w-4" />
            </button>
          )}
        </div>
      </Container>
    </footer>
  );
}

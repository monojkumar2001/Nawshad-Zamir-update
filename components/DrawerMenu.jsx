"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const aboutText =
  "Advocate of the Supreme Court of Bangladesh, with degrees in law (LL.B Hons and LL.M) from the University of London, also called to the bar of England & Wales (Lincoln's Inn), and the High Court Division, Supreme Court of Bangladesh.";

const contactItems = [
  {
    label: "Phone",
    value: "+880 1711 527527",
    href: "tel:+8801711527527",
    Icon: FaPhone,
  },
  {
    label: "Email",
    value: "connect@mirhelal.com",
    href: "mailto:connect@mirhelal.com",
    Icon: FaEnvelope,
  },
  {
    label: "Website",
    value: "www.mirhelal.com",
    href: "https://mirhelal.com",
    Icon: FaGlobe,
  },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/mirhelal", Icon: FaTwitter },
  {
    label: "Facebook",
    href: "https://www.facebook.com/BarristerNawshadZamir",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/barrister-mir-mohammed-helal-uddin-4a581a2a/",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@barristermirhelal",
    Icon: FaYoutube,
  },
];

export default function DrawerMenu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 z-[100] bg-black/55 transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        id="site-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[110] flex h-full w-full max-w-[380px] flex-col overflow-y-auto bg-[#111111] shadow-[-12px_0_48px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#D82221] text-white transition-transform hover:scale-105"
        >
          <FaTimes className="h-4 w-4" />
        </button>

        <div className="relative h-[220px] w-full shrink-0 sm:h-[400px]">
          <Image
            src="/assets/images/nowashd.png"
            alt="Barrister Mir Helal"
            fill
            sizes="380px"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-8 pt-6">
          <h2 id="drawer-title" className="text-lg font-bold text-white">
            About Mir Helal
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">{aboutText}</p>

          <Link
            href="#about"
            onClick={onClose}
            className="mt-5 inline-flex w-full items-center justify-center bg-[#D82221] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c01e1d]"
          >
            Biography &gt;&gt;
          </Link>

          <h3 className="mt-8 text-base font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-4">
            {contactItems.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D82221] text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-gray-200 transition-colors group-hover:text-white">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D82221] text-white transition-transform hover:scale-105"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>,
    document.body
  );
}

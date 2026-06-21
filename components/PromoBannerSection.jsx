"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

const VIDEO_URL = "https://www.youtube.com/embed/HIb_mdlEZhA?autoplay=1";

export default function PromoBannerSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#021b6c] py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 bottom-0 z-0 w-full max-w-[420px] bg-[url('/assets/images/video-side.png')] bg-contain bg-left bg-no-repeat opacity-90 md:max-w-[520px]"
          aria-hidden="true"
        />
        <div className="site-container relative z-10">
          <div className="relative mx-auto aspect-[16/7] w-full max-w-6xl overflow-hidden rounded-sm">
            <Image
              src="/assets/images/video-img.png"
              alt="Barrister Mir Helal video banner"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-center"
              priority={false}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Play video"
                className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-transform hover:scale-105 md:h-24 md:w-24"
              >
                <span className="absolute inset-0 animate-pulse-zoom rounded-full bg-white/40" />
                <span className="absolute inset-0 animate-pulse-zoom rounded-full bg-white/25 [animation-delay:0.5s]" />
                <FaPlay className="relative ml-1 text-2xl text-[#D82221] md:text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D82221]"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                src={VIDEO_URL}
                title="Barrister Mir Helal video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

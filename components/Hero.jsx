"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=85",
    alt: "Official meeting",
    overlay: "bg-gradient-to-t from-black/50 via-transparent to-transparent",
    type: "badge",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1920&q=85",
    alt: "Public speaking",
    overlay: "bg-[#001540]/65",
    type: "quote",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1920&q=85",
    alt: "Press conference",
    overlay: "bg-[#001540]/55",
    type: "profile",
  },
];

function ArrowPrevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M9 2L4 7L9 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowNextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M5 2L10 7L5 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GovernmentSeal() {
  return (
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#d4af37] bg-white p-1">
      <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#1a6b3c" />
        <circle cx="20" cy="20" r="14" fill="none" stroke="#d4af37" strokeWidth="1" />
        <text x="20" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
          BD
        </text>
      </svg>
    </div>
  );
}

function SlideBadge() {
  return (
    <div className="absolute bottom-20 left-0 right-0 z-20 md:bottom-24">
      <div className="flex max-w-md items-center gap-3 rounded border border-[#d4af37]/80 bg-[#1a6b3c] px-4 py-3 shadow-lg md:gap-4 md:px-5 md:py-4">
        <GovernmentSeal />
        <div className="font-bengali text-white">
          <p className="text-base font-bold leading-snug md:text-lg">
            ব্যারিস্টার মীর হেলাল, এমপি
          </p>
          <p className="mt-1 text-xs leading-relaxed text-white/90 md:text-sm">
            প্রতিমন্ত্রী, ভূমি মন্ত্রণালয় ও পার্বত্য চট্টগ্রাম বিষয়ক মন্ত্রণালয়
          </p>
        </div>
      </div>
    </div>
  );
}

function SlideQuote() {
  return (
    <div className="flex h-full items-center">
      <div className="w-full max-w-2xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white md:text-sm">
          I would always stand up for
        </p>
        <h2 className="mb-1 text-3xl font-bold uppercase leading-none text-white md:text-5xl lg:text-6xl">
          What is Right
        </h2>
        <h2 className="mb-6 text-xl font-bold uppercase leading-tight text-white md:text-3xl lg:text-4xl">
          Even if I have to stand{" "}
          <span className="text-3xl text-[#E31837] md:text-5xl lg:text-6xl">Alone</span>
        </h2>
        <p className="mb-6 text-base text-white md:text-lg">- Barrister Mir Helal</p>
        <div className="inline-block bg-[#E31837] px-4 py-2.5 text-xs font-medium text-white md:text-sm">
          State Minister of Bangladesh, Land &amp; Chittagong Hill Tracts Affairs
        </div>
      </div>
    </div>
  );
}

function SlideProfile() {
  return (
    <div className="flex h-full items-center justify-end">
      <div className="w-full max-w-md text-right">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-white md:text-sm">
          Barrister
        </p>
        <h2 className="mb-4 text-4xl font-bold uppercase leading-none text-white md:text-6xl lg:text-7xl">
          Mir Helal
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-white md:ml-auto md:text-base">
          State Minister of Bangladesh, Land &amp; Chittagong Hill Tracts Affairs
        </p>
        <Link
          href="#media"
          className="inline-block bg-[#E31837] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c41430] md:text-sm"
        >
          Media Publications
        </Link>
      </div>
    </div>
  );
}

function SlideContent({ type }) {
  if (type === "badge") return <SlideBadge />;
  if (type === "quote") return <SlideQuote />;
  if (type === "profile") return <SlideProfile />;
  return null;
}

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-72px)] min-h-[520px] max-h-[860px]">
        <Swiper
          className="h-full w-full"
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={700}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className={`absolute inset-0 ${slide.overlay}`} />

              <div className="pointer-events-none absolute inset-0 z-20">
                <div className="site-container relative h-full">
                  <div className="pointer-events-auto relative h-full pb-8">
                    <SlideContent type={slide.type} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-0 z-30">
          <div className="site-container relative h-full">
            <div className="pointer-events-auto absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2 lg:right-8">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/35 md:h-10 md:w-10"
              >
                <ArrowPrevIcon />
              </button>
              <button
                ref={nextRef}
                type="button"
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/35 md:h-10 md:w-10"
              >
                <ArrowNextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

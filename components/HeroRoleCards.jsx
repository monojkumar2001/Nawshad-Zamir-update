"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const roleCards = [
  {
    number: "01",
    title: "State Minister of Bangladesh",
    subtitle: "Land & Chittagong Hill Tracts Affairs",
    icon: "seal",
  },
  {
    number: "02",
    title: "Assistant Organising Secretary(Chattogram)",
    subtitle: "National Executive Committee, BNP",
    icon: "people",
  },
  {
    number: "03",
    title: "Special Assistant to BNP Chairperson's",
    subtitle: "Foreign Affairs Advisory Committee",
    icon: "laptop",
  },
  {
    number: "04",
    title: "Director, Ziaur Rahman Foundation",
    subtitle: "Ziaur Rahman Foundation",
    icon: "shield",
  },
  {
    number: "05",
    title: "Member, BNP Media Cell",
    subtitle: "Member of the Bangladesh Nationalist Party's Media Cell",
    icon: "org",
  },
];

function OrgChartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="15" y="6" width="10" height="8" rx="1" stroke="#E31837" strokeWidth="1.5" />
      <path d="M20 14V18" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 18H30" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 18V22M30 18V22" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="22" width="10" height="8" rx="1" stroke="#E31837" strokeWidth="1.5" />
      <rect x="25" y="22" width="10" height="8" rx="1" stroke="#E31837" strokeWidth="1.5" />
    </svg>
  );
}

function SealIcon() {
  return (
    <Image
      src="/assets/images/gov-seal.svg"
      alt=""
      width={44}
      height={44}
      className="h-11 w-11 object-contain"
    />
  );
}

function PeopleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="12" r="5" stroke="#E31837" strokeWidth="1.5" />
      <circle cx="28" cy="14" r="4" stroke="#E31837" strokeWidth="1.5" />
      <path
        d="M6 32C6 26 10 22 14 22C18 22 20 25 20 25C20 25 22 22 26 22C30 22 34 26 34 32"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="16" cy="14" r="5" stroke="#E31837" strokeWidth="1.5" />
      <rect x="8" y="24" width="24" height="12" rx="1" stroke="#E31837" strokeWidth="1.5" />
      <path d="M4 36H36" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 14H30M26 10V18" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 4L32 9V19C32 27 26 33 20 36C14 33 8 27 8 19V9L20 4Z"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 12L22.5 17.5H28.5L23.5 21L25.5 27L20 23.5L14.5 27L16.5 21L11.5 17.5H17.5L20 12Z"
        stroke="#E31837"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon({ type }) {
  switch (type) {
    case "org":
      return <OrgChartIcon />;
    case "seal":
      return <SealIcon />;
    case "people":
      return <PeopleIcon />;
    case "laptop":
      return <LaptopIcon />;
    case "shield":
      return <ShieldIcon />;
    default:
      return null;
  }
}

function RoleCard({ card }) {
  return (
    <article className="group relative min-h-[190px] overflow-hidden rounded-lg bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] md:min-h-[200px] md:p-8">
      <div
        className="absolute right-0 top-0 h-[76px] w-[76px] rounded-bl-full bg-[#fde8e4] transition-colors duration-300 group-hover:bg-[#E31837] md:h-[84px] md:w-[84px]"
        aria-hidden="true"
      />
      <span className="absolute right-5 top-4 z-10 text-xl font-bold text-[#001540] md:right-6 md:top-5">
        {card.number}
      </span>

      <div className="relative mb-5 pt-0.5">
        <CardIcon type={card.icon} />
      </div>

      <h3 className="relative pr-12 text-[15px] font-bold leading-snug text-[#001540] md:text-base">
        {card.title}
      </h3>
      <p className="relative mt-2.5 text-[13px] leading-relaxed text-gray-500">
        {card.subtitle}
      </p>
    </article>
  );
}

export default function HeroRoleCards() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(2);

  const updateSlideCount = (swiper) => {
    setSlideCount(swiper.snapGrid.length);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="relative z-30 -mt-24 pb-10 md:-mt-28">
      <div className="site-container ">
        <div className="max-w-7xl mx-auto overflow-hidden" >
          <Swiper
            className="role-cards-swiper !overflow-visible"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateSlideCount(swiper);
            }}
            onSlideChange={updateSlideCount}
            onBreakpoint={updateSlideCount}
            slidesPerView={1.15}
            slidesPerGroup={1}
            spaceBetween={16}
            speed={500}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
          >
            {roleCards.map((card) => (
              <SwiperSlide key={card.number} className="!h-auto">
                <RoleCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-7 flex items-center justify-center gap-3">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => swiperRef.current?.slideTo(index)}
                className="flex h-5 w-5 items-center justify-center"
              >
                {activeIndex === index ? (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#E31837]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E31837]" />
                  </span>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors hover:bg-gray-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

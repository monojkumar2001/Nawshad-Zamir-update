"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaPlay,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import Container from "@/components/Container";
import "swiper/css";

const galleryItems = [
  { src: "/assets/images/gallery/1.jpg", alt: "Political rally and public gathering" },
  { src: "/assets/images/gallery/2.jpg", alt: "Community discussion and meeting" },
  { src: "/assets/images/gallery/3.jpg", alt: "Social and political event" },
  { src: "/assets/images/gallery/4.jpg", alt: "Development and public program" },
  { src: "/assets/images/gallery/5.jpg", alt: "Public meeting and outreach" },
  { src: "/assets/images/gallery/6.jpg", alt: "Youth engagement program" },
  { src: "/assets/images/gallery/7.jpg", alt: "Community welfare activity" },
  { src: "/assets/images/gallery/8.jpg", alt: "Political and social gathering" },
];

function HoverIcon() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-white"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function GallerySlide({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-lg text-left"
      aria-label={`Open ${item.alt}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#D82221] via-[#D82221]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <HoverIcon />
      </div>
    </button>
  );
}

function GalleryLightbox({ index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [zoomed, setZoomed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const lightboxRef = useRef(null);
  const total = galleryItems.length;

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setZoomed(false);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    setZoomed(false);
  }, [total]);

  const handleClose = useCallback(() => {
    setPlaying(false);
    setZoomed(false);
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
    onClose();
  }, [onClose]);

  const toggleFullscreen = async () => {
    if (!lightboxRef.current) return;
    if (!document.fullscreenElement) {
      await lightboxRef.current.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    setCurrent(index);
    setZoomed(false);
    setPlaying(false);
  }, [index]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose, goPrev, goNext]);

  useEffect(() => {
    if (!playing) return undefined;
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [playing, goNext]);

  const item = galleryItems[current];

  return (
    <div
      ref={lightboxRef}
      className="fixed inset-0 z-[200] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery lightbox"
    >
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <p className="text-sm font-medium text-white md:text-base">
          {current + 1} / {total}
        </p>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <FaSearchPlus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 ${playing ? "bg-white/15" : ""}`}
          >
            <FaPlay className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <FaExpand className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close gallery"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* image area */}
      <div className="relative flex flex-1 items-center justify-center px-12 md:px-20">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition-colors hover:text-white md:left-6"
        >
          <FaChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        <div
          className={`relative h-[58vh] w-full max-w-5xl transition-transform duration-500 ease-out md:h-[68vh] ${zoomed ? "scale-125" : "scale-100"}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition-colors hover:text-white md:right-6"
        >
          <FaChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default function PhotoGallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mb-10 md:mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D82221]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D82221]">
              Photo Gallery
            </p>
          </div>
          <h2 className="max-w-3xl text-2xl font-bold leading-snug text-[#051A53] md:text-3xl lg:text-4xl">
            Explore Political &amp; Social Activities In Photos
          </h2>
        </div>
      </Container>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={16}
        loop
        speed={2500}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 18 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="gallery-swiper"
      >
        {galleryItems.map((item, index) => (
          <SwiperSlide key={index}>
            <GallerySlide item={item} onOpen={() => setLightboxIndex(index)} />
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxIndex !== null && (
        <GalleryLightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L8 3M13 8L8 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EventCard({ event }) {
  const isFeatured = event.featured;

  return (
    <article className="group relative min-h-[300px] overflow-hidden rounded-md sm:min-h-[340px]">
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          isFeatured
            ? "bg-gradient-to-b from-black/55 via-black/45 to-black/70"
            : "bg-gradient-to-t from-black/90 via-black/25 to-transparent group-hover:from-black/80 group-hover:via-black/45"
        }`}
      />

      {isFeatured ? (
        <>
          <span className="absolute left-4 top-4 z-10 bg-[#D82221] px-3 py-1.5 text-xs font-bold text-white md:text-sm">
            {event.date}
          </span>

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-5">
            <h3 className="font-bengali mt-12 max-w-[92%] text-lg font-bold leading-snug text-white md:mt-14 md:text-xl">
              {event.title}
            </h3>

            <div className="space-y-4 pb-12">
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <FaClock className="h-4 w-4 shrink-0 text-[#D82221]" />
                    <span className="text-sm font-semibold md:text-base">{event.time}</span>
                  </div>
                  <p className="mt-1 pl-6 text-xs text-white/70">Timing</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-[#D82221]" />
                    <span className="text-sm font-semibold md:text-base">{event.location}</span>
                  </div>
                  <p className="mt-1 pl-6 text-xs text-white/70">Location</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View event: ${event.title}`}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#051A53] shadow-lg transition-transform hover:scale-105"
          >
            <ArrowIcon />
          </Link>
        </>
      ) : (
        <>
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
            <span className="inline-block bg-[#D82221] px-3 py-1.5 text-xs font-bold text-white md:text-sm">
              {event.date}
            </span>
            <h3 className="font-bengali mt-3 text-base font-bold leading-snug text-white md:text-lg">
              {event.title}
            </h3>

            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mb-2 group-hover:max-h-40 group-hover:opacity-100">
              <div className="mt-4 flex flex-wrap gap-5 md:gap-8">
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <FaClock className="h-4 w-4 shrink-0 text-[#D82221]" />
                    <span className="text-sm font-semibold">{event.time}</span>
                  </div>
                  <p className="mt-1 pl-6 text-xs text-white/70">Timing</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-[#D82221]" />
                    <span className="text-sm font-semibold">{event.location}</span>
                  </div>
                  <p className="mt-1 pl-6 text-xs text-white/70">Location</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View event: ${event.title}`}
            className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#051A53] opacity-0 shadow-lg transition-all duration-300 hover:scale-105 group-hover:opacity-100"
          >
            <ArrowIcon />
          </Link>
        </>
      )}
    </article>
  );
}

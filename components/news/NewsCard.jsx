import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1 7H13M13 7L7 1M13 7L7 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsCard({ item }) {
  const isBengali = /[\u0980-\u09FF]/.test(item.title);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3
          className={`text-base font-extrabold leading-snug text-[#051A53] md:text-lg ${
            isBengali ? "font-bengali" : ""
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-[#6B6C70]">- {item.source}</p>

        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D82221] transition-opacity hover:opacity-80"
        >
          Read More
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

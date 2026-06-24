import Image from "next/image";
import Container from "@/components/Container";

function TimelineMarker({ side, className = "" }) {
  const dotColor = side === "left" ? "bg-[#D82221]" : "bg-[#051A53]";

  return (
    <div className={`absolute z-20 -translate-x-1/2 ${className}`} aria-hidden="true">
      <span className="relative flex h-[33px] w-[33px] items-center justify-center rounded-full border border-[#102f811a] bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.9)]">
        <span className={`h-[13px] w-[13px] rounded-full ${dotColor}`} />
      </span>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = item.side === "left";
  const isBengaliTitle = /[\u0980-\u09FF]/.test(item.title);

  return (
    <article className={`relative ${index > 0 ? "mt-14 md:mt-20" : ""}`}>
      <TimelineMarker
        side={item.side}
        className={`top-[108px] ${isLeft ? "left-3 lg:left-1/2" : "left-3 lg:left-1/2"}`}
      />

      <div
        className={`relative pl-10 lg:pl-0 ${
          isLeft ? "lg:pr-[calc(50%+30px)]" : "lg:pl-[calc(50%+30px)]"
        }`}
      >
        <div
          className={`w-full max-w-[440px] ${
            isLeft ? "lg:ml-auto" : "lg:mr-auto"
          }`}
        >
          <div className="relative h-[200px] w-full overflow-hidden sm:h-[240px] md:h-[253px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover object-center"
            />
          </div>

          <div
            className={`relative z-10 -mt-12 w-[calc(100%-32px)] px-5 py-5 md:-mt-14 md:px-8 md:py-6 ${
              isLeft
                ? "bg-[#D82221] shadow-[0_10px_60px_rgba(0,0,0,0.1)]"
                : "bg-white shadow-[0_10px_60px_rgba(0,0,0,0.12)]"
            }`}
          >
            <p
              className={`text-xs font-extrabold uppercase tracking-wide md:text-sm ${
                isLeft ? "text-white" : "text-[#D82221]"
              }`}
            >
              {item.date}
            </p>
            <h3
              className={`mt-2 text-base font-extrabold md:text-lg ${
                isBengaliTitle ? "font-bengali leading-relaxed" : ""
              } ${isLeft ? "text-white" : "text-[#051A53]"}`}
            >
              {item.title}
            </h3>
            {item.description && (
              <p
                className={`mt-3 text-sm font-medium leading-7 md:text-[15px] md:leading-[28px] ${
                  isLeft ? "text-white/95" : "text-[#6B6C70]"
                }`}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TimelineSection({ section }) {
  return (
    <section className="bg-white py-12 md:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-20">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#D82221]">
            {section.subtitle}
          </p>
          <h2
            className={`font-roboto text-[35px] font-extrabold uppercase text-[#051A53] md:text-[45px] md:leading-tight ${section.titleTracking}`}
          >
            {section.title}
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1000px] py-2 md:py-8">
          <div
            className="absolute bottom-6 left-3 top-0 w-px bg-[#efefef] lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />
          <span
            className="absolute left-3 top-0 hidden h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-[#efefef] lg:left-1/2 lg:block"
            aria-hidden="true"
          />

          {section.items.map((item, index) => (
            <TimelineItem
              key={`${item.date}-${item.title}`}
              item={item}
              index={index}
            />
          ))}

          <span
            className="absolute bottom-0 left-3 hidden h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-[#efefef] lg:left-1/2 lg:block"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Container from "@/components/Container";
import { biographyParagraphs } from "@/data/about";

const signatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function QuoteIcon({ className = "" }) {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 22V13.2C0 8.4 2.1 4.5 6.3 1.5L9.1 5.1C6.3 7.1 5 9.2 5 11.4H9.8V22H0ZM16.8 22V13.2C16.8 8.4 18.9 4.5 23.1 1.5L25.9 5.1C23.1 7.1 21.8 9.2 21.8 11.4H26.6V22H16.8Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}

export default function AboutBiographySection() {
  return (
    <section className="bg-white pb-16 pt-8 md:pb-24 md:pt-12">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative mx-auto w-full max-w-[520px] pb-12 lg:mx-0 lg:max-w-none lg:pb-16">
            <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              <Image
                src="/assets/images/nowashd.png"
                alt="Barrister Mir Helal"
                width={560}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 right-0 z-10 w-[88%] max-w-[320px] bg-[#D82221] p-6 shadow-[0_12px_32px_rgba(216,34,33,0.35)] md:-bottom-6 md:right-4 md:p-8">
              <QuoteIcon className="h-7 w-7 md:h-10 md:w-10" />
              <p className="mt-4 text-lg font-bold leading-snug text-white md:text-xl md:leading-snug">
                Democracy is the form of government in which the FREE are rulers.
              </p>
              <p className="mt-3 text-sm font-medium text-white/90">-Aristotle</p>
            </div>
          </div>

          <div className="pt-2 lg:pt-4">
            <div className="mb-3 h-0.5 w-12 bg-[#D82221]" />
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#D82221]">
              Biography
            </p>

            <h1 className="mb-8 font-roboto text-3xl font-bold text-[#051A53] md:text-[42px] md:leading-tight">
              About Barrister Mir Helal
            </h1>

            <div className="space-y-6 text-sm leading-[1.85] text-[#6B6C70] md:text-[16px]">
              {biographyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-gray-100 pt-8">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
                <Image
                  src="/assets/images/nowashd.png"
                  alt="Mir Helal"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p
                  className={`${signatureFont.className} text-4xl leading-none text-[#051A53] md:text-[44px]`}
                >
                  Mir Helal
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#6B6C70] md:text-sm">
                  Member of Parliament-Chattogram 5
                  <br />
                  State Minister, Ministry of Land &amp; Chittagong Hill Tracts
                  Affairs
                  <br />
                  Assistant Organizing Secretary (CTG), BNP
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

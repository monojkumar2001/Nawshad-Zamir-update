import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import Container from "@/components/Container";

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

function EmailIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="16" height="12" rx="1.5" stroke="white" strokeWidth="1.5" />
      <path d="M1 2.5L9 8.5L17 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-4 lg:grid-cols-12 h-full lg:gap-4 xl:gap-4">
          <div className="col-span-5">
            <div className="relative mx-auto w-full max-w-[520px] pb-10 lg:mx-0 lg:max-w-none lg:pb-14">
              <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <Image
                  src="/assets/images/nowshad.png"
                  alt="Barrister Mir Helal"
                  width={560}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-4 z-10 w-[88%] max-w-[300px] bg-[#E31837] p-5 shadow-[0_12px_32px_rgba(227,24,55,0.35)] md:-bottom-8 md:left-8 lg:p-8">
                <QuoteIcon className="h-6 w-6 lg:h-16 lg:w-16" />
                <p className="mt-4 text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
                  প্রথম বাংলাদেশ আমার শেষ বাংলাদেশ, জীবন বাংলাদেশ আমার মরন
                  বাংলাদেশ।
                  <br />
                  <span className="mt-2 inline-block">
                    &quot;বাংলাদেশ জিন্দাবাদ&quot;
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — bio content */}
            <div className="col-span-7">
            <div className="pt-4 lg:pt-2">
              <div className="mb-3 h-0.5 w-12 bg-[#E31837]" />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E31837]">
                The Spirit of Inclusive Advancement
              </p>

              <h2 className="mb-6 font-roboto text-3xl font-bold text-[#001540] md:text-[42px] md:leading-tight">
                Barrister Mir Helal
              </h2>

              <div className="space-y-5 text-sm leading-[1.75] text-gray-700 md:text-[16px]">
                <p>
                  Mir Mohammed Helal Uddin is a barrister and Bangladesh
                  Nationalist Party politician. He is the incumbent{" "}
                  <span className="font-semibold text-[#E31837]">
                    Jatiya Sangsad member representing the Chattogram-5
                    constituency
                  </span>{" "}
                  and the incumbent{" "}
                  <span className="font-semibold text-[#E31837]">
                    Minister of State for Chittagong Hill Tracts Affairs
                  </span>{" "}
                  since February 2026. Also, he was appointed as the{" "}
                  <span className="font-semibold text-[#E31837]">
                    Minister of State for Ministry of Land
                  </span>{" "}
                  on 12 March 2026.
                </p>
                <p>
                  By profession an Advocate of the Supreme Court of Bangladesh,
                  a UK trained Barrister-at-Law, Member of the Honourable
                  Society of Lincoln&apos;s Inn, Uk, Barrister Mir Helal hails
                  from a renowned family of Mir Bari, Mirer Khil Mirer Haat,
                  Hathazari, Chattogram, Bangladesh. Barrister Mir Helal is
                  serving as the Assistant Organising Secretary (Chattogram
                  Division) of the National Executive Committee of Bangladesh
                  Nationalist Party – BNP. He is also serving as Special
                  Assistant to BNP Chairperson&apos;s Foreign Affairs Advisory
                  Committee. Beside he has been recently appointed as Director,
                  Ziaur Rahman Foundation. Barrister Mir Helal is also Member of
                  the BNP Media Cell and Life member and Convenor of Legal
                  Research Cell of Ziaur Rahman Foundation, an organization
                  found and headed by the Chairman of BNP &amp; Prime Minister
                  of Bangladesh Mr{" "}
                  <span className="font-semibold text-[#E31837]">
                    Tarique Rahman
                  </span>
                  .
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#E31837]">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a
                    href="mailto:connect@mirhelal.com"
                    className="text-base font-bold text-[#001540] transition-colors hover:text-[#E31837] md:text-lg"
                  >
                    connect@mirhelal.com
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <Link
                  href="#biography"
                  className="inline-block bg-[#001540] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#002868]"
                >
                  Biography
                </Link>

                <div className="text-right sm:max-w-[280px]">
                  <p
                    className={`${signatureFont.className} text-4xl leading-none text-[#001540] md:text-[44px]`}
                  >
                    Mir Helal
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Member of Parliament-Chattogram 5
                    <br />
                    State Minister, Ministry of Land &amp; Chittagong Hill
                    Tracts Affairs
                    <br />
                    Assistant Organizing Secretary (CTG), BNP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

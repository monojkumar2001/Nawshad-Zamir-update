import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

function DecorativeRing() {
  return (
    <div
      className="pointer-events-none absolute -right-16 top-10 z-0 h-[300px] w-[300px] md:-right-20 md:top-10 md:h-[380px] md:w-[380px] lg:h-[380px] lg:w-[380px]"
      aria-hidden="true"
    >
      <Image
        src="/assets/images/rounded.png"
        alt=""
        fill
        sizes="(max-width: 768px) 300px, 420px"
        className="object-contain object-center"
      />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-2  xl:gap-6">
          {/* Left — text + illustration */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D82221]">
              Contact
            </p>

            <h2 className=" text-3xl font-bold leading-tight text-[#051A53] md:text-4xl lg:text-[45px]">
              হাটহাজারীর উন্নয়নে
            </h2>

            <div className="my-8 w-full max-w-[527px] md:max-w-[527px]">
              <Image
                src="/assets/images/contact-us-illustration.png"
                alt="Contact illustration"
                width={527}
                height={351}
                className="mx-auto h-auto w-full object-contain object-center lg:mx-0"
              />
            </div>

            <h3 className=" text-2xl font-bold leading-snug text-[#051A53] md:text-3xl lg:text-4xl">
              যোগাযোগ / অভিযোগ / মতামত
              <br className="hidden sm:block" />
              জানান
            </h3>

            <Link
              href="/inform"
              className="mt-8 ml-auto inline-block rounded-sm bg-[#D82221] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#b81c1c] md:text-base"
            >
              যোগাযোগ ও মতামত
            </Link>
          </div>

          {/* Right — portrait + ring */}
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto lg:max-w-[560px]">
            <DecorativeRing />

            <div className="relative z-10">
              <Image
                src="/assets/images/nawshad.png"
                alt="Barrister Mir Helal"
                width={560}
                height={700}
                className="h-auto w-full object-contain object-center"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

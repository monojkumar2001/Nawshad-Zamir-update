import Image from "next/image";
import Container from "@/components/Container";
import { mediaIntro } from "@/data/media";

function MediaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#051A53]" />
      <div className="absolute inset-x-0 bottom-0 h-[80%] opacity-[0.75]">
        <Image
          src="/assets/images/shap-2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-0 invert hue-rotate-[180deg] saturate-50"
        />
      </div>
    </div>
  );
}

export default function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#051A53] py-16 md:py-20 lg:py-24">
      <MediaBackground />
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E31837]">
            {mediaIntro.subtitle}
          </p>
          <h2 className="mt-3 font-roboto text-3xl font-bold uppercase tracking-wide text-white md:text-[42px] md:leading-tight">
            {mediaIntro.title}
          </h2>
          <p className="mt-6 text-sm leading-[1.85] text-white/90 md:text-base">
            {mediaIntro.description}
          </p>
        </div>
      </Container>
    </section>
  );
}

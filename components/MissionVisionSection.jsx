import Image from "next/image";
import Container from "@/components/Container";

const missionText =
  "Carrying forward the legacy of the family, Barrister Mir Helal's moto is to serve the country and the people and to bring about a change in the present socio-political scenario of Bangladesh. Being tremendously moved by the ideology of Shahid President Ziaur Rahman (A valiant Freedom Fighter, A Sector Commander, The First President of Bangladesh, the most successful State Head of Bangladesh) and inspired & motivated by his son Mr. Tarique Rahman (Chairman of Bangladesh Nationalist Party, BNP) Barrister Mir Helal gradually got involved with BNP in a greater extent and started to actively participate & encourage others to participate in the movements led by BNP to establish rule of law and to establish a democratic socio-political environment in Bangladesh.";

const missionVideos = [
  "HIb_mdlEZhA",
  "oKdgzDVWJ-8",
  "zYHhD-_RLtU",
  "7yD7akvoBZM",
  "oOf4x9IR4ps",
  "x2CFNRprWMU",
];

function MissionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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

function VideoCard({ videoId, title }) {
  return (
    <div className="border-[10px] rounded-lg overflow-hidden border-white bg-black shadow-[0_10px_36px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function MissionVisionSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#051A53]  pt-20 lg:pt-30 lg:pb-24">
        <MissionBackground />
        <Container className="relative z-10 ">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E31837]">
              Brief on the
            </p>
            <h2 className="mt-3 font-roboto text-3xl font-bold uppercase tracking-wide text-white md:text-[42px] md:leading-tight">
              Mission &amp; Vision
            </h2>
            <p className="mt-6 text-sm leading-[1.85] text-white/90 md:text-[16px]">
              {missionText}
            </p>
          </div>
        </Container>
      </section>
      <section className="relative -top-28  ">
        <Container>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
            {missionVideos.map((videoId, index) => (
              <VideoCard
                key={videoId}
                videoId={videoId}
                title={`Barrister Mir Helal video ${index + 1}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

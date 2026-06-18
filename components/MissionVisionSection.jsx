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

function CitySkyline() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full opacity-[0.12]"
      viewBox="0 0 1440 420"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path
        d="M0 420V280L60 250V180L120 150V420M120 420V200L180 170V120L240 90V420M240 420V160L300 130V80L360 50V420M360 420V140L420 110V60L480 30V420M480 420V170L540 140V90L600 60V420M600 420V120L660 90V40L720 10V420M720 420V190L780 160V110L840 80V420M840 420V150L900 120V70L960 40V420M960 420V180L1020 150V100L1080 70V420M1080 420V130L1140 100V50L1200 20V420M1200 420V200L1260 170V120L1320 90V420M1320 420V160L1380 130V80L1440 50V420H0Z"
        fill="#7eb8ff"
      />
      <path
        d="M80 420V300L110 280V220L140 200V420M320 420V260L350 240V190L380 170V420M560 420V310L590 290V240L620 220V420M800 420V270L830 250V200L860 180V420M1040 420V290L1070 270V220L1100 200V420M1280 420V320L1310 300V250L1340 230V420"
        stroke="#a8d4ff"
        strokeWidth="2"
      />
    </svg>
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
    <section className="relative overflow-hidden bg-[#001c44]  py-10 md:py-10 lg:py-20">
      <Container className="relative z-10 ">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E31837]">
            Brief on the
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[42px] md:leading-tight">
            Mission &amp; Vision
          </h2>
          <p className="mt-6 text-sm leading-[1.85] text-white/90 md:text-[15px]">
            {missionText}
          </p>
        </div>

      </Container>
    </section>
    <section className="relative -top-20  ">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
          {missionVideos.map((videoId, index) => (
            <VideoCard
              key={videoId}
              videoId={videoId}
              title={`Barrister Mir Helal video ${index + 1}`}
            />
          ))}
        </div>
    </section>
    </>
  );
}

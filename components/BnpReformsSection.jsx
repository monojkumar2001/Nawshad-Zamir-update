import Container from "@/components/Container";

const reforms = [
  {
    number: "31",
    title: "31 POINTS",
    description: "Outline of Structural Reforms for the State",
    icon: "medal",
  },
  {
    number: "19",
    title: "19 POINTS",
    description: "The Foundation of New Bangladesh",
    icon: "community",
  },
  {
    number: "10",
    title: "10 POINTS",
    description: "The Cornerstone of Future Reforms",
    icon: "documents",
  },
];

function MedalIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="14" r="8" stroke="#E31837" strokeWidth="1.5" />
      <path
        d="M13 22L11 32L18 28L25 32L23 22"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 10L19.6 13.8H23.6L20.3 16.2L21.9 20L18 17.6L14.1 20L15.7 16.2L12.4 13.8H16.4L18 10Z"
        stroke="#E31837"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="40" height="34" viewBox="0 0 40 34" fill="none" aria-hidden="true">
      <circle cx="14" cy="10" r="3.5" stroke="#E31837" strokeWidth="1.5" />
      <circle cx="20" cy="8" r="3.5" stroke="#E31837" strokeWidth="1.5" />
      <circle cx="26" cy="10" r="3.5" stroke="#E31837" strokeWidth="1.5" />
      <path
        d="M10 18C10 14.5 12.5 12 14 12C15.2 12 16.2 12.8 17 14C17.8 12.8 18.8 12 20 12C21.2 12 22.2 12.8 23 14C23.8 12.8 24.8 12 26 12C27.5 12 30 14.5 30 18"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 28C6 23 9 20 12 20C14 20 15.5 21.2 16.5 23C17.5 21.2 19 20 21 20C23 20 24.5 21.2 25.5 23C26.5 21.2 28 20 30 20C33 20 36 23 36 28"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 30H36"
        stroke="#E31837"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="26" rx="1.5" stroke="#E31837" strokeWidth="1.5" />
      <path d="M11 12H21M11 17H21M11 22H17" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="8" width="20" height="26" rx="1.5" stroke="#E31837" strokeWidth="1.5" />
      <path d="M15 16H25M15 21H25M15 26H21" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReformIcon({ type }) {
  if (type === "medal") return <MedalIcon />;
  if (type === "community") return <CommunityIcon />;
  if (type === "documents") return <DocumentsIcon />;
  return null;
}

function ReformCard({ item }) {
  return (
    <article className="relative flex flex-col items-center px-5 pb-12 pt-16 text-center sm:px-6 md:pb-14 md:pt-20">
      <div
        className="absolute inset-0 bg-[#edf2f7]"
        style={{
          clipPath: "polygon(51% 63%, 100% 39%, 100% 100%, 0 100%, 0% 38%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10  mb-7 flex h-[148px] w-[148px] flex-col items-center justify-center gap-1 rounded-full border-2 border-[#E31837] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:h-[156px] md:w-[156px]">
        <ReformIcon type={item.icon} />
        <span className="text-[42px] font-bold leading-none text-[#001540] md:text-[44px]">
          {item.number}
        </span>
      </div>

      <h3 className="relative z-10 mt-4 border-b-2 border-[#001540] px-1 pb-1.5 text-base font-bold uppercase tracking-wide text-[#001540] md:text-lg">
        {item.title}
      </h3>
      <p className="relative z-10 mt-5 max-w-[240px] text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>
    </article>
  );
}

export default function BnpReformsSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="relative max-w-6xl">
        <div className="mx-auto mb-12 max-w-5xl text-center md:mb-16">
          <h2 className="text-xl font-bold uppercase leading-snug tracking-wide text-[#001540] md:text-[26px] md:leading-tight lg:text-[28px]">
            BNP&apos;S PROPOSED OUTLINE FOR STRUCTURAL &amp; SOCIO-ECONOMIC
            REFORMS
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-gray-700 md:text-[15px]">
            A Framework for Democratic Constitutional Reform, State System
            Institutionalization, Economic Liberalization, Public Accountability
            and Socio - Economic Liberation of the Country.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {reforms.map((item) => (
            <ReformCard key={item.number} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

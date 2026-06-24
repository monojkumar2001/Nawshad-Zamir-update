import Container from "@/components/Container";
import { detailParagraphs, educationItems } from "@/data/about";

function GraduationIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M24 8L6 18L24 28L42 18L24 8Z"
        stroke="#D82221"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V32C12 32 17 36 24 36C31 36 36 32 36 32V22"
        stroke="#D82221"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M42 18V30" stroke="#D82221" strokeWidth="1.5" strokeLinecap="round" />
      <rect
        x="30"
        y="30"
        width="14"
        height="10"
        rx="1"
        stroke="#D82221"
        strokeWidth="1.5"
      />
      <path d="M33 34H41M33 37H41" stroke="#D82221" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function HighlightedText({ text, highlights }) {
  if (!highlights.length) return text;

  let parts = [text];
  highlights.forEach((highlight) => {
    const next = [];
    parts.forEach((part) => {
      if (typeof part !== "string") {
        next.push(part);
        return;
      }
      const split = part.split(highlight);
      split.forEach((segment, index) => {
        next.push(segment);
        if (index < split.length - 1) {
          next.push(
            <span key={`${highlight}-${index}`} className="font-semibold text-[#D82221]">
              {highlight}
            </span>
          );
        }
      });
    });
    parts = next;
  });

  return parts;
}

function EducationCard() {
  return (
    <div className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {educationItems.map((item, index) => (
        <div
          key={item.year}
          className={`flex gap-5 px-6 py-7 md:px-8 md:py-8 ${
            index < educationItems.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <GraduationIcon />
          <div>
            <p className="text-sm font-extrabold text-[#D82221]">{item.year}</p>
            <h3 className="mt-1 font-roboto text-xl font-extrabold uppercase text-[#051A53] md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B6C70] md:text-[15px]">
              {item.institution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutDetailSection() {
  return (
    <section className="bg-[#f5f7fa] py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="space-y-6 lg:col-span-7">
            {detailParagraphs.map((paragraph) => (
              <p
                key={paragraph.text.slice(0, 50)}
                className="text-sm leading-[1.85] text-[#6B6C70] md:text-[16px]"
              >
                <HighlightedText
                  text={paragraph.text}
                  highlights={paragraph.highlights}
                />
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <EducationCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

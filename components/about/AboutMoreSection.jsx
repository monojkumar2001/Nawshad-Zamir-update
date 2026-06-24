import Container from "@/components/Container";
import { aboutMoreParagraphs } from "@/data/about";

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

export default function AboutMoreSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-[#D82221]">
            Get to know more
          </p>
          <h2 className="font-roboto text-[35px] font-extrabold uppercase tracking-[4.1px] text-[#051A53] md:text-[45px]">
            About
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {aboutMoreParagraphs.map((paragraph) => (
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
      </Container>
    </section>
  );
}

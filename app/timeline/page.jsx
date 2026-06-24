import TimelineSection from "@/components/TimelineSection";
import { timelineSections } from "@/data/timeline";

export const metadata = {
  title: "Timeline | Barrister Mir Helal",
  description:
    "Education, profession, and political milestones of Barrister Mir Helal — politician and social activist.",
};

export default function TimelinePage() {
  return (
    <main className="bg-white pt-6 md:pt-10">
      {timelineSections.map((section) => (
        <TimelineSection key={section.title + section.subtitle} section={section} />
      ))}
    </main>
  );
}

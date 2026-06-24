import EventsSection from "@/components/events/EventsSection";

export const metadata = {
  title: "Events | Barrister Mir Helal",
  description:
    "Political and social events featuring Barrister Mir Helal across Bangladesh.",
};

export default function EventsPage() {
  return (
    <main className="bg-white">
      <EventsSection />
    </main>
  );
}

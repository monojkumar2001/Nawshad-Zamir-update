import Container from "@/components/Container";
import EventCard from "@/components/events/EventCard";
import { events } from "@/data/events";

export default function EventsSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {events.map((event) => (
            <EventCard key={`${event.date}-${event.title}`} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}

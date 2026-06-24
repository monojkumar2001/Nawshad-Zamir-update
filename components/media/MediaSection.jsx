import Container from "@/components/Container";
import MediaHeroSection from "@/components/media/MediaHeroSection";
import MediaVideoCard from "@/components/media/MediaVideoCard";
import { featuredVideoCount, mediaVideos } from "@/data/media";

function VideoGrid({ videos, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 ${className}`}
    >
      {videos.map((video) => (
        <MediaVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default function MediaSection() {
  const topVideos = mediaVideos.slice(0, featuredVideoCount);
  const restVideos = mediaVideos.slice(featuredVideoCount);

  return (
    <>
      <section className="bg-white pt-10 md:pt-12">
        <Container>
          <VideoGrid videos={topVideos} />
        </Container>
      </section>

      <MediaHeroSection />

      <section className="bg-white pb-12 md:pb-16">
        <Container>
          <VideoGrid videos={restVideos} className="mt-2" />
        </Container>
      </section>
    </>
  );
}

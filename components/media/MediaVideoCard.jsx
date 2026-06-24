function buildEmbedSrc(video) {
  const params = new URLSearchParams();
  if (video.start) params.set("start", String(video.start));
  const query = params.toString();
  return `https://www.youtube.com/embed/${video.id}${query ? `?${query}` : ""}`;
}

export default function MediaVideoCard({ video }) {
  return (
    <div className="overflow-hidden rounded-lg border-[10px] border-white bg-black shadow-[0_10px_36px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-video w-full">
        <iframe
          src={buildEmbedSrc(video)}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

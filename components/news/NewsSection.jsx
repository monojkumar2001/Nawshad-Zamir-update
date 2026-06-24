import Container from "@/components/Container";
import NewsCard from "@/components/news/NewsCard";
import { newsItems } from "@/data/news";

export default function NewsSection() {
  return (
    <section className="bg-white pb-4 pt-8 md:pt-12">
      <Container>
        <div className="mb-10 max-w-3xl md:mb-14">
          <div className="mb-3 h-0.5 w-12 bg-[#D82221]" />
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#D82221]">
            News Press Publications
          </p>
          <h1 className="font-roboto text-3xl font-extrabold leading-tight text-[#051A53] md:text-[42px]">
            Top News on
            <br />
            Barrister Mir Helal
          </h1>
        </div>
      </Container>

      <div className="bg-[#f5f7fa] py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {newsItems.map((item) => (
              <NewsCard key={`${item.title}-${item.source}`} item={item} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

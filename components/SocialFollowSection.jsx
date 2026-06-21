import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Container from "@/components/Container";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mirmohammedhelaluddin",
    Icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/mirhelal",
    Icon: FaTwitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@barristermirhelal",
    Icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/barrister-mir-mohammed-helal-uddin-4a581a2a/",
    Icon: FaLinkedinIn,
  },
];

const FB_PAGE =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBarristerNawshadZamir&tabs=timeline&width=420&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";

  function FacebookCard() {
  return (
    <div className="w-[400px] overflow-hidden rounded-[18px] border  border-[#0B3A82] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] lg:w-[420px]">
      <iframe
        src={FB_PAGE}
        title="Facebook Page"
        width="100%"
        height="500"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        allow="encrypted-media"
      />
    </div>
  );
}

export default function SocialFollowSection() {
  return (
    <section className="overflow-visible bg-white py-16 md:py-20 lg:py-24 mb-24">
      <Container>
        <div className="relative overflow-visible">
          <div className="relative min-h-[340px] overflow-visible rounded-[18px]">
            {/* Background Gradient */}
            <div
              className="absolute inset-0 rounded-[18px]"
              style={{
                background:
                  "linear-gradient(to top, #ff3b3b 0%, #ff5f5f 35%, #f6b6b6 70%, #fff 100%)",
              }}
            />

            {/* Skyline Shape */}
            <div className="absolute inset-x-0 -bottom-24 h-[70%] opacity-70">
              <Image
                src="/assets/images/shap.png"
                alt=""
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-[340px]">
              <div className="absolute bottom-12 right-[460px]">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <span className="h-[2px] w-12 bg-[#051A53]" />
                  <span className="text-[#051A53] text-lg font-bold uppercase tracking-[4px]">
                    Follow
                  </span>
                </div>

                <h2 className="text-right text-5xl font-extrabold uppercase text-white lg:text-6xl">
                  Mir Helal
                </h2>

                <div className="mt-8 flex justify-end gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded bg-[#051A53] text-white transition duration-300 hover:scale-105"
                    >
                      <Icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Facebook Widget */}
            <div className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-8 lg:block">
              <FacebookCard />
            </div>
          </div>

          {/* Mobile Facebook Widget */}
          <div className="mt-8 flex justify-center lg:hidden">
            <FacebookCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

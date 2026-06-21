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
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchattogram05&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

function FacebookCard() {
  return (
    <div className="w-full max-w-[340px] overflow-hidden rounded-lg border border-[#c8dff7] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
      <iframe
        src={FB_PAGE}
        title="Facebook Page — Barrister Nawshad Zamir"
        width="340"
        height="500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allow="encrypted-media"
        className="w-full"
      />
    </div>
  );
}

export default function SocialFollowSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-visible py-8 md:py-10 lg:py-12">
          {/* red banner */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[320px] lg:rounded-[18px]">
            {/* gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #D82221 0%, #D82221 38%, #e84545 58%, #f5a0a0 78%, #fff5f5 100%)",
              }}
              aria-hidden="true"
            />

            {/* city skyline — shap.png */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-[0.32]">
              <Image
                src="/assets/images/shap.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-bottom brightness-0 invert"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-12 md:px-10 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:py-16 xl:px-16">
              {/* left — follow + icons */}
              <div className="w-full text-center lg:max-w-md lg:pl-6 lg:text-left xl:pl-10">
                <span
                  className="mx-auto mb-3 block h-px w-10 bg-[#051A53] lg:mx-0"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#051A53] md:text-xs">
                  Follow
                </p>
                <h2 className="mt-1 text-[2.5rem] font-bold uppercase leading-none tracking-wide text-white md:text-5xl lg:text-[3.25rem]">
                  Mir Helal
                </h2>

                <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#051A53] text-white transition-transform hover:scale-105 hover:bg-[#082060] md:h-11 md:w-11"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* right — facebook widget overlapping banner */}
              <div className="relative z-20 mx-auto shrink-0 lg:-my-14 lg:mr-2 xl:-my-16 xl:mr-4">
                <FacebookCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

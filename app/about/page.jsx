import AboutBiographySection from "@/components/about/AboutBiographySection";
import AboutDetailSection from "@/components/about/AboutDetailSection";
import AboutMoreSection from "@/components/about/AboutMoreSection";

export const metadata = {
  title: "About | Barrister Mir Helal",
  description:
    "Biography, education, and professional background of Barrister Mir Helal — politician and social activist.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutBiographySection />
      <AboutDetailSection />
      <AboutMoreSection />
    </main>
  );
}

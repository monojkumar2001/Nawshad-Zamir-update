import AboutSection from "@/components/AboutSection";
import BnpReformsSection from "@/components/BnpReformsSection";
import Hero from "@/components/Hero";
import HeroRoleCards from "@/components/HeroRoleCards";
import MissionVisionSection from "@/components/MissionVisionSection";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative">
        <Hero />
        <HeroRoleCards />
      </div>
      <AboutSection />
      <MissionVisionSection />
      <BnpReformsSection />
    </main>
  );
}

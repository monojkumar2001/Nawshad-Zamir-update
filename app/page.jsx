import AboutSection from "@/components/AboutSection";
import BnpReformsSection from "@/components/BnpReformsSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import HeroRoleCards from "@/components/HeroRoleCards";
import MissionVisionSection from "@/components/MissionVisionSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import PromoBannerSection from "@/components/PromoBannerSection";
import SocialFollowSection from "@/components/SocialFollowSection";

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
      <PromoBannerSection />
      <ContactSection />
      <PhotoGallerySection />
      <SocialFollowSection />
    </main>
  );
}

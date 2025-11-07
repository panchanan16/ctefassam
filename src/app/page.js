import AboutUsSection from "@/components/about/AboutUs";
import StatsSection from "@/components/home/Achivement";
import CTEFHeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
  return (
    <div className="">
      <CTEFHeroSection />
      <AboutUsSection />
      <StatsSection />
      <MissionSection />
    </div>
  );
}

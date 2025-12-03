import AboutUsSection from "@/components/about/AboutUs";
import StatsSection from "@/components/home/Achivement";
import Gallery from "@/components/home/Gallery";
import CTEFHeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import EventsNews from "@/components/home/NewsEvent";
import ExecutiveMembers from "@/components/home/ExecutiveMembers";
import OurAllMembers from "@/components/home/ListOfMembers";

export default function Home() {
  return (
    <div className="">
      <CTEFHeroSection />
      <AboutUsSection />
      <StatsSection />
      <MissionSection />
      <ExecutiveMembers />
      <ExecutiveMembers type="Dist" />
      <OurAllMembers />
      <EventsNews />
      <Gallery />
    </div>
  );
}

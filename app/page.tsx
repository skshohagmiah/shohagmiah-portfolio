import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Homeblogsection from "@/components/LatestBlogsSection";
import ServicesSection from "@/components/MyServices";

import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsAndExpertise";

export default function Home() {
  console.log('test')
  return (
    <div className="">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <Homeblogsection />
      <ContactSection />
    </div>
  );
}

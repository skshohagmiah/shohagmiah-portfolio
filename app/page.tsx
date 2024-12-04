import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Homeblogsection from "@/components/LatestBlogsSection";

import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsAndExpertise";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Homeblogsection />
      <ContactSection />
    </div>
  );
}

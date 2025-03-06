"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortifolioSection from "@/components/PortifolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full ">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {/* <ExperienceSection /> */}
      <PortifolioSection />
      <Footer />
    </main>
  );
}

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import DarkVeil from "@/components/DarkVeil"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* DarkVeil background */}
      <div className="md:block hidden" style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
        <DarkVeil />
      </div>
      <Navigation />
      <FloatingElements />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import SplitText from "./SplitText"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleAnimationComplete = () => {
    // console.log("All letters have animated!")
  }


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-in-up">
          <div className="md:mb-6 mb-4">
            <SplitText
              text="Hello! I am Dinesh"
              className="inline-block text-lg sm:text-xs md:text-2xl font-extrabold uppercase tracking-[0.2em] text-red-500"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight font-[var(--font-playfair)]">
              <span className="gradient-text">Software Engineer</span>
              <br />
              <span className="text-foreground">Building Modern Web Experiences</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I&apos;m the Founder and Chief Technology Officer at <a target="_blank" href="https://dezprox.com" className="text-green-500">Dezprox LLP</a>,
            leading product strategy, architecture, and engineering. My focus is building scalable, secure, and
            user centric web platforms turning ideas into reliable, high impact solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="animate-glow hidden hover:scale-105 transition-transform duration-200"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Work
              {/* See Why Clients Choose Us */}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">

            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent hidden hover:scale-110 transition-all duration-200"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/dinesh-s-098234224/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent hidden  hover:scale-110 transition-all duration-200"
              asChild
            >
              <a
                href="mailto:dineshsiva693@gmail.com?subject=Project%20Inquiry&body=Hi%20Dinesh%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%20Here%20are%20the%20details%3A%0A- %20Name%3A%20%0A- %20Company%3A%20%0A- %20Budget%2FTimeline%3A%20%0A%0AThanks!"
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="hidden bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

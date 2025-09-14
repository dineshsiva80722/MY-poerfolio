"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register plugin on client and create animations scoped to this component
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".scroll-item").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 70%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies and frameworks",
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="glass-effect glass-warm rounded-2xl p-8 md:p-12">
          <div className="text-center mb-16 scroll-item">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="md:text-lg text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about engineering and design, I enjoy turning complex challenges into elegant, working systems.
              When I&apos;m not experimenting with ideas, I&apos;m heads down building and refining products. Craft, clarity and impact drive my work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 scroll-item">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="text-muted-foreground leading-relaxed">
                From early design roots to leading engineering at Dezprox LLP — here’s the path so far.
              </div>

              <div className="space-y-5">
                <div className="rounded-xl border p-4 bg-muted/10 scroll-item">
                  <p className="text-sm text-muted-foreground">Mar 2025 — Present • Chennai, India • On‑site</p>
                  <h4 className="text-lg font-semibold mt-1">Founder & Chief Technology Officer</h4>
                  <p className="text-foreground/90">Dezprox LLP</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Spearheading the company’s tech vision — from product architecture and design to deployment,
                    security, and performance. Building scalable, user‑centric platforms that deliver business impact.
                  </p>
                </div>

                <div className="rounded-xl border p-4 bg-muted/10 scroll-item">
                  <p className="text-sm text-muted-foreground">Jan 2024 — Mar 2024 • Remote • Bengaluru, India</p>
                  <h4 className="text-lg font-semibold mt-1">Web Designer (Internship)</h4>
                  <p className="text-foreground/90">SkillWinner</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Designed visually appealing, user‑friendly interfaces and interactive web experiences. Strengthened
                    fundamentals in responsive design and shipped high‑quality deliverables.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>

            <div className="relative scroll-item">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center animate-float">
                <Image
                  src="/About-image.png"
                  alt="About image"
                  width={524}
                  height={524}
                  className="rounded-xl shadow-lg object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-item">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

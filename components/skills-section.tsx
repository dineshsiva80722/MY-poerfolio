"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 98 },
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "React Native", level: 50 }

      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 93 },
        { name: "Docker", level: 78 },
        { name: "AWS/Vercel", level: 85 },
        { name: "Figma", level: 88 },
      ],
    },
  ]

  // Keep the original Additional Expertise content as data
  const additionalExpertise = [
    "Responsive Design",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "Testing",
    "Agile Methodology",
    "UI/UX Design",
    "DevOps",
    "Mobile Development",
  ]

  const expertiseMarquee = `${additionalExpertise.join(" ✦ ")} ✦`

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-effect glass-cool overflow-hidden rounded-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and
              tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {additionalExpertise.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

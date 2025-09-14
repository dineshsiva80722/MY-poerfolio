// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
// import SplitText from "./SplitText"

// export function HeroSection() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   const scrollToAbout = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//   }

//   const handleAnimationComplete = () => {
//     // console.log("All letters have animated!")
//   }


//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* Animated background gradient */}
//       <div
//         className="absolute inset-0 opacity-30"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
//         }}
//       />

//       <div className="container mx-auto px-4 md:px-4 relative z-10">
//         <div className="flex flex-col md:flex-row justify-center items-center w-full">
//           {/* Left: Profile Image */}
//           <div className="flex justify-center md:justify-start md:absolute md:left-16 w-full md:w-auto">
//             <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px]">
//               <Image
//                 src="/Dineshs.png"
//                 alt="Dinesh profile photo"
//                 fill
//                 priority
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Right: Content */}
//           <div className="order-1 md:order-2 animate-slide-in-up text-center md:text-left mt-6 md:mt-0 md:relative md:left-80">
//             <div className="md:mb-6 mb-4">
//               <SplitText
//                 text="Hello! I am Dinesh"
//                 className="inline-block text-lg sm:text-xs md:text-2xl font-extrabold uppercase tracking-[0.2em] text-red-500"
//                 delay={100}
//                 duration={0.6}
//                 ease="power3.out"
//                 splitType="chars"
//                 from={{ opacity: 0, y: 40 }}
//                 to={{ opacity: 1, y: 0 }}
//                 threshold={0.1}
//                 rootMargin="-100px"
//                 textAlign="center"
//                 onLetterAnimationComplete={handleAnimationComplete}
//               />
//               <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-snug md:leading-tight font-[var(--font-playfair)]">
//                 <span className="gradient-text">Software Engineer</span>
//                 <br />
//                 <span className="text-foreground">Building Modern Web Experiences</span>
//               </h1>
//             </div>

//             <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl md:mx-0 mx-auto leading-relaxed">
//               I&apos;m the Founder and Chief Technology Officer at <a target="_blank" href="https://dezprox.com" className="text-green-500">Dezprox LLP</a>,
//               leading product strategy, architecture, and engineering. My focus is building scalable, secure and
//               user centric web platforms turning ideas into reliable, high impact solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mb-12">
//               <Button
//                 size="lg"
//                 className="animate-glow hidden hover:scale-105 transition-transform duration-200"
//                 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 Explore My Work
//                 {/* See Why Clients Choose Us */}
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="hover:scale-105 transition-transform duration-200 bg-transparent"
//                 onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 Get In Touch
//               </Button>
//             </div>

//             <div className="flex md:justify-start justify-center space-x-6 mb-12">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="hover:text-accent hidden hover:scale-110 transition-all duration-200"
//                 asChild
//               >
//                 <a
//                   href="https://www.linkedin.com/in/dinesh-s-098234224/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin className="h-6 w-6" />
//                 </a>
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="hover:text-accent hidden  hover:scale-110 transition-all duration-200"
//                 asChild
//               >
//                 <a
//                   href="mailto:dineshsiva693@gmail.com?subject=Project%20Inquiry&body=Hi%20Dinesh%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%20Here%20are%20the%20details%3A%0A- %20Name%3A%20%0A- %20Company%3A%20%0A- %20Budget%2FTimeline%3A%20%0A%0AThanks!"
//                   aria-label="Send Email"
//                 >
//                   <Mail className="h-6 w-6" />
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>

//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={scrollToAbout}
//           className="hidden bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce"
//         >
//           <ArrowDown className="h-6 w-6" />
//         </Button>
//       </div>
//     </section>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Mail } from "lucide-react"
import SplitText from "./SplitText"
import TextType from "./TextType"
import ShinyText from "./ShinyText"

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          {/* Left: Profile Image - Better responsive sizing and positioning */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto order-2 lg:order-1">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              <Image src="/Dineshs.png" alt="Dinesh profile photo" fill priority className="object-contain" />
            </div>
          </div>

          {/* Right: Content - Improved responsive text and spacing */}
          <div className="order-1 lg:order-2 animate-slide-in-up text-center lg:text-left w-full lg:w-auto lg:flex-1 lg:max-w-2xl mt-32">
            <div className="mb-4 md:mb-6">
              <SplitText
                text="Hello! I am Dinesh"
                className="inline-block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-red-500"
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
              <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug md:leading-tight font-[var(--font-playfair)]">
                <ShinyText
                  text="Software Engineer"
                  disabled={false}
                  speed={3}
                  className='custom-class'
                />
              </h1>
              <TextType
                as="span"
                className="text-foreground text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
                text={"Building Modern Web Experiences"}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#ffffff"]}
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-full lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              I&apos;m the Founder and Chief Technology Officer at{" "}
              <a target="_blank" href="https://dezprox.com" className="text-green-500" rel="noreferrer">
                Dezprox LLP
              </a>
              , leading product strategy, architecture, and engineering. My focus is building scalable, secure and user
              centric web platforms turning ideas into reliable, high impact solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-8 sm:mb-12 px-2 sm:px-0">
              <Button
                size="lg"
                className="animate-glow hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 cursor-pointer transition-transform duration-200 bg-transparent w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex lg:justify-start justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hidden hover:scale-110 transition-all duration-200 h-10 w-10 sm:h-12 sm:w-12"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/dinesh-s-098234224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hidden hover:scale-110 transition-all duration-200 h-10 w-10 sm:h-12 sm:w-12"
                asChild
              >
                <a
                  href="mailto:dineshsiva693@gmail.com?subject=Project%20Inquiry&body=Hi%20Dinesh%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%20Here%20are%20the%20details%3A%0A- %20Name%3A%20%0A- %20Company%3A%20%0A- %20Budget%2FTimeline%3A%20%0A%0AThanks!"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

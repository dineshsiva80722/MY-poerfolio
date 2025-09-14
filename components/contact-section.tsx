"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Stepper, { Step } from "./Stepper"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function ContactSection() {
  const [stepperKey, setStepperKey] = useState(0)
  const resetTimerRef = useRef<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [currentStep, setCurrentStep] = useState(1)

  // Scroll-triggered reveals
  useEffect(() => {
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
            end: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Simple validators
  const isNonEmpty = (s: string) => s.trim().length > 0
  const isValidEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return isNonEmpty(formData.name)
      case 2:
        return isNonEmpty(formData.email) && isValidEmail(formData.email)
      case 3:
        return isNonEmpty(formData.message)
      case 4:
        return isNonEmpty(formData.name) && isNonEmpty(formData.email) && isValidEmail(formData.email) && isNonEmpty(formData.message)
      default:
        return false
    }
  }

  // Submit using current state (used by Stepper's onFinalStepCompleted)
  const submitFormData = async () => {
    // Final guard: do not allow empty/invalid values
    if (!isStepValid(4)) {
      setSubmitStatus("error")
      return
    }
    setSubmitStatus("loading")
    try {
      const fd = new FormData()
      // Required by Web3Forms
      fd.append("access_key", "701509da-ad7d-43d7-9c9e-6f849ee8ff6d")
      // Force subject so the notification uses our desired title
      fd.set("subject", "From your portfolio")
      // Force sender name shown in inbox notifications
      fd.set("from_name", "Portfolio")
      // Make replies go to the sender
      if (formData.email) {
        fd.set("replyto", formData.email)
      }
      // Add user inputs
      fd.set("name", formData.name)
      fd.set("email", formData.email)
      fd.set("message", formData.message)

      const payload = JSON.stringify(Object.fromEntries(fd.entries()))

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      })

      const result = await res.json()
      if (result.success) {
        console.log("Message sent successfully:", result)
        // Reset local state
        setFormData({ name: "", email: "", message: "" })
        setSubmitStatus("success")
        // After a short delay, reset the stepper and status back to idle
        if (resetTimerRef.current) {
          clearTimeout(resetTimerRef.current)
        }
        resetTimerRef.current = window.setTimeout(() => {
          setSubmitStatus("idle")
          setStepperKey((k) => k + 1)
          setCurrentStep(1)
        }, 4000)
      } else {
        console.error("Submission failed:", result)
        setSubmitStatus("error")
      }
    } catch (err) {
      console.error("Submission error:", err)
      setSubmitStatus("error")
    }
  }

  // Cleanup any pending timers on unmount
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Build the mailto link safely with URL-encoded subject and body
  const emailAddress = "dineshsiva693@gmail.com"
  const emailSubject = "Project Inquiry"
  const emailBody =
    "Hi Dinesh,\n\nI'd like to discuss a project. Here are the details:\n- Name: \n- Company: \n- Budget/Timeline: \n\nThanks!"
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: emailAddress,
      link: emailLink,
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "9342977856",
      link: "tel:9342977856",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Salem, Tamil Nadu, India",
      link: "https://www.google.com/maps/search/?api=1&query=Salem%2C+Tamil+Nadu%2C+India",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto md:px-4" ref={sectionRef}>
        <div className="glass-effect glass-neutral rounded-2xl p-8 md:p-12">
          <div className="text-center mb-16 scroll-item">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="scroll-item">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with passionate individuals and teams.
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from
                  you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group scroll-item">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (info.link.startsWith("mailto:") || info.link.startsWith("tel:")) {
                            e.preventDefault()
                            window.location.href = info.link
                          }
                        }}
                        className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="hover:shadow-lg transition-shadow duration-300 scroll-item">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Stepper
                    key={stepperKey}
                    initialStep={1}
                    onStepChange={(step: number) => {
                      setCurrentStep(step)
                      console.log("Contact step:", step)
                    }}
                    onFinalStepCompleted={submitFormData}
                    backButtonText="Previous"
                    nextButtonText={submitStatus === "loading" ? "Sending..." : "Next"}
                    disableStepIndicators
                    className="shadow-none"
                    contentClassName="shadow-none"
                    footerClassName="shadow-none"
                    stepCircleContainerClassName="shadow-none"
                    stepContainerClassName="shadow-none"
                    nextButtonProps={{
                      disabled: submitStatus === "loading" || !isStepValid(currentStep),
                      "aria-disabled": submitStatus === "loading" || !isStepValid(currentStep),
                    }}
                    backButtonProps={{
                      disabled: submitStatus === "loading",
                      "aria-disabled": submitStatus === "loading",
                    }}
                    completedContent={(
                      <div className="py-8 text-center space-y-3">
                        {submitStatus === "loading" && (
                          <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Sending your message...</span>
                          </div>
                        )}
                        {submitStatus === "success" && (
                          <div className="space-y-2">
                            <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                            <p className="text-green-600 text-sm" role="status" aria-live="polite">
                              Thank you for your message. I will contact you as soon as possible.
                            </p>
                          </div>
                        )}
                        {submitStatus === "error" && (
                          <div className="space-y-2">
                            <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
                            <p className="text-red-600 text-sm" role="status" aria-live="polite">
                              Sorry, something went wrong. Please try again later.
                            </p>
                          </div>
                        )}
                      </div>
                    ) as any}
                  >
                    <Step>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Your Name</h3>
                        <p className="text-sm text-muted-foreground">Let me know what to call you.</p>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-invalid={!isNonEmpty(formData.name)}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </Step>
                    <Step>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Your Email</h3>
                        <p className="text-sm text-muted-foreground">I will reply to this address.</p>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-invalid={!(isNonEmpty(formData.email) && isValidEmail(formData.email))}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </Step>
                    <Step>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Your Message</h3>
                        <p className="text-sm text-muted-foreground">Share a few details about your project.</p>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          aria-invalid={!isNonEmpty(formData.message)}
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </Step>
                    <Step>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Review & Submit</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p><strong>Name:</strong> {formData.name || "—"}</p>
                          <p><strong>Email:</strong> {formData.email || "—"}</p>
                          <p><strong>Message:</strong> {formData.message || "—"}</p>
                        </div>
                        {/* <p className="text-sm">Click "Submit" to send your message.</p> */}
                      </div>
                    </Step>
                  </Stepper>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

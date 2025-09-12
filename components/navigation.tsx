"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import BubbleMenu from "./BubbleMenu"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keep the document root in sync with the theme state and default to dark
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  // Theme-aware BubbleMenu colors (glass style to match site)
  const menuBg = isDark ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255,255,255,0.7)'
  const menuContentColor = isDark ? '#e5e7eb' : '#111111'

  // BubbleMenu items for mobile
  const items = [
    {
      label: 'home',
      href: '#hero',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '#about',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'Skill',
      href: '#skills',
      ariaLabel: 'Skill',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '#contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Image
            src="/my-logo.png"
            alt="My logo"
            width={40}
            height={40}
            className="h-10 w-auto  rounded-sm"
            priority
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2 w-full justify-end">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="pointer-events-auto">
              <BubbleMenu
                logo={<span style={{ fontWeight: 700 }}><Image src="/my-logo.png" alt="My logo" width={40} height={40} className="h-10 w-auto rounded-sm" priority /></span>}
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg={menuBg}
                menuContentColor={menuContentColor}
                inline={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu replaced by BubbleMenu */}
      </div>
    </nav>
  )
}

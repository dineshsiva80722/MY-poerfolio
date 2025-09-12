import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import "../components/Stepper.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Modern Web Engineer — Portfolio",
  description: "Building secure, scalable, and user‑centric web platforms at Dezprox LLP.",
  generator: "v0.app",
  icons: {
    icon: "/my-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`} suppressHydrationWarning={true}>
        <main className="relative min-h-screen bg-background">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        {process.env.NODE_ENV === "production" && <Analytics debug={false} />}
      </body>
    </html>
  )
}

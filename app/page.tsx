"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/layout/cookie-consent"
import { Hero } from "@/components/landing/hero"
import { QuoteSection } from "@/components/landing/quote"
import { ProblemSection } from "@/components/landing/problem"
import { SolutionSection } from "@/components/landing/solution"
import { WhatWeDoSection } from "@/components/landing/what-we-do"
import { SocialProofSection } from "@/components/landing/social-proof"
import { PricingSection } from "@/components/landing/pricing"
import { FaqSection } from "@/components/landing/faq"
import { LocationSection } from "@/components/landing/location"
import { ClientResultsSection } from "@/components/landing/client-results"

export default function Home() {
  // Initialize state from sessionStorage on first render
  const [introComplete, setIntroComplete] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasSeenIntro') === 'true'
    }
    return false
  })
  const [skipIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasSeenIntro') === 'true'
    }
    return false
  })
  const [isLoading] = useState(false) // No need for loading state with lazy initialization

  const handleIntroComplete = () => {
    setIntroComplete(true)
    sessionStorage.setItem('hasSeenIntro', 'true')
  }

  // Don't render anything until we've checked sessionStorage
  if (isLoading) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: '#000000' }} />
    )
  }

  return (
    <main className="min-h-screen overflow-x-hidden text-foreground selection:bg-primary/20" style={{ backgroundColor: introComplete ? 'transparent' : '#000000' }}>
      <Navbar show={introComplete} />

      <Hero onIntroComplete={handleIntroComplete} skipIntro={skipIntro} />
      <QuoteSection />
      <ProblemSection />
      <SolutionSection />
      <WhatWeDoSection />
      <ClientResultsSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <LocationSection />

      <Footer />
      <CookieConsent />
    </main>
  )
}

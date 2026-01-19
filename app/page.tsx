"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
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
  const [introComplete, setIntroComplete] = useState(false)
  const [skipIntro, setSkipIntro] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro === 'true') {
      setSkipIntro(true)
      setIntroComplete(true)
    }
    setIsLoading(false)
  }, [])

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
    <main className="min-h-screen text-foreground selection:bg-primary/20" style={{ backgroundColor: introComplete ? 'transparent' : '#000000' }}>
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
    </main>
  )
}

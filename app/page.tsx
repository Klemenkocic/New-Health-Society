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
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      <Hero />
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

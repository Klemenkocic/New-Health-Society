import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ConceptHero } from "@/components/concept/hero"
import { QuoteSection } from "@/components/landing/quote" // Reusing Quote
import { FundamentalsSection } from "@/components/concept/fundamentals"
import { ThreeModelsSection } from "@/components/concept/three-models"
import { AllHealthAspectsSection } from "@/components/concept/all-health-aspects"
import { GymGallerySection } from "@/components/concept/gym-gallery"
import { AppMockupSection } from "@/components/concept/app-mockup"
import { FinalCTASection } from "@/components/concept/final-cta"
import { SocialProofSection } from "@/components/landing/social-proof" // Reusing as "Before/After" placeholder

export default function ConceptPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navbar />

            <ConceptHero />
            <QuoteSection />
            <FundamentalsSection />
            <ThreeModelsSection />

            {/* "Before & After" using Social Proof for now */}
            <div className="bg-[#F3F0E5]">
                <SocialProofSection />
            </div>

            <AllHealthAspectsSection />
            <GymGallerySection />
            <AppMockupSection />
            <FinalCTASection />

            <Footer />
        </main>
    )
}

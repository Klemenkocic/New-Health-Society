import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ConceptHero } from "@/components/concept/hero"


import { ThreeModelsSection } from "@/components/concept/three-models"
import { AllHealthAspectsSection } from "@/components/concept/all-health-aspects"
import { GymGallerySection } from "@/components/concept/gym-gallery"
import { AppFeaturesCarousel } from "@/components/concept/app-features-carousel"
import { FinalCTASection } from "@/components/concept/final-cta"
import { SocialProofSection } from "@/components/landing/social-proof" // Reusing as "Before/After" placeholder

export default function ConceptPage() {
    return (
        <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20">
            <Navbar />

            <ConceptHero />
            <ThreeModelsSection />

            {/* "Before & After" using Social Proof for now */}
            <SocialProofSection />

            <AllHealthAspectsSection />
            <GymGallerySection />
            <AppFeaturesCarousel
                subheadingText="Manage your bookings, view your 3D scans, and track your progress. All in one place."
            />
            <FinalCTASection />

            <Footer />
        </main>
    )
}

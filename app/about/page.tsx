import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/hero"
import { FoundingStorySection } from "@/components/about/founding-story"
import { PrinciplesSection } from "@/components/about/principles"
import { CoachingTeamSection } from "@/components/about/coaching-team"
import { TrustedBySection } from "@/components/about/trusted-by"
import { ValuesSection } from "@/components/about/values"
import { CareersSection } from "@/components/about/careers"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20">
            <Navbar />

            <AboutHero />
            <FoundingStorySection />
            <PrinciplesSection />
            <CoachingTeamSection />
            <TrustedBySection />
            <ValuesSection />
            <CareersSection />

            <Footer />
        </main>
    )
}

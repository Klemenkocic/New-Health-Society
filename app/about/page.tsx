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
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navbar />

            <AboutHero />
            <FoundingStorySection />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-24">
                <PrinciplesSection />
                <ValuesSection />
                {/* Grouping Principles and Values side-by-side or stacked? 
             Wireframe didn't specify layout, but side-by-side or stacked looks good.
             I'll put them in separate rows via the grid above or let them be full width sections.
             My implementation of them assumes they are sections.
             Let's put them one after another for mobile, maybe side-by-side on desktop if content allows?
             PrinciplesSection and ValuesSection have their own <section> wrappers.
             I should remove the wrappers if I want to grid them.
             Or just stack them. Stacking is safer for long content.
         */}
            </div>

            {/* Re-rendering them properly stacked as full sections */}
            <PrinciplesSection />
            <ValuesSection />

            <CoachingTeamSection />
            <TrustedBySection />
            <CareersSection />

            <Footer />
        </main>
    )
}

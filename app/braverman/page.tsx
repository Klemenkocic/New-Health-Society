import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { QuizEngine } from "@/components/braverman/quiz-engine"

export default function BravermanPage() {
    return (
        <main className="min-h-screen bg-[#F3F0E5] text-foreground selection:bg-primary/20 flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center py-32 px-6">
                <QuizEngine />
            </div>

            <Footer />
        </main>
    )
}

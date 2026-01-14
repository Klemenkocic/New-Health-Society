import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BookingForm } from "@/components/consultation/booking-form"

export default function ConsultationPage() {
    return (
        <main className="min-h-screen bg-grainy-beige text-foreground selection:bg-primary/20 flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center py-32 px-6 md:px-12">
                <BookingForm />
            </div>

            <Footer />
        </main>
    )
}

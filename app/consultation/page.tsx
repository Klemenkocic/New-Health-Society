import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BookingForm } from "@/components/consultation/booking-form"

export default function ConsultationPage() {
    return (
        <main className="min-h-screen bg-[#F3F0E5] text-foreground selection:bg-primary/20 flex flex-col relative overflow-hidden">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-neutral-200/50 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />

            <div className="flex-grow flex items-center justify-center py-32 px-6 relative z-10">
                <BookingForm />
            </div>

            <Footer />
        </main>
    )
}

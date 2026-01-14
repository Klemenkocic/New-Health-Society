"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function BookingForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormState("submitting")
        // Simulate API call
        setTimeout(() => {
            setFormState("success")
        }, 1500)
    }

    if (formState === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-24 bg-gradient-to-br from-[#F3F0E5] to-[#F3F0E5]/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-[#293133]/10"
            >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                </div>
                <h2 className="font-serif font-bold text-4xl mb-4 text-[#293133]">REQUEST RECEIVED</h2>
                <p className="text-[#293133]/70 mb-8 text-lg">
                    We will contact you within 24 hours to schedule your consultation.
                </p>
                <Button onClick={() => setFormState("idle")} variant="outline" className="rounded-xl border-[#293133]/20 hover:bg-[#293133]/5">
                    Back to Homepage
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-[#F3F0E5] to-[#F3F0E5]/80 backdrop-blur-sm p-8 md:p-12 border border-[#293133]/10 rounded-3xl shadow-xl relative z-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#293133] rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
            </div>

            <div className="relative z-10">
                <h2 className="font-serif font-bold text-4xl md:text-5xl mb-2 text-center text-[#293133]">START YOUR JOURNEY</h2>
                <p className="text-center text-[#293133]/60 mb-8 text-lg">
                    Book Your Free Initial Consultation
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-[#293133]/70 tracking-wide uppercase mb-2">Full Name</label>
                        <input
                            required
                            type="text"
                            className="w-full p-4 bg-white/50 backdrop-blur-sm border border-[#293133]/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#293133]/70 tracking-wide uppercase mb-2">Email Address</label>
                        <input
                            required
                            type="email"
                            className="w-full p-4 bg-white/50 backdrop-blur-sm border border-[#293133]/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#293133]/70 tracking-wide uppercase mb-2">Phone Number</label>
                        <input
                            required
                            type="tel"
                            className="w-full p-4 bg-white/50 backdrop-blur-sm border border-[#293133]/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="+49 ..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#293133]/70 tracking-wide uppercase mb-2">Why do you want to join?</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full p-4 bg-white/50 backdrop-blur-sm border border-[#293133]/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            placeholder="Tell us about your goals..."
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full h-14 text-lg rounded-xl"
                    >
                        {formState === "submitting" ? "Sending Request..." : "Request Free Consultation"}
                    </Button>

                    <p className="text-xs text-center text-[#293133]/40 pt-4">
                        By submitting this form, you agree to our privacy policy.
                    </p>
                </form>
            </div>
        </div>
    )
}

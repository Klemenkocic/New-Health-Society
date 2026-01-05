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
                className="max-w-md mx-auto text-center py-24 bg-white p-12 rounded-sm shadow-xl border border-foreground/5"
            >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                </div>
                <h2 className="font-serif font-bold text-3xl mb-4">REQUEST RECEIVED</h2>
                <p className="text-foreground/70 mb-8">
                    We will contact you within 24 hours to schedule your analysis.
                </p>
                <Button onClick={() => setFormState("idle")} variant="outline">
                    Back the Homepage
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="w-full max-w-xl mx-auto bg-white p-8 md:p-12 border border-foreground/10 rounded-sm shadow-xl relative z-10">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-2 text-center">START YOUR JOURNEY</h2>
            <p className="text-center text-foreground/60 mb-8">
                Application for Initial Consultation
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-primary tracking-wide uppercase mb-2">Full Name</label>
                    <input
                        required
                        type="text"
                        className="w-full p-4 bg-neutral-50 border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-primary tracking-wide uppercase mb-2">Email Address</label>
                    <input
                        required
                        type="email"
                        className="w-full p-4 bg-neutral-50 border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-primary tracking-wide uppercase mb-2">Phone Number</label>
                    <input
                        required
                        type="tel"
                        className="w-full p-4 bg-neutral-50 border border-foreground/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+49 ..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-primary tracking-wide uppercase mb-2">Why do you want to join?</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full p-4 bg-neutral-50 border border-foreground/10 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your goals..."
                    />
                </div>

                <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full h-14 text-lg"
                >
                    {formState === "submitting" ? "Sending Request..." : "Request Consultation"}
                </Button>

                <p className="text-xs text-center opacity-40 pt-4">
                    By submitting this form, you agree to our privacy policy.
                </p>
            </form>
        </div>
    )
}

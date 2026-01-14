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
                className="max-w-4xl mx-auto text-center py-24"
            >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="font-serif font-bold text-5xl md:text-6xl mb-6 text-[#293133]">REQUEST RECEIVED</h2>
                <p className="text-[#293133]/70 mb-12 text-xl max-w-2xl mx-auto">
                    We will contact you within 24 hours to schedule your consultation.
                </p>
                <Button onClick={() => setFormState("idle")} variant="outline" className="rounded-xl border-[#293133]/20 hover:bg-[#293133]/5 h-12 px-8">
                    Back to Homepage
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                {/* Left Side - Title and Description */}
                <div className="flex-1">
                    <div className="mb-12 border-b border-[#293133]/10 pb-8">
                        <h1 className="font-serif text-5xl md:text-7xl text-[#293133] mb-6">
                            Book Your Free Initial Consultation
                        </h1>
                        <p className="text-[#293133]/70 text-lg leading-relaxed">
                            Start your journey to optimal health. Our team will analyze your current state
                            and create a personalized protocol tailored to your physiology.
                        </p>
                    </div>

                    <div className="space-y-6 text-[#293133]/60">
                        <div>
                            <h3 className="font-bold text-[#293133] mb-2">What to expect:</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• 45-minute in-depth consultation</li>
                                <li>• Complete lifestyle and health assessment</li>
                                <li>• Personalized recommendations</li>
                                <li>• Tour of our facility</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 w-full">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[#293133]/70 mb-2">Full Name</label>
                            <input
                                required
                                type="text"
                                className="w-full p-4 bg-transparent border-b border-[#293133]/20 focus:border-primary focus:outline-none transition-all placeholder:text-[#293133]/30"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#293133]/70 mb-2">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full p-4 bg-transparent border-b border-[#293133]/20 focus:border-primary focus:outline-none transition-all placeholder:text-[#293133]/30"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#293133]/70 mb-2">Phone Number</label>
                            <input
                                required
                                type="tel"
                                className="w-full p-4 bg-transparent border-b border-[#293133]/20 focus:border-primary focus:outline-none transition-all placeholder:text-[#293133]/30"
                                placeholder="+49 ..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#293133]/70 mb-2">Why do you want to join?</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full p-4 bg-transparent border-b border-[#293133]/20 focus:border-primary focus:outline-none transition-all resize-none placeholder:text-[#293133]/30"
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

                        <p className="text-xs text-center text-[#293133]/40 pt-4">
                            By submitting this form, you agree to our privacy policy.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

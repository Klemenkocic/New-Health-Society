"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"

// Types for our pricing structure
type Frequency = 2 | 3 | 4

const coachingPlan = {
    name: "Coaching",
    price: 150,
    period: "MONTH",
    desc: "Monthly evolving training plans. Regular check-ins. Tailored nutrition.",
    features: [
        "Flexibility to train anywhere",
        "Monthly Check-in",
        "Nutrition Strategy",
        "Supplement Protocol"
    ],
    highlight: false
}

// Shared "Base" features included in all
const allPlansInclude = [
    {
        title: "App Access",
        desc: "Full access to the New Health Society app for tracking workouts and progress."
    },
    {
        title: "Nutrition Guidance",
        desc: "Tailored nutrition and supplement recommendations based on your goals."
    },
    {
        title: "Training Plan",
        desc: "A structured, evolving plan designed to meet your specific physical goals."
    }
]

export function PricingSection() {
    // State for frequencies
    const [groupFreq, setGroupFreq] = useState<Frequency>(2)
    const [personalFreq, setPersonalFreq] = useState<Frequency>(2)

    // Dynamic Data Helpers
    const getGroupData = (freq: Frequency) => {
        const prices = { 2: 360, 3: 480, 4: 560 }
        const descriptions = {
            2: "Join a small group for twice-weekly sessions—perfect for accountability, fun and steady progress.",
            3: "Three group classes a week keep the momentum high. Push each other, build strength, and share the journey.",
            4: "Maximize your health with four sessions a week. Ideal for fast-tracking your health in a motivating group setting."
        }
        return { price: prices[freq], desc: descriptions[freq] }
    }

    const getPersonalData = (freq: Frequency) => {
        const prices = { 2: 840, 3: 1140, 4: 1360 }
        const descriptions = {
            2: "Perfect for people trying to build a consistent routine and solid foundation.",
            3: "Ideal for steady progress and noticeable strength improvements.",
            4: "Best for optimal and accelerated results accompanied by guaranteed peak performance."
        }
        return { price: prices[freq], desc: descriptions[freq] }
    }

    const groupData = getGroupData(groupFreq)
    const personalData = getPersonalData(personalFreq)

    return (
        <section className="py-24 px-6 md:px-12 bg-grainy-dark text-[#F3F0E5]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 border-b border-[#F3F0E5]/10 pb-8">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#F3F0E5] mb-4">Invest In Yourself</h2>
                    <p className="text-[#F3F0E5]/60 font-inter text-lg">Transparent pricing. No hidden fees.</p>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* 1. COACHING (Fixed) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-2xl border border-[#F3F0E5]/20 bg-transparent flex flex-col"
                    >
                        <h3 className="font-serif font-bold text-2xl mb-2">{coachingPlan.name}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">€{coachingPlan.price}</span>
                            <span className="ml-2 text-sm opacity-80">/ {coachingPlan.period}</span>
                        </div>
                        <p className="mb-8 text-sm opacity-80 min-h-[60px]">{coachingPlan.desc}</p>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8">
                                {coachingPlan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-[#F3F0E5]/80">
                                        <Check className="w-4 h-4 text-[#F3F0E5]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button variant="glass" className="w-full mt-auto">Get Started</Button>
                    </motion.div>

                    {/* 2. PERSONAL TRAINING (Dynamic, Highlighted) - MOVED TO CENTER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-8 rounded-2xl border border-primary bg-[#F3F0E5] text-[#293133] flex flex-col scale-105 z-10 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            PREMIUM
                        </div>

                        <h3 className="font-serif font-bold text-2xl mb-2">Personal Training</h3>

                        {/* Frequency Toggle (Dark Mode for Light Card) */}
                        <div className="flex items-center gap-2 mb-4 bg-black/5 p-1 rounded-lg w-fit">
                            {[2, 3, 4].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setPersonalFreq(f as Frequency)}
                                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${personalFreq === f ? "bg-[#293133] text-white" : "text-[#293133]/60 hover:text-[#293133]"
                                        }`}
                                >
                                    {f}x
                                </button>
                            ))}
                        </div>

                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">€{personalData.price}</span>
                            <span className="ml-2 text-sm opacity-80">/ MONTH</span>
                        </div>
                        <p className="mb-8 text-sm opacity-80 min-h-[60px]">{personalData.desc}</p>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm opacity-80">
                                    <Check className="w-4 h-4 text-primary" />
                                    <strong>Everything in Coaching and Group, plus:</strong>
                                </li>
                                <li className="flex items-center gap-3 text-sm opacity-80">
                                    <Check className="w-4 h-4 text-primary" />
                                    1-on-1 Precision Training
                                </li>
                                <li className="flex items-center gap-3 text-sm opacity-80">
                                    <Check className="w-4 h-4 text-primary" />
                                    Pre, Mid and Post Training Session Supplement Support
                                </li>
                            </ul>
                        </div>

                        <Button variant="glass" className="w-full mt-auto bg-black/10 hover:bg-black/20 text-[#293133] border-black/10">Start Training</Button>
                    </motion.div>

                    {/* 3. GROUP TRAINING (Dynamic) - MOVED TO RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative p-8 rounded-2xl border border-[#F3F0E5]/20 bg-transparent flex flex-col"
                    >
                        <h3 className="font-serif font-bold text-2xl mb-2">Group Training</h3>

                        {/* Frequency Toggle */}
                        <div className="flex items-center gap-2 mb-4 bg-white/5 p-1 rounded-lg w-fit">
                            {[2, 3, 4].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setGroupFreq(f as Frequency)}
                                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${groupFreq === f ? "bg-[#F3F0E5] text-[#293133]" : "text-[#F3F0E5]/60 hover:text-[#F3F0E5]"
                                        }`}
                                >
                                    {f}x
                                </button>
                            ))}
                        </div>

                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">€{groupData.price}</span>
                            <span className="ml-2 text-sm opacity-80">/ MONTH</span>
                        </div>
                        <p className="mb-8 text-sm opacity-80 min-h-[60px]">{groupData.desc}</p>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-[#F3F0E5]/80">
                                    <Check className="w-4 h-4 text-[#F3F0E5]" />
                                    <strong>Everything in Coaching, plus:</strong>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-[#F3F0E5]/80">
                                    <Check className="w-4 h-4 text-[#F3F0E5]" />
                                    Gym Access & Equipment
                                </li>
                                <li className="flex items-center gap-3 text-sm text-[#F3F0E5]/80">
                                    <Check className="w-4 h-4 text-[#F3F0E5]" />
                                    All Amenities
                                </li>
                            </ul>
                        </div>

                        <Button variant="glass" className="w-full mt-auto">Join Group</Button>
                    </motion.div>
                </div>

                {/* SHARED FEATURES */}
                <div className="pt-0">
                    <h4 className="text-center font-serif text-2xl mb-6 opacity-80">INCLUDED IN ALL MEMBERSHIPS</h4>
                    <div className="flex flex-wrap justify-center items-center gap-3 text-[#F3F0E5]/70 font-inter text-sm md:text-base">
                        {allPlansInclude.map((feature, i) => (
                            <div key={i} className="flex items-center">
                                {i > 0 && <span className="mx-3 text-[10px] opacity-40">•</span>}
                                <span>{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

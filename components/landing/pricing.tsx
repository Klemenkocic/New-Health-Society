"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Small Group",
        price: "560",
        period: "month",
        desc: "Max 10 people. Individual programming.",
        features: [
            "Individual Training Plan",
            "Full Supervision",
            "Quarterly 3D Scan",
            "Access to Open Gym",
            "Towels & Amenities"
        ],
        popular: true
    },
    {
        name: "Personal Training",
        price: "140",
        period: "session",
        desc: "1-on-1 focus. Absolute precision.",
        features: [
            "100% 1-on-1 Attention",
            "Advanced Biomechanics",
            "Flexible Scheduling",
            "Nutrition Strategy",
            "Supplement Protocol"
        ],
        popular: false
    }
]

export function PricingSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#293133] text-[#F3F0E5]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#F3F0E5] mb-4">INVEST IN YOURSELF</h2>
                    <p className="text-[#F3F0E5]/60 font-inter">Transparent pricing. No hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-sm border ${plan.popular ? "border-primary bg-[#F3F0E5] text-foreground" : "border-[#F3F0E5]/20 bg-transparent text-[#F3F0E5]"
                                } overflow-hidden`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">
                                    POPULAR
                                </div>
                            )}

                            <h3 className="font-serif font-bold text-2xl mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold">€{plan.price}</span>
                                <span className="ml-2 text-sm opacity-80">/ {plan.period}</span>
                            </div>

                            <p className="mb-8 text-sm opacity-80 min-h-[40px]">{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <Check className={`w-4 h-4 ${plan.popular ? "text-primary" : "text-[#F3F0E5]"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className={`w-full ${!plan.popular && "border-[#F3F0E5] text-[#F3F0E5] hover:bg-[#F3F0E5] hover:text-foreground"}`}
                            >
                                Choose {plan.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

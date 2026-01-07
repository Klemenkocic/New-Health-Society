
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"


const steps = [
    {
        id: 0,
        title: "Initial Consultation",
        desc: "We measure everything. 3D scan. Movement analysis. Understanding your unique physiology is the first step.",
        icon: "🧬"
    },
    {
        id: 1,
        title: "Personal Plan",
        desc: "Built for your body and schedule. No cookie-cutter programs, just a strategy designed for your specific goals.",
        icon: "📋"
    },
    {
        id: 2,
        title: "Training Starts",
        desc: "3x60 min/week. Maximum 10 people. Individual programs. Our coaches ensure meaningful progress.",
        icon: "💪"
    },
    {
        id: 3,
        title: "Progress Tracking",
        desc: "Every 4 weeks: 3D scan, measurements, plan adjustments. We rely on data to guarantee your evolution.",
        icon: "📈"
    },
    {
        id: 4,
        title: "Results",
        desc: "Measurable. Visible. Guaranteed. You will see the change in the mirror and feel it in your daily energy levels.",
        icon: "✨"
    }
]

export function YourJourneySection() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[#F3F0E5] relative" id="process">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-24 md:mb-32 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/10 text-sm font-medium text-primary mb-4 tracking-wide uppercase"
                    >
                        How it works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-sans font-bold text-4xl md:text-6xl text-foreground"
                    >
                        YOUR JOURNEY
                    </motion.h2>
                </div>

                <div className="space-y-0 relative pb-24">
                    {steps.map((step, index) => (
                        <Card key={step.id} step={step} index={index} total={steps.length} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Card({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
    // Dynamic top offset for the stacking effect
    const topOffset = 140 + (index * 40)

    return (
        <div
            className="sticky w-full mb-12 last:mb-0"
            style={{
                top: `${topOffset}px`,
                zIndex: index
            }}
        >
            <div className="relative w-full rounded-[32px] overflow-hidden border border-neutral-200 bg-white shadow-xl flex flex-col md:flex-row group transition-all duration-500 hover:shadow-2xl">

                {/* Content - Left */}
                <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#F3F0E5] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                    </div>
                    <div className="space-y-4">
                        <span className="text-xs font-bold tracking-widest text-primary uppercase">Phase 0{index + 1}</span>
                        <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground italic">{step.title}</h3>
                        <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                            {step.desc}
                        </p>
                    </div>
                </div>

                {/* Visual - Right (Image Placeholder with Arch Mask or Simple minimalist block) */}
                <div className="relative z-10 flex-1 bg-[#F9F9F9] hidden md:flex items-center justify-center p-8 overflow-hidden">
                    <div className="w-full h-full rounded-2xl bg-neutral-100 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-mono text-xs">
                            [Image: {step.title}]
                        </div>
                        {/* Arch Mask Overlay idea */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

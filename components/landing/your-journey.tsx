"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const steps = [
    {
        title: "Initial Consultation",
        desc: "We measure everything. 3D scan. Movement analysis.",
        image: "bg-neutral-200"
    },
    {
        title: "Your Plan",
        desc: "Personal roadmap. Built for your body and schedule.",
        image: "bg-neutral-300"
    },
    {
        title: "Training Starts",
        desc: "3x60 min/week. Maximum 10 people. Individual programs.",
        image: "bg-neutral-400"
    },
    {
        title: "Progress Tracking",
        desc: "Every 4 weeks: 3D scan, measurements, plan adjustments.",
        image: "bg-neutral-500"
    },
    {
        title: "Results",
        desc: "Measurable. Visible. Guaranteed.",
        image: "bg-neutral-600"
    }
]

export function YourJourneySection() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll progress through this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background relative min-h-[1500px]">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-24">YOUR JOURNEY</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                    {/* CONNECTING LINE - SVG/Div */}
                    <div className="absolute left-[19px] md:left-[23px] top-4 bottom-32 w-0.5 bg-foreground/10 z-0 hidden md:block" />

                    {/* Animated Line Overlay */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[19px] md:left-[23px] top-4 bottom-32 w-0.5 bg-primary origin-top z-0 hidden md:block"
                    />

                    {/* Left Side: Steps Text */}
                    <div className="flex flex-col gap-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative z-10 pl-16 md:pl-20"
                            >
                                {/* Dot Marker */}
                                <div className="absolute left-0 md:left-2 top-2 w-10 h-10 md:w-8 md:h-8 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                </div>

                                <h3 className="font-inter font-semibold text-xl text-foreground mb-2">↓ {step.title}</h3>
                                <p className="font-inter text-base text-foreground/80 max-w-xs">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Sticky Images */}
                    <div className="hidden md:block h-full relative">
                        <div className="sticky top-1/3 min-h-[400px]">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={`img-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute top-0 left-0 w-full aspect-[4/3] rounded-sm ${step.image} border border-foreground/5 shadow-lg flex items-center justify-center`}
                                    style={{ zIndex: index }}
                                >
                                    <span className="text-neutral-500">Image: {step.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

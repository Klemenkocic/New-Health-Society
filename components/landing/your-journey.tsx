"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { basePath } from "@/lib/utils"

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
        desc: "3x60 min/week. Maximum 10 people. Individual programs. The energy of a team, the precision of a private session.",
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
        <section className="py-24 md:py-32 px-6 bg-grainy-beige relative overflow-hidden" id="process">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 tracking-wide uppercase"
                    >
                        How it works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground"
                    >
                        YOUR JOURNEY
                    </motion.h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Timeline Line (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, index) => (
                            <TimelineCard key={step.id} step={step} index={index} isEven={index % 2 === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineCard({ step, index, isEven }: { step: typeof steps[0]; index: number; isEven: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className={`relative md:flex md:items-center md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Content Side */}
            <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div
                    className="group bg-white/80 backdrop-blur-sm border border-foreground/5 rounded-2xl p-8 shadow-[0_4px_8px_rgba(41,49,51,0.08)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(41,49,51,0.16)] hover:-translate-y-2 cursor-default"
                >
                    {/* Step Badge */}
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-xl">
                            {step.icon}
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                            Step 0{index + 1}
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                        {step.title}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                        {step.desc}
                    </p>
                </div>
            </div>

            {/* Timeline Dot (Desktop only) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10" />

            {/* Image Side */}
            <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                <motion.div
                    className="relative h-64 rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(41,49,51,0.08)] group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={`${basePath}/images/gym/NHS Website-${25 + index}.jpg`}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                </motion.div>
            </div>
        </motion.div>
    )
}

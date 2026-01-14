"use client"

import { useState, useRef, MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const steps = [
    {
        id: "01",
        title: "Analysis",
        description: "We start with a deep dive. Comprehensive bloodwork, DNA analysis if needed, and a complete lifestyle audit to understand your unique starting point.",
        color: "bg-blue-100"
    },
    {
        id: "02",
        title: "Strategy",
        description: "Based on your data, we design a custom protocol. Precision nutrition, training volume calculation, and sleep optimization strategies tailored to your physiology.",
        color: "bg-green-100"
    },
    {
        id: "03",
        title: "Execution",
        description: "We don't just hand you a PDF. We guide your daily execution with real-time feedback, form correction in the gym, and constant adjustments to your program.",
        color: "bg-indigo-100"
    },
    {
        id: "04",
        title: "Optimization",
        description: "Your body adapts, so your plan must evolve. We re-test, re-assess, and refine your inputs to ensure continuous progress and peak performance.",
        color: "bg-orange-100"
    }
]

function StepItem({ step }: { step: typeof steps[0] }) {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    // Mouse position relative to the element
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring animation for the image movement
    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        // Center the image on the cursor (200px width / 140px height)
        x.set(e.clientX - rect.left - 100)
        y.set(e.clientY - rect.top - 70)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group border-b border-[#293133]/10 py-8 px-4 hover:bg-[#293133]/5 transition-colors duration-500 rounded-lg hover:z-30"
        // Note: overflow-hidden might clip the floating image if it goes too far? 
        // Actually, AspectItem used inline-block. Here we want full width. 
        // Let's TRY overflow-visible so image can float outside if needed, OR keep it clipped to the row. 
        // Palmer design usually keeps interaction contained or global. 
        // Let's try `overflow-hidden` first to keep it clean within the row, or remove if user wants it to float *over* rows.
        // Given the row height is large (py-16), contained is likely safer/cleaner initially.
        >
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline pointer-events-none">
                {/* pointer-events-none on content so mouse doesn't get stuck on text */}

                {/* Number */}
                <div className="md:col-span-2">
                    <span className="font-mono text-lg md:text-xl text-[#293133]/40">({step.id})</span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium">{step.title}</h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                    <p className="font-inter text-base text-[#293133]/70 leading-relaxed max-w-xl">
                        {step.description}
                    </p>
                </div>
            </div>

            {/* The Floating Image (Placeholder) */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "absolute top-0 left-0 z-10 pointer-events-none w-[200px] h-[140px] rounded-lg shadow-xl",
                    step.color
                )}
            >
                {/* Placeholder Content */}
                <div className="w-full h-full flex items-center justify-center text-[#293133]/40 font-mono text-xs border border-black/5 bg-white/50 backdrop-blur-sm">
                    [Image: {step.title}]
                </div>
            </motion.div>
        </motion.div>
    )

}

export function SolutionSection() {
    return (
        <section className="pt-8 pb-16 px-6 md:px-12 bg-grainy-beige text-[#293133]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex items-end justify-between border-b border-[#293133]/10 pb-6">
                    <h2 className="font-serif text-4xl md:text-6xl">Your Journey</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Empty 1/4 col */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Content 3/4 col */}
                    <div className="lg:col-span-3 flex flex-col">
                        {steps.map((step) => (
                            <StepItem key={step.id} step={step} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

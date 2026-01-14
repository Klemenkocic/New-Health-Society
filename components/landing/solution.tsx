"use client"

import { useState, useRef, MouseEvent, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const steps = [
    {
        id: "01",
        index: 0,
        title: "Analysis",
        description: "We start with a deep dive. Comprehensive bloodwork, DNA analysis if needed, and a complete lifestyle audit to understand your unique starting point.",
        color: "bg-blue-100",
        image: `${basePath}/images/gym/NHS Website-14.jpg`
    },
    {
        id: "02",
        index: 1,
        title: "Strategy",
        description: "Based on your data, we design a custom protocol. Precision nutrition, training volume calculation, and sleep optimization strategies tailored to your physiology.",
        color: "bg-green-100",
        image: `${basePath}/images/gym/NHS Website-25.jpg`
    },
    {
        id: "03",
        index: 2,
        title: "Execution",
        description: "We don't just hand you a PDF. We guide your daily execution with real-time feedback, form correction in the gym, and constant adjustments to your program.",
        color: "bg-indigo-100",
        image: `${basePath}/images/gym/NHS Website-35.jpg`
    },
    {
        id: "04",
        index: 3,
        title: "Optimization",
        description: "Your body adapts, so your plan must evolve. We re-test, re-assess, and refine your inputs to ensure continuous progress and peak performance.",
        color: "bg-orange-100",
        image: `${basePath}/images/gym/NHS Website-40.jpg`
    }
]

interface StepItemProps {
    step: typeof steps[0]
    onHover: () => void
    onLeave: () => void
}

function StepItem({ step, onHover, onLeave }: StepItemProps) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="relative group border-b border-[#293133]/10 py-8 px-4 hover:bg-[#293133]/5 transition-colors duration-300 rounded-lg cursor-default"
        >
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline pointer-events-none">
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
        </motion.div>
    )
}

export function SolutionSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Cursor position motion values
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Instant spring physics - no delay
    const mouseX = useSpring(x, { stiffness: 200, damping: 10, mass: 0.1 })
    const mouseY = useSpring(y, { stiffness: 200, damping: 10, mass: 0.1 })

    // Track hover changes for direction
    useEffect(() => {
        if (hoveredIndex !== null && hoveredIndex !== previousIndex) {
            setPreviousIndex(hoveredIndex)
        }
    }, [hoveredIndex, previousIndex])

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        // Center the image on cursor (250px width / 180px height)
        x.set(e.clientX - rect.left - 125)
        y.set(e.clientY - rect.top - 90)
    }

    const handleHover = (index: number) => {
        setHoveredIndex(index)
    }

    const handleLeave = () => {
        setHoveredIndex(null)
    }

    // Determine slide direction
    const getDirection = () => {
        if (hoveredIndex === null || previousIndex === null) return "none"
        return hoveredIndex > previousIndex ? "up" : "down"
    }

    const direction = getDirection()

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
                    <div
                        ref={containerRef}
                        className="lg:col-span-3 flex flex-col relative"
                        onMouseMove={handleMouseMove}
                    >
                        {steps.map((step) => (
                            <StepItem
                                key={step.id}
                                step={step}
                                onHover={() => handleHover(step.index)}
                                onLeave={handleLeave}
                            />
                        ))}

                        {/* Shared Cursor-Following Image Container - Only visible when hovering */}
                        {hoveredIndex !== null && (
                            <motion.div
                                style={{ x: mouseX, y: mouseY }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-0 left-0 z-50 pointer-events-none w-[250px] h-[180px] rounded-xl overflow-hidden shadow-2xl"
                            >
                                <AnimatePresence initial={false}>
                                    {steps.map((step) =>
                                        hoveredIndex === step.index && (
                                            <motion.div
                                                key={step.index}
                                                initial={{
                                                    y: direction === "up" ? 180 : direction === "down" ? -180 : 0,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    y: 0,
                                                    opacity: 1
                                                }}
                                                exit={{
                                                    opacity: 0
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.4, 0, 0.2, 1],
                                                    opacity: { duration: 0.3 }
                                                }}
                                                className="absolute inset-0"
                                                style={{ zIndex: step.index }}
                                            >
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="250px"
                                                />
                                            </motion.div>
                                        )
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

"use client"

import { useState, useRef, MouseEvent } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

// Placeholder colors for now, mimicking different "images"
const aspects = [
    { title: "Strength training", color: "bg-blue-100" },
    { title: "Nutritional guidance", color: "bg-green-100" },
    { title: "Sleep", color: "bg-indigo-100" },
    { title: "Energy levels", color: "bg-yellow-100" },
    { title: "Stress management", color: "bg-purple-100" },
    { title: "Gut health", color: "bg-rose-100" },
    { title: "Hormonal balance", color: "bg-cyan-100" },
    { title: "Recovery & Rehabilitation", color: "bg-teal-100" },
    { title: "Habits", color: "bg-orange-100" },
    { title: "Community", color: "bg-pink-100" },
    { title: "Education", color: "bg-sky-100" },
    { title: "Convenience", color: "bg-emerald-100" }
]

function AspectItem({ title, color }: { title: string, color: string }) {
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
        // Center the image on the cursor
        x.set(e.clientX - rect.left - 100) // 100 is half of image width (200px)
        y.set(e.clientY - rect.top - 75)  // 75 is half of image height (150px)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative cursor-none inline-block m-2"
        >
            {/* The Text */}
            <span
                className={cn(
                    "relative z-20 font-serif text-3xl md:text-5xl lg:text-6xl transition-colors duration-300",
                    isHovered ? "text-foreground opacity-100" : "text-foreground/20 opacity-100" // Default is faint
                )}
            >
                {title}
            </span>

            {/* The Following Image (Placeholder) */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "absolute top-0 left-0 z-10 pointer-events-none w-[250px] h-[180px] rounded-[var(--radius-md)] overflow-hidden shadow-[var(--shadow-large)]",
                    color
                )}
            >
                <div className="w-full h-full flex items-center justify-center text-foreground/20 font-mono text-sm">
                    [Image: {title}]
                </div>
            </motion.div>
        </motion.div>
    )
}

export function WhatWeDoSection() {
    return (
        <section className="py-32 px-6 bg-grainy-beige overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="mb-24 flex items-end justify-between border-b border-[#293133]/10 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-7xl text-[#293133] relative z-30"
                    >
                        All Health Aspects
                    </motion.h2>
                </div>

                {/* Scattered Cloud Layout */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-6xl mx-auto mb-24 relative z-20">
                    {aspects.map((aspect) => (
                        <AspectItem key={aspect.title} {...aspect} />
                    ))}
                </div>

                <div className="mb-24"></div>
            </div>
        </section>
    )
}

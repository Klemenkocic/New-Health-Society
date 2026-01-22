"use client"

import { useState, useRef, useEffect, MouseEvent } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { basePath } from "@/lib/utils"
import { ImageModal } from "@/components/ui/image-modal"

const aspects = [
    { index: 0, title: "Strength training", color: "bg-blue-100", image: `${basePath}/images/gym/NHS Website-14.jpg` },
    { index: 1, title: "Nutritional guidance", color: "bg-green-100", image: `${basePath}/images/gym/NHS Website-25.jpg` },
    { index: 2, title: "Sleep", color: "bg-indigo-100", image: `${basePath}/images/gym/NHS Website-35.jpg` },
    { index: 3, title: "Energy levels", color: "bg-yellow-100", image: `${basePath}/images/gym/NHS Website-40.jpg` },
    { index: 4, title: "Stress management", color: "bg-purple-100", image: `${basePath}/images/gym/NHS Website-14.jpg` },
    { index: 5, title: "Gut health", color: "bg-rose-100", image: `${basePath}/images/gym/NHS Website-25.jpg` },
    { index: 6, title: "Hormonal balance", color: "bg-cyan-100", image: `${basePath}/images/gym/NHS Website-35.jpg` },
    { index: 7, title: "Recovery & Rehabilitation", color: "bg-teal-100", image: `${basePath}/images/gym/NHS Website-40.jpg` },
    { index: 8, title: "Habits", color: "bg-orange-100", image: `${basePath}/images/gym/NHS Website-14.jpg` },
    { index: 9, title: "Community", color: "bg-pink-100", image: `${basePath}/images/gym/NHS Website-25.jpg` },
    { index: 10, title: "Education", color: "bg-sky-100", image: `${basePath}/images/gym/NHS Website-35.jpg` },
    { index: 11, title: "Convenience", color: "bg-emerald-100", image: `${basePath}/images/gym/NHS Website-40.jpg` }
]

interface AspectItemProps {
    title: string
    isHovered: boolean
    isMobile: boolean
    onHover?: () => void
    onLeave?: () => void
    onTap?: () => void
}

function AspectItem({ title, isHovered, isMobile, onHover, onLeave, onTap }: AspectItemProps) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onTap}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "relative inline-block m-2",
                !isMobile && "cursor-none"
            )}
        >
            <span
                className={cn(
                    "relative z-50 font-serif text-3xl md:text-5xl lg:text-6xl transition-colors duration-300",
                    isHovered ? "text-foreground opacity-100" : "text-foreground/20 opacity-100"
                )}
            >
                {title}
            </span>
        </motion.div>
    )
}

export function WhatWeDoSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [selectedImage, setSelectedImage] = useState<typeof aspects[0] | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const previousIndexRef = useRef<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Cursor position motion values
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Instant spring physics - no delay
    const mouseX = useSpring(x, { stiffness: 200, damping: 10, mass: 0.1 })
    const mouseY = useSpring(y, { stiffness: 200, damping: 10, mass: 0.1 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        // Center the image on cursor (300px width / 220px height)
        x.set(e.clientX - rect.left - 150)
        y.set(e.clientY - rect.top - 110)
    }

    const handleHover = (index: number) => {
        previousIndexRef.current = hoveredIndex
        setHoveredIndex(index)
    }

    const handleLeave = () => {
        previousIndexRef.current = hoveredIndex
        setHoveredIndex(null)
    }

    // Compute direction without triggering effects
    /* eslint-disable react-hooks/refs */
    const direction = ((): "up" | "down" | "none" => {
        if (hoveredIndex === null || previousIndexRef.current === null) return "none"
        return hoveredIndex > previousIndexRef.current ? "up" : "down"
    /* eslint-enable react-hooks/refs */
    })()

    return (
        <section className="py-16 md:py-32 px-6 overflow-hidden md:min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="mb-24 flex items-end justify-between border-b border-[#293133]/10 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#293133] relative z-30"
                    >
                        All Health Aspects
                    </motion.h2>
                </div>

                {/* Mobile: Simple Text List */}
                {isMobile ? (
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12">
                        {aspects.map((aspect) => (
                            <div
                                key={aspect.title}
                                className="text-left font-serif text-base text-[#293133] border-b border-[#293133]/10 pb-3"
                            >
                                • {aspect.title}
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Desktop: Scattered Cloud Layout with Images */
                    <div
                        ref={containerRef}
                        className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-6xl mx-auto mb-24 relative z-20"
                        onMouseMove={handleMouseMove}
                    >
                        {aspects.map((aspect) => (
                            <AspectItem
                                key={aspect.title}
                                title={aspect.title}
                                isHovered={hoveredIndex === aspect.index}
                                isMobile={isMobile}
                                onHover={!isMobile ? () => handleHover(aspect.index) : undefined}
                                onLeave={!isMobile ? handleLeave : undefined}
                                onTap={isMobile ? () => setSelectedImage(aspect) : undefined}
                            />
                        ))}
                    </div>
                )}

                {/* Desktop: Cursor-Following Image Container */}
                {!isMobile && hoveredIndex !== null && (
                    <div
                        ref={containerRef}
                        className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-6xl mx-auto mb-24 relative z-20"
                    >
                        <motion.div
                            style={{ x: mouseX, y: mouseY }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-0 z-10 pointer-events-none w-[300px] h-[220px] rounded-xl overflow-hidden shadow-2xl"
                        >
                            <AnimatePresence initial={false}>
                                {aspects.map((aspect) =>
                                    hoveredIndex === aspect.index && (
                                        <motion.div
                                            key={aspect.index}
                                            initial={{
                                                y: direction === "up" ? 220 : direction === "down" ? -220 : 0,
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
                                            style={{ zIndex: aspect.index }}
                                        >
                                            <Image
                                                src={aspect.image}
                                                alt={aspect.title}
                                                fill
                                                className="object-cover opacity-30"
                                                sizes="300px"
                                            />
                                        </motion.div>
                                    )
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}

                <div className="mb-24"></div>
            </div>
        </section>
    )
}

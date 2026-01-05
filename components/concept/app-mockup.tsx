"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Smartphone } from "lucide-react"

export function AppMockupSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section ref={containerRef} className="py-24 px-6 bg-[#293133] text-[#F3F0E5] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

                {/* Text Content */}
                <div>
                    <h2 className="font-serif font-bold text-4xl md:text-5xl mb-8">
                        YOUR HEALTH.
                        <br />
                        IN YOUR POCKET.
                    </h2>
                    <p className="font-inter text-lg opacity-80 leading-relaxed mb-8">
                        Manage your bookings, view your 3D scans, and track your progress.
                        All in one place.
                    </p>
                    <ul className="space-y-4 font-inter opacity-80">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            Easy Booking System
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            Progress Visualization
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            Personalized Nutrition Plans
                        </li>
                    </ul>
                </div>

                {/* Mockup Animation */}
                <div className="relative flex justify-center">
                    {/* Simple CSS shape for iPhone */}
                    <motion.div
                        style={{ rotate, y }}
                        className="w-64 h-[500px] border-8 border-[#F3F0E5] rounded-[3rem] bg-black relative flex items-center justify-center overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 w-32 h-6 bg-black rounded-b-xl z-20" /> {/* Notch */}

                        <div className="text-center text-neutral-500">
                            <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <span className="text-xs tracking-widest opacity-50">APP UI SCREEN</span>
                        </div>

                        {/* Screen Content Reflection/Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

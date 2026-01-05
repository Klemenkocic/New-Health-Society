"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    {/* Animation values for main text removed as it is now in ScrollLogo */ }

    // Secondary elements fade out faster
    const secondaryOpacity = useTransform(scrollY, [0, 100], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#F3F0E5]">
            {/* Scroll Trigger / Height Setter */}
            <div className="absolute inset-0 z-0">
                {/* Main Content Container */}
                <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 pt-32">

                    {/* Left Side: Text Content */}
                    <div className="col-span-1 md:col-span-12 flex flex-col justify-center relative z-10">

                        {/* Small Title */}
                        <motion.div
                            style={{ opacity: secondaryOpacity }}
                            className="text-primary font-medium text-sm md:text-base tracking-wide mb-4"
                        >
                            Performance meets Science
                        </motion.div>

                        {/* Subtitle */}
                        <motion.div
                            style={{ opacity: secondaryOpacity }}
                            className="text-foreground/90 text-lg md:text-xl font-normal max-w-md mb-12 leading-relaxed"
                        >
                            3x60 min/week. Measurable results in 4 months. Science-backed. No excuses.
                        </motion.div>

                        {/* BIG HERO TEXT */}
                        {/* BIG HERO TEXT - MOVED TO SCROLL LOGO COMPONENT */}
                        {/* Spacer removed to allow text to be above the fixed bottom logo */}
                    </div>

                    {/* Right Side: Video Element (Absolute positioned usually or grid) */}
                    {/* Based on wireframe, video is on the right. 
              "Video: Real training footage, natural light, in-action shots"
           */}
                    <motion.div
                        style={{ opacity: secondaryOpacity }}
                        className="absolute top-1/4 right-6 md:right-12 w-[300px] md:w-[400px] aspect-[9/16] bg-black/5 rounded-sm overflow-hidden z-0 hidden md:block"
                    >
                        {/* Abstract video placeholder using a simple gradient or maybe a stock video if I had one. 
                 Using a div for now. */}
                        <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                            Video Placeholder
                        </div>

                        {/* Quote under video */}
                        <div className="absolute -bottom-24 left-0 w-64">
                            <p className="font-serif italic text-lg text-foreground">
                                "Roberto: -16kg. He feels better at 54 than at 40."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

"use client"

import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useState } from "react"
import { basePath } from "@/lib/utils"

// Specific images requested for the Studio section
const studioImages = [
    `${basePath}/images/gym/NHS Website-16.jpg`,
    `${basePath}/images/gym/NHS Website-18.jpg`,
    `${basePath}/images/gym/NHS Website-19.jpg`,
    `${basePath}/images/gym/NHS Website-20.jpg`,
    `${basePath}/images/gym/NHS Website-21.jpg`,
    `${basePath}/images/gym/NHS Website-22.jpg`,
    `${basePath}/images/gym/NHS Website-23.jpg`,
    `${basePath}/images/gym/NHS Website-24.jpg`,
    `${basePath}/images/gym/NHS Website-37.jpg`,
    `${basePath}/images/gym/NHS Website-38.jpg`,
    `${basePath}/images/gym/NHS Website-39.jpg`,
    `${basePath}/images/gym/NHS Website-40.jpg`,
]

export function GymGallerySection() {
    // Determine duplications needed to fill screen + scroll
    // For safety, we just duplicate the list enough times.
    const marqueeImages = [...studioImages, ...studioImages, ...studioImages]

    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <div className="px-6 md:px-12 mb-12 md:mb-16 max-w-7xl mx-auto">
                    <div className="w-full border-b border-[#293133]/10 pb-8">
                        <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                            The Studio
                        </h2>
                    </div>
                </div>

                {/* Marquee Container */}
                <div
                    className="relative w-full flex overflow-hidden"
                >
                    {/* 
                       Using a simple CSS animation or Framer Motion?
                       Framer Motion is requested for smooth pause.
                     */}
                    <MarqueeContent images={marqueeImages} />
                </div>
            </div>
        </section>
    )
}

function MarqueeContent({ images }: { images: string[] }) {
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 60, // Slow speed (adjust as needed)
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
            }
        })
    }, [controls])

    return (
        <motion.div
            className="flex gap-6 pl-6 min-w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
                controls.start({
                    x: "-50%",
                    transition: {
                        duration: 60, // Must match initial duration
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                })
            }}
            // Reset to 0 prevents jump? Actually better to just loop a large set.
            // standard marquee technique: animate from 0 to -50% where 50% is exact duplicate.
            style={{ x: 0 }}
        >
            {images.map((src, index) => (
                <div key={index} className="w-[300px] md:w-[450px] aspect-[4/3] relative rounded-sm overflow-hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src={src}
                        alt={`NHS Studio Shot ${index}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
            ))}
        </motion.div>
    )
}

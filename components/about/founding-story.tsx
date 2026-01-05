"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const slides = [
    { year: "2014", title: "The Beginning", desc: "It started in a garage. No fancy equipment. Just a obsession with mechanics.", image: "bg-neutral-800" },
    { year: "2016", title: "First Location", desc: "We moved to Schwabing. 200sqm. The community started to grow.", image: "bg-neutral-700" },
    { year: "2018", title: "The Method", desc: "We codified our approach. Data became the driver. Guesswork was eliminated.", image: "bg-neutral-600" },
    { year: "2021", title: "Expansion", desc: "600sqm. State of the art diagnostics. The vision became reality.", image: "bg-neutral-500" },
    { year: "2024", title: "The New Standard", desc: "We are not just a gym. We are a health optimization center.", image: "bg-neutral-400" },
]

export function FoundingStorySection() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    // Transform scroll progress [0, 1] to x translation [0%, -80%] (assuming 5 slides)
    // Actually, -100% * (slides.length - 1) / slides.length?
    // Easier: 5 slides. We want to move 4 full widths to the left.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-foreground text-[#F3F0E5]">
            {/* Sticky Container */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Horizontal Track */}
                <motion.div style={{ x }} className="flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative h-[80vh] w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-end p-12 md:p-24 border-r border-[#F3F0E5]/10 first:ml-[10vw] last:mr-[10vw]"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1/2 ${slide.image} -z-10 opacity-50`} />
                            <span className="text-sm font-mono opacity-50 mb-4">{slide.year}</span>
                            <h3 className="font-serif font-bold text-4xl md:text-6xl mb-6">{slide.title}</h3>
                            <p className="font-inter text-xl opacity-80 max-w-md">{slide.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Progress Indicator */}
                <div className="absolute bottom-12 left-12 font-mono text-xs opacity-50">
                    SCROLL TO EXPLORE
                </div>
            </div>
        </section>
    )
}

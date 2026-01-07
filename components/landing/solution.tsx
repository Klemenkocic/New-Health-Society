"use client"

import { motion } from "framer-motion"

const solutions = [
    {
        id: 1,
        defaultText: "",
        hoverText: "Personalized for you. Your body. Your goals. Your schedule.",
        imageSrc: "/images/gym/NHS Website-41.jpg"
    },
    {
        id: 2,
        defaultText: "",
        hoverText: "3x60 min/week. That's it. No 5x/week nonsense.",
        imageSrc: "/images/gym/NHS Website-42.jpg"
    },
    {
        id: 3,
        defaultText: "",
        hoverText: "€560/month for group training. Less than you think.",
        imageSrc: "/images/gym/NHS Website-43.jpg"
    },
    {
        id: 4,
        defaultText: "",
        hoverText: "Every rep tracked. Every measurement recorded. Data-driven progress.",
        imageSrc: "/images/gym/NHS Website-15.jpg"
    }
]

import Image from "next/image"

export function SolutionSection() {
    return (
        <section className="py-0 px-0 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] w-full">
                {solutions.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative w-full h-full overflow-hidden group cursor-default"
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.hoverText}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 custom-image-position"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-12">
                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="font-inter font-semibold text-xl md:text-2xl text-foreground text-center"
                            >
                                {item.hoverText}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

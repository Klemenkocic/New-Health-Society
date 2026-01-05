"use client"

import { motion } from "framer-motion"

const solutions = [
    {
        id: 1,
        defaultText: "",
        hoverText: "Personalized for you. Your body. Your goals. Your schedule.",
        image: "bg-neutral-200" // Placeholder for image
    },
    {
        id: 2,
        defaultText: "",
        hoverText: "3x60 min/week. That's it. No 5x/week nonsense.",
        image: "bg-neutral-300"
    },
    {
        id: 3,
        defaultText: "",
        hoverText: "€560/month for group training. Less than you think.",
        image: "bg-neutral-400"
    },
    {
        id: 4,
        defaultText: "",
        hoverText: "Every rep tracked. Every measurement recorded. Data-driven progress.",
        image: "bg-neutral-500"
    }
]

export function SolutionSection() {
    return (
        <section className="py-0 px-0 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] w-full">
                {solutions.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`relative w-full h-full ${item.image} overflow-hidden group cursor-default`}
                    >
                        {/* Actual Image would go here as an <img /> or next/image with object-cover */}

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

                        {/* Placeholder Label if no image */}
                        <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-500 group-hover:opacity-0 transition-opacity">
                            [Image Placeholder {item.id}]
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

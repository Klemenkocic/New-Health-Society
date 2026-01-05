"use client"

import { motion } from "framer-motion"

const aspects = [
    "Strength training", "Nutritional guidance", "Sleep",
    "Energy levels", "Stress management", "Gut health",
    "Hormonal balance", "Recovery & Rehabilitation", "Habits",
    "Community", "Education", "Convenience"
]

export function WhatWeDoSection() {
    return (
        <section className="py-32 px-6 bg-[#F3F0E5] overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-24 relative z-10"
                >
                    ALL HEALTH ASPECTS
                </motion.h2>

                {/* Scattered Terms */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto mb-24">
                    {aspects.map((aspect, index) => (
                        <motion.span
                            key={aspect}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 0.7, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: Math.random() * 0.8, // Random delay 0-800ms
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="font-inter text-lg md:text-2xl text-foreground/70"
                        >
                            {aspect}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="font-serif italic text-2xl text-foreground">
                        "From ultra marathon prep to PR deadlifts. We cover it all."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

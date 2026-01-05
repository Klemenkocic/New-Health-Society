"use client"

import { motion } from "framer-motion"

export function FundamentalsSection() {
    const words = ["TRAINING", "RECOVERY", "SOCIAL"]

    return (
        <section className="py-32 px-6 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                {words.map((word, index) => (
                    <motion.h2
                        key={word}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-serif font-bold text-5xl md:text-8xl text-foreground tracking-tighter"
                    >
                        {word}
                    </motion.h2>
                ))}
            </div>
        </section>
    )
}

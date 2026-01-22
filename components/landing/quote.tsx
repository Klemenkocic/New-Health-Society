"use client"

import { motion } from "framer-motion"

export function QuoteSection() {
    return (
        <section className="pt-32 pb-16 px-6 border-t border-foreground/5">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed"
                >
                    &ldquo;Health happens when you put in the work.
                    <br />
                    No shortcuts. Only systems.&rdquo;
                </motion.h2>
            </div>
        </section>
    )
}

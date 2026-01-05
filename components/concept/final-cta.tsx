"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTASection() {
    return (
        <section className="py-32 px-6 bg-[#26538D] text-white text-center">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="font-serif font-bold text-4xl md:text-6xl mb-8"
                >
                    READY TO START?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="font-inter text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto"
                >
                    No more guessing. No more wasted time.
                    Just a plan that works.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link href="/consultation">
                        <Button variant="outline" size="lg" className="h-16 px-10 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            Book Initial Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

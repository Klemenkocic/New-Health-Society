"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
    {
        title: "Personal Training",
        desc: "Biomechanics-focused training designed to correct imbalances and build functional strength.",
        span: "md:col-span-6",
        height: "h-[400px]"
    },
    {
        title: "Nutrition & Lifestyle",
        desc: "Data-driven nutritional strategies that fit your life, not a generic meal plan.",
        span: "md:col-span-6 md:mt-24", // Offset for asymmetry
        height: "h-[350px]"
    },
    {
        title: "Health Monitoring",
        desc: "Continuous tracking of sleep, stress (HRV), and recovery to ensure you never overtrain.",
        span: "md:col-span-5",
        height: "h-[350px]"
    },
    {
        title: "Community Events",
        desc: "Join a network of high-performers. Monthly challenges and educational workshops.",
        span: "md:col-span-7",
        height: "h-[400px]"
    }
]

export function WhatWeDoSection() {
    return (
        <section className="py-32 px-6 bg-[#F3F0E5]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
                        <h2 className="font-serif font-bold text-4xl md:text-6xl text-foreground leading-[1.1]">
                            Holistic <span className="italic font-normal">Integration</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-foreground/80 leading-relaxed font-sans">
                        We don't just train muscles. We engineer a lifestyle that amplifies your professional and personal performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`${feature.span} group relative`}
                        >
                            <div className={`${feature.height} glass-card p-8 flex flex-col justify-between overflow-hidden group-hover:border-primary/20`}>

                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon/Number */}
                                <div className="relative z-10 w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-xs font-mono text-neutral-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                                    0{i + 1}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="font-serif text-3xl mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-neutral-500 leading-relaxed max-w-sm group-hover:text-neutral-700 transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Corner Accents (Decorative) */}
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary transform group-hover:rotate-45 transition-transform duration-500">
                                        <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

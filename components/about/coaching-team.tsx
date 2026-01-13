"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const coaches = [
    {
        name: "Alex S.",
        role: "Head Coach",
        quote: "Excellence is not an act, but a habit.",
        imageSrc: `${basePath}/images/gym/NHS Website-36.jpg`
    },
    {
        name: "Klemen K.",
        role: "Head of Performance",
        quote: "Measure everything. Improve everything.",
        imageSrc: `${basePath}/images/gym/NHS Website-17.jpg`
    },
]

export function CoachingTeamSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-grainy-beige border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Consistent with other pages */}
                <div className="border-b border-[#293133]/10 pb-8 mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        The Team
                    </h2>
                </div>

                {/* Centered Team Grid */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                    {coaches.map((coach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group cursor-default w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
                        >
                            {/* Image */}
                            <div className="w-full aspect-[3/4] mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm relative overflow-hidden">
                                <Image
                                    src={coach.imageSrc}
                                    alt={coach.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <Quote className="w-8 h-8 text-white/80" />
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-serif font-bold text-2xl mb-2 text-[#293133]">{coach.name}</h3>
                            <p className="font-inter text-sm text-[#26538D] font-bold tracking-wide uppercase mb-4">{coach.role}</p>
                            <p className="font-serif italic text-[#293133]/70">"{coach.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

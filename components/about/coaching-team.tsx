"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"
import { ImageModal } from "@/components/ui/image-modal"

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
    const [selectedCoach, setSelectedCoach] = useState<typeof coaches[0] | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="py-12 md:py-24 px-6 md:px-12 bg-transparent border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Consistent with other pages */}
                <div className="border-b border-[#293133]/10 pb-8 mb-10 md:mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        The Team
                    </h2>
                </div>

                {/* Mobile: Horizontal Scroll / Desktop: Centered Grid */}
                <div className="md:flex md:flex-wrap md:justify-center md:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
                    <div className="flex gap-6 md:contents">
                        {coaches.map((coach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                onClick={isMobile ? () => setSelectedCoach(coach) : undefined}
                                className="group cursor-default min-w-[260px] max-w-[260px] md:min-w-0 md:w-full sm:md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] md:max-w-[400px] flex-shrink-0"
                            >
                            {/* Image */}
                            <div className="w-full aspect-[3/4] mb-4 md:mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm relative overflow-hidden">
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
                            <h3 className="font-serif font-bold text-xl md:text-2xl mb-1 md:mb-2 text-[#293133]">{coach.name}</h3>
                            <p className="font-inter text-xs md:text-sm text-[#26538D] font-bold tracking-wide uppercase mb-2 md:mb-4">{coach.role}</p>
                            <p className="font-serif italic text-sm md:text-base text-[#293133]/70 line-clamp-2 md:line-clamp-none">&ldquo;{coach.quote}&rdquo;</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Image Modal */}
                <ImageModal
                    isOpen={selectedCoach !== null}
                    onClose={() => setSelectedCoach(null)}
                    imageSrc={selectedCoach?.imageSrc || ''}
                    imageAlt={selectedCoach?.name || ''}
                    title={selectedCoach?.name}
                    description={selectedCoach?.quote}
                />
            </div>
        </section>
    )
}

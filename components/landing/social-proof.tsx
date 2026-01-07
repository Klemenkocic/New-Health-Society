"use client"

import * as React from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { Star } from "lucide-react"

const reviews = [
    {
        id: 1,
        name: "Dr. Thomas M.",
        role: "Orthopedic Surgeon",
        text: "I send my patients here because I trust the science. I train here because I see the results.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah K.",
        role: "CEO, Tech Start-up",
        text: "The only hour of my day where I don't have to think. I just execute. My energy levels are back to where they were at 25.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael R.",
        role: "Architect",
        text: "Precision is everything in my job. NHS applies that same precision to health.",
        rating: 5
    },
    {
        id: 4,
        name: "Unknown",
        role: "Member since 2019",
        text: "It's not just a gym. It's a system for longevity.",
        rating: 5
    }
]

export function SocialProofSection() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" })

    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-16 text-center">
                    TRUSTED BY
                </h2>

                {/* Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0">
                                <div className="bg-[#F3F0E5] p-8 h-full rounded-[var(--radius-md)] border border-foreground/5 flex flex-col justify-between hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300">
                                    <div>
                                        <div className="flex gap-1 mb-4 text-primary">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="font-serif italic text-lg text-foreground mb-6">
                                            "{review.text}"
                                        </p>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-foreground">{review.name}</div>
                                        <div className="text-xs text-foreground/60">{review.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos Placeholder */}
                <div className="mt-24 pt-12 border-t border-foreground/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Replace with actual SVGs later */}
                    <span className="text-xl font-bold font-serif">GOOGLE</span>
                    <span className="text-xl font-bold font-serif">BMW</span>
                    <span className="text-xl font-bold font-serif">ALLIANZ</span>
                    <span className="text-xl font-bold font-serif">SIEMENS</span>
                </div>
            </div>
        </section>
    )
}

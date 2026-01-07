"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"

const coaches = [
    { name: "Alex S.", role: "Head Coach", quote: "Excellence is not an act, but a habit.", imageSrc: "/images/gym/NHS Website-36.jpg" },
    { name: "Klemen K.", role: "Head of Performance", quote: "Measure everything. Improve everything.", imageSrc: "/images/gym/NHS Website-17.jpg" },
]

export function CoachingTeamSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="font-serif font-bold text-4xl text-foreground">THE TEAM</h2>
                    <div className="flex gap-4">
                        <button onClick={scrollPrev} className="p-3 border border-foreground/10 hover:bg-foreground hover:text-background transition-colors rounded-full">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button onClick={scrollNext} className="p-3 border border-foreground/10 hover:bg-foreground hover:text-background transition-colors rounded-full">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-8">
                        {coaches.map((coach, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-8 min-w-0">
                                <div className="group cursor-default">
                                    {/* Image */}
                                    <div className="w-full aspect-[3/4] mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm relative overflow-hidden">
                                        <Image
                                            src={coach.imageSrc}
                                            alt={coach.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                            <Quote className="w-8 h-8 text-white/80" />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <h3 className="font-serif font-bold text-2xl mb-2">{coach.name}</h3>
                                    <p className="font-inter text-sm text-primary font-bold tracking-wide uppercase mb-4">{coach.role}</p>
                                    <p className="font-serif italic text-foreground/70">"{coach.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

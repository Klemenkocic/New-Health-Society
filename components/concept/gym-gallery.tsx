"use client"

import useEmblaCarousel from "embla-carousel-react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
    "bg-neutral-800", "bg-neutral-700", "bg-neutral-600", "bg-neutral-500"
]

export function GymGallerySection() {
    const [emblaRef] = useEmblaCarousel({ loop: true })

    return (
        <section className="py-24 bg-background">
            <div className="max-w-[1920px] mx-auto">
                <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground text-center mb-16">
                    THE STUDIO
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((img, index) => (
                            <div key={index} className="flex-[0_0_80%] md:flex-[0_0_60%] px-4 min-w-0">
                                <div className={`w-full aspect-video ${img} rounded-sm relative flex items-center justify-center`}>
                                    <span className="text-white/30 font-mono text-xl">STUDIO SHOT {index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

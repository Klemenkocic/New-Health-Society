"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

import Autoplay from "embla-carousel-autoplay"
import { basePath } from "@/lib/utils"

// Specific images requested for the Studio section
const studioImages = [
    `${basePath}/images/gym/NHS Website-16.jpg`,
    `${basePath}/images/gym/NHS Website-18.jpg`,
    `${basePath}/images/gym/NHS Website-19.jpg`,
    `${basePath}/images/gym/NHS Website-20.jpg`,
    `${basePath}/images/gym/NHS Website-21.jpg`,
    `${basePath}/images/gym/NHS Website-22.jpg`,
    `${basePath}/images/gym/NHS Website-23.jpg`,
    `${basePath}/images/gym/NHS Website-24.jpg`,
    `${basePath}/images/gym/NHS Website-37.jpg`,
    `${basePath}/images/gym/NHS Website-38.jpg`,
    `${basePath}/images/gym/NHS Website-39.jpg`,
    `${basePath}/images/gym/NHS Website-40.jpg`,
]

export function GymGallerySection() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
        Autoplay({ delay: 3000, stopOnMouseEnter: true })
    ])

    return (
        <section className="py-24 bg-background border-t border-foreground/5">
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end px-6 md:px-12 mb-16 max-w-7xl mx-auto">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Where We Train</span>
                        <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground">
                            THE STUDIO
                        </h2>
                    </div>
                    <p className="font-serif italic text-xl text-foreground/60 max-w-md mt-4 md:mt-0">
                        Designed for focus. Built for performance.
                    </p>
                </div>

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex">
                        {studioImages.map((src, index) => (
                            <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] pl-6 min-w-0">
                                <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden select-none">
                                    <Image
                                        src={src}
                                        alt={`NHS Studio Shot ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

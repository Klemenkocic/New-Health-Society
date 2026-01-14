"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { basePath } from "@/lib/utils"

// --- Data ---
const clients = [
    {
        id: "thilo",
        name: "Thilo",
        age: "56",
        quote: "I didn’t think I’d get this fit at 50! Now my sons can barely keep up.",
        stats: [
            { label: "Fat Loss", value: "4%" },
            { label: "Time", value: "5 Mo" }
        ],
        description: "With coach Alex, they focused on protein, hard weight training, and prioritizing recovery. The results paid off. Thilo is stronger, fitter, and back on his motocross bike without fear of injury.",
        images: [
            `${basePath}/images/results/Thilo_Back 2.jpg`,
            `${basePath}/images/results/Thilo_Front 2.jpg`,
            `${basePath}/images/results/Thilo_Scaneca.jpg`
        ]
    },
    {
        id: "livius",
        name: "Livius",
        age: "26",
        quote: "Thanks to the group classes I established a new routine which helped me becoming fit again.",
        stats: [
            { label: "Fat Loss", value: "7KG" },
            { label: "Time", value: "6 Mo" }
        ],
        description: "Like many young professionals, Livius struggled with irregular routines. With Coach Klemen, he learned the importance of progressive overload, solid sleep, and recovery.",
        images: [
            `${basePath}/images/results/Livius_Back.jpg`,
            `${basePath}/images/results/Livius_Front.jpg`,
            `${basePath}/images/results/Livius_Scaneca.jpg`
        ]
    },
    {
        id: "florian",
        name: "Florian",
        age: "30",
        quote: "It felt like training in my private gym with friends, not just another workout.",
        stats: [
            { label: "Muscle", value: "+5.2KG" },
            { label: "Time", value: "4 Mo" }
        ],
        description: "Florian felt too busy with work and social life to train. With Coach Alex, he found a routine of steady training, balanced nutrition, and sleep.",
        images: [
            `${basePath}/images/results/FlorianOstermeier_Back.jpg`,
            `${basePath}/images/results/FlorianOstermeier_Front.jpg`,
            `${basePath}/images/results/FlorianOstermeier_Scaneca.jpg`
        ]
    }
]

// --- Components ---

const ClientGallery = ({ images, name }: { images: string[], name: string }) => {
    const [activeImage, setActiveImage] = useState(images[0])

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Main Image Container */}
            <div className="w-full mb-6">
                <Image
                    src={activeImage}
                    alt={`${name} result main`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-2xl object-contain"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
                {images.map((src, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(src)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-50 border transition-all ${activeImage === src
                            ? "border-primary ring-1 ring-primary/20 opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`${name} thumbnail ${idx}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

const ClientInfo = ({ client }: { client: typeof clients[0] }) => (
    <div className="flex flex-col justify-center h-full py-4 md:py-0">
        <div className="mb-6 border-b border-black/10 pb-6">
            <div className="flex items-baseline gap-3 mb-2">
                <h3 className="font-serif text-3xl md:text-4xl text-[#293133]">{client.name}</h3>
                <span className="font-mono text-sm text-[#293133]/40">AGE {client.age}</span>
            </div>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed">
                "{client.quote}"
            </p>
        </div>

        <div className="flex gap-12 mb-8">
            {client.stats.map(s => (
                <div key={s.label}>
                    <div className="text-2xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs font-mono uppercase text-[#293133]/40 tracking-wider">{s.label}</div>
                </div>
            ))}
        </div>

        <p className="text-sm md:text-base text-[#293133]/70 leading-relaxed font-inter max-w-md">
            {client.description}
        </p>
    </div>
)

export function ClientResultsSection() {
    return (
        <section className="py-12 px-6 md:px-12 bg-grainy-beige text-[#293133]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-24 border-b border-[#293133]/10 pb-8">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133] mb-4">Real Results</h2>
                    <p className="text-[#293133]/60 font-inter max-w-xl text-lg">
                        See the tangible transformations achieved through our clinical precision training.
                    </p>
                </div>

                <div className="space-y-32">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className={`flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Gallery Column */}
                            <div className={index % 2 === 1 ? "md:order-last" : ""}>
                                <ClientGallery images={client.images} name={client.name} />
                            </div>

                            {/* Info Column */}
                            <div>
                                <ClientInfo client={client} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

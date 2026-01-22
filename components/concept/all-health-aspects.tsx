"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const aspects = [
    { id: "strength", title: "Strength training", desc: "Foundation of longevity.", color: "bg-stone-200" },
    { id: "nutrition", title: "Nutritional guidance", desc: "Fuel for performance.", color: "bg-stone-300" },
    { id: "sleep", title: "Sleep improvement", desc: "Where recovery happens.", color: "bg-stone-400" },
    { id: "energy", title: "Energy levels", desc: "Vitality for life.", color: "bg-stone-500" },
    { id: "stress", title: "Stress management", desc: "Calm the mind.", color: "bg-stone-200" },
    { id: "gut", title: "Gut health", desc: "The second brain.", color: "bg-stone-300" },
    { id: "hormones", title: "Hormonal balance", desc: "Drive your drive.", color: "bg-stone-400" },
    { id: "recovery", title: "Recovery & Rehabilitation", desc: "Bounce back stronger.", color: "bg-stone-500" },
    { id: "convenience", title: "Convenience", desc: "Seamless integration.", color: "bg-stone-200" },
    { id: "supplementation", title: "Supplementation", desc: "Targeted support.", color: "bg-stone-300" },
    { id: "blood", title: "Blood sugar balance", desc: "Stable energy.", color: "bg-stone-400" },
    { id: "longevity", title: "Longevity", desc: "Live longer, better.", color: "bg-stone-500" },
]

// Simple, reliable animation variants
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
}

export function AllHealthAspectsSection() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const selectedItem = selectedId ? aspects.find(a => a.id === selectedId) : null

    return (
        <section className="py-8 md:py-12 px-6 md:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="w-full mb-6 md:mb-8 border-b border-[#293133]/10 pb-4 md:pb-6">
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#293133]">
                        All Health Aspects
                    </h2>
                </div>

                {/* Grid of aspect cards */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                    {aspects.map((aspect) => (
                        <div
                            key={aspect.id}
                            onClick={() => setSelectedId(aspect.id)}
                            className={`aspect-square md:aspect-[3/2] ${aspect.color} p-3 md:p-4 cursor-pointer hover:brightness-95 hover:scale-[1.02] transition-all duration-200 rounded-sm flex flex-col justify-end group`}
                        >
                            <h3 className="font-serif font-bold text-xs md:text-lg leading-tight text-[#293133]">
                                {aspect.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Modal with simple fade + scale animation */}
                <AnimatePresence>
                    {selectedItem && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
                            {/* Backdrop */}
                            <motion.div
                                variants={backdropVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            {/* Modal Content */}
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-[#F3F0E5] w-full max-w-4xl aspect-video md:aspect-[21/9] rounded-lg shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-[#293133]" />
                                </button>

                                {/* Left: Text Content */}
                                <div className={`w-full md:w-1/2 p-12 flex flex-col justify-center ${selectedItem.color}`}>
                                    <h3 className="font-serif font-bold text-4xl mb-4 text-[#293133]">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-xl opacity-80 text-[#293133]">
                                        {selectedItem.desc}
                                    </p>
                                </div>

                                {/* Right: Image */}
                                <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative overflow-hidden">
                                    <Image
                                        src={`${basePath}/images/gym/NHS Website-${34 + (aspects.indexOf(selectedItem) % 5)}.jpg`}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

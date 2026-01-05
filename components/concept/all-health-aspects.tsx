"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const aspects = [
    { id: "strength", title: "Strength", desc: "Foundation of longevity.", color: "bg-stone-200" },
    { id: "sleep", title: "Sleep", desc: "Where recovery happens.", color: "bg-stone-300" },
    { id: "nutrition", title: "Nutrition", desc: "Fuel for performance.", color: "bg-stone-400" },
    { id: "stress", title: "Stress", desc: "Management is key.", color: "bg-stone-500" },
    { id: "gut", title: "Gut Health", desc: "The second brain.", color: "bg-stone-200" },
    { id: "hormones", title: "Hormones", desc: "Balance drives everything.", color: "bg-stone-300" },
    { id: "recovery", title: "Recovery", desc: "Active and passive.", color: "bg-stone-400" },
    { id: "cardio", title: "Cardio", desc: "Heart health.", color: "bg-stone-500" },
    { id: "community", title: "Community", desc: "We go further together.", color: "bg-stone-200" },
    // ... more items
]

export function AllHealthAspectsSection() {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-4xl mb-12 text-center">ALL HEALTH ASPECTS</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {aspects.map((aspect) => (
                        <motion.div
                            key={aspect.id}
                            layoutId={aspect.id}
                            onClick={() => setSelectedId(aspect.id)}
                            className={`aspect-square ${aspect.color} p-6 cursor-pointer hover:brightness-95 transition-all rounded-sm flex flex-col justify-end group`}
                        >
                            <motion.h3 className="font-bold text-lg group-hover:scale-105 transition-transform origin-left">
                                {aspect.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                            />

                            <motion.div
                                layoutId={selectedId}
                                className="bg-[#F3F0E5] w-full max-w-4xl aspect-video md:aspect-[21/9] rounded-sm shadow-2xl overflow-hidden relative pointer-events-auto flex flex-col md:flex-row"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Content */}
                                {(() => {
                                    const item = aspects.find(a => a.id === selectedId)
                                    return (
                                        <>
                                            <div className={`w-full md:w-1/2 p-12 flex flex-col justify-center ${item?.color}`}>
                                                <motion.h3 className="font-serif font-bold text-4xl mb-4">{item?.title}</motion.h3>
                                                <motion.p className="text-xl opacity-80">{item?.desc}</motion.p>
                                            </div>
                                            <div className="w-full md:w-1/2 bg-black flex items-center justify-center text-white/50">
                                                [Video/Image Placeholder]
                                            </div>
                                        </>
                                    )
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

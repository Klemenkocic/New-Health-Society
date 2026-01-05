"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const models = [
    {
        id: "coaching",
        title: "COACHING",
        desc: "The foundation. We audit your lifestyle, nutrition, and recovery. Then we build the plan.",
        image: "bg-blue-900" // Placeholder color
    },
    {
        id: "group",
        title: "SMALL GROUP",
        desc: "Maximum 10 people. Individual programs. The energy of a team, the precision of a private session.",
        image: "bg-emerald-900"
    },
    {
        id: "personal",
        title: "PERSONAL TRAINING",
        desc: "100% attention. For rehabilitation, specific athletic goals, or maximum efficiency.",
        image: "bg-purple-900"
    }
]

export function ThreeModelsSection() {
    const [activeId, setActiveId] = useState<string>("coaching")

    return (
        <section className="py-24 px-6 md:px-12 bg-background min-h-[800px]">
            <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-12">
                {/* Left Side: Accordion */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                    <h2 className="font-serif font-bold text-3xl mb-8 text-foreground/50">OUR MODELS</h2>

                    {models.map((model) => {
                        const isActive = activeId === model.id
                        return (
                            <div
                                key={model.id}
                                className="border-b border-foreground/10 pb-6 cursor-pointer group"
                                onClick={() => setActiveId(model.id)}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={`font-serif font-bold text-4xl transition-colors ${isActive ? "text-foreground" : "text-foreground/30 group-hover:text-foreground/60"}`}>
                                        {model.title}
                                    </h3>
                                    {isActive ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6 opacity-30" />}
                                </div>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="font-inter text-lg text-foreground/80 max-w-md">
                                                {model.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

                {/* Right Side: Image Display */}
                <div className="w-full md:w-1/2 relative h-[500px] md:h-auto rounded-sm overflow-hidden">
                    <AnimatePresence mode="wait">
                        {models.map((model) => (
                            model.id === activeId && (
                                <motion.div
                                    key={model.id}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute inset-0 w-full h-full ${model.image} flex items-center justify-center text-white/50 font-mono text-2xl`}
                                >
                                    [Image: {model.title}]
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

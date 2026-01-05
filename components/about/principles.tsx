"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"

const principles = [
    { id: 1, title: "Radical Transparency", text: "We share everything. Our methods. Your data. No black boxes." },
    { id: 2, title: "Data Over Opinion", text: "We don't care what influencers say. We care what your bloodwork says." },
    { id: 3, title: "Service First", text: "You are not a membership number. You are a client we serve." },
    { id: 4, title: "Continuous Education", text: "Our coaches study weekly. If we are not learning, we are failing." }
]

export function PrinciplesSection() {
    const [openIds, setOpenIds] = useState<number[]>([])

    const toggle = (id: number) => {
        setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    }

    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif font-bold text-sm tracking-widest text-foreground/50 mb-12 uppercase">Our Core Principles</h2>

                <div className="space-y-4">
                    {principles.map((p) => {
                        const isOpen = openIds.includes(p.id)
                        return (
                            <div key={p.id} className="group">
                                <button
                                    onClick={() => toggle(p.id)}
                                    className="flex items-center gap-4 w-full text-left py-2 hover:bg-neutral-100 rounded-sm transition-colors px-2 -ml-2"
                                >
                                    <motion.div
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Play className="w-3 h-3 fill-current opacity-50" />
                                    </motion.div>
                                    <span className="font-inter font-medium text-lg text-foreground">{p.title}</span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden pl-9 pr-4"
                                        >
                                            <p className="py-2 text-foreground/70 font-inter leading-relaxed">
                                                {p.text}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

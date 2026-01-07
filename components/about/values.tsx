"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"

const values = [
    { id: 1, title: "Excellence", text: "We do not accept mediocrity. In our facility or in our own work." },
    { id: 2, title: "Honesty", text: "We tell you the truth. Even when it is uncomfortable. Especially when it is uncomfortable." },
    { id: 3, title: "Longevity", text: "We play the long game. Health is not a 6-week challenge. It is a lifetime pursuit." },
    { id: 4, title: "Respect", text: "We respect the process. We respect the science. We respect each other." }
]

export function ValuesSection() {
    const [openIds, setOpenIds] = useState<number[]>([])

    const toggle = (id: number) => {
        setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    }

    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif font-bold text-sm tracking-widest text-foreground/50 mb-12 uppercase">Our Values</h2>

                <div className="space-y-4">
                    {values.map((v) => {
                        const isOpen = openIds.includes(v.id)
                        return (
                            <div key={v.id} className="group border-b border-foreground/5 pb-2">
                                <button
                                    onClick={() => toggle(v.id)}
                                    className="flex items-center gap-4 w-full text-left py-4 hover:bg-neutral-50 rounded-[var(--radius-md)] transition-all duration-200 ease-in-out px-2 -ml-2 hover:shadow-[var(--shadow-small)] hover:-translate-y-[2px]"
                                >
                                    <motion.div
                                        animate={{ rotate: isOpen ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Play className="w-3 h-3 fill-current opacity-50" />
                                    </motion.div>
                                    <span className="font-serif font-bold text-2xl text-foreground">{v.title}</span>
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
                                            <p className="py-4 text-foreground/70 font-inter leading-relaxed text-lg">
                                                {v.text}
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

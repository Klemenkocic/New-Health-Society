"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Is this only for athletes?",
        answer: "No. We treat everyone like an athlete. That means we respect your body, your time, and your potential. Whether you are a CEO, a parent, or semi-pro, the principles of physiology remain the same."
    },
    {
        question: "Do I need to be fit to start?",
        answer: "Absolutely not. In fact, most people start here because they want to GET fit safely. We assess your starting point with clinical precision so you never train above your capacity."
    },
    {
        question: "How does the scheduling work?",
        answer: "We use a dedicated app. You can book your slots up to 2 weeks in advance. Cancellation is free up to 24h before."
    },
    {
        question: "What if I travel a lot?",
        answer: "We build travel workouts for you. Your plan continues wherever you are. We also offer digital coaching support for frequent flyers."
    }
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Title Column */}
                    <div className="md:col-span-4 md:sticky md:top-24 h-fit">
                        <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-8">FAQ</h2>
                        <p className="font-inter text-foreground/60 text-lg max-w-sm">
                            Answers to common questions about our training philosophy and logistics.
                        </p>
                    </div>

                    {/* Questions Column */}
                    <div className="md:col-span-8 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div key={index} className="border-b border-foreground/10 pb-4">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                                    >
                                        <span className="font-serif font-medium text-xl text-foreground group-hover:text-primary transition-colors pr-8">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className="w-5 h-5 text-foreground/50" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-foreground/80 font-inter leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

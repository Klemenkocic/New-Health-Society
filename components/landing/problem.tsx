"use client"

import { motion } from "framer-motion"

const problems = [
    {
        title: "SYSTEMS",
        description: "No structure. Just random exercises.",
        className: "md:col-span-1"
    },
    {
        title: "PROGRESS",
        description: "No tracking. No proof you're improving.",
        className: "md:col-span-1"
    },
    {
        title: "ON-PURPOSE TRAINING",
        description: "Random workouts. Doing whatever feels good.",
        className: "md:col-span-1"
    },
    {
        title: "TIME",
        description: "5x/week or nothing.",
        className: "md:col-span-1"
    },
    {
        title: "ACCOUNTABILITY",
        description: "Nobody checking. No plan adjustments. Just showing up hoping for results.",
        className: "md:col-span-2"
    }
]

export function ProblemSection() {
    return (
        <section className="pt-24 pb-0 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {problems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`bg-[#F3F0E5] border border-foreground/10 p-8 min-h-[200px] flex flex-col justify-between ${item.className}`}
                        >
                            <h3 className="font-serif font-bold text-2xl text-foreground mb-4">{item.title}</h3>
                            <p className="text-foreground/80 font-inter text-base leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mt-12"
                >
                    <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed">
                        "The most important thing? You feel welcomed and understood.
                        Service excellence meets athletic performance."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

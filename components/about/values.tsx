"use client"

import { motion } from "framer-motion"

const values = [
    {
        id: 1,
        title: "Excellence",
        text: "We do not accept mediocrity. In our facility or in our own work. Every detail matters."
    },
    {
        id: 2,
        title: "Honesty",
        text: "We tell you the truth. Even when it is uncomfortable. Especially when it is uncomfortable."
    },
    {
        id: 3,
        title: "Longevity",
        text: "We play the long game. Health is not a 6-week challenge. It is a lifetime pursuit."
    },
    {
        id: 4,
        title: "Respect",
        text: "We respect the process. We respect the science. We respect each other."
    }
]

export function ValuesSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="border-b border-[#293133]/10 pb-8 mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        Our Values
                    </h2>
                </div>

                {/* Values List */}
                <div className="space-y-1">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group border-b border-[#293133]/10 py-8 hover:bg-[#293133]/5 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:gap-16">
                                {/* Number */}
                                <div className="mb-2 md:mb-0 md:w-16">
                                    <span className="font-mono text-sm text-[#293133]/40">0{value.id}</span>
                                </div>

                                {/* Title */}
                                <div className="mb-3 md:mb-0 md:w-64">
                                    <h3 className="font-serif text-3xl md:text-4xl text-[#293133]">
                                        {value.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="flex-1">
                                    <p className="font-inter text-[#293133]/70 leading-relaxed text-base md:text-lg max-w-2xl">
                                        {value.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

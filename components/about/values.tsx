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
        <section className="py-24 px-6 md:px-12 bg-grainy-beige">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Consistent with other pages */}
                <div className="border-b border-[#293133]/10 pb-8 mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        Our Values
                    </h2>
                </div>

                {/* Values - Full Width Cards with Accent Bar */}
                <div className="space-y-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-[#F3F0E5] border border-[#293133]/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center">
                                {/* Left Accent Bar */}
                                <div className="hidden md:block w-2 self-stretch bg-[#26538D] group-hover:w-3 transition-all duration-300" />

                                {/* Content */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    {/* Title */}
                                    <h3 className="font-serif font-bold text-3xl md:text-4xl text-[#293133] group-hover:text-[#26538D] transition-colors">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-sans text-[#293133]/70 leading-relaxed md:max-w-lg md:text-right">
                                        {value.text}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Accent Bar */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-2 bg-[#26538D]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

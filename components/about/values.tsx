"use client"

import { motion } from "framer-motion"
import { Target, Heart, TrendingUp, Users } from "lucide-react"

const values = [
    {
        id: 1,
        title: "Excellence",
        text: "We do not accept mediocrity. In our facility or in our own work. Every detail matters.",
        icon: Target,
        gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
        id: 2,
        title: "Honesty",
        text: "We tell you the truth. Even when it is uncomfortable. Especially when it is uncomfortable.",
        icon: Heart,
        gradient: "from-red-500/10 to-red-600/5"
    },
    {
        id: 3,
        title: "Longevity",
        text: "We play the long game. Health is not a 6-week challenge. It is a lifetime pursuit.",
        icon: TrendingUp,
        gradient: "from-green-500/10 to-green-600/5"
    },
    {
        id: 4,
        title: "Respect",
        text: "We respect the process. We respect the science. We respect each other.",
        icon: Users,
        gradient: "from-purple-500/10 to-purple-600/5"
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

                {/* Values - Bento Grid Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm border border-[#293133]/10 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#293133] rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#293133]/5 border border-[#293133]/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#293133] mb-4 group-hover:text-primary transition-colors duration-300">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-inter text-[#293133]/70 leading-relaxed text-base md:text-lg flex-1">
                                        {value.text}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="mt-6 h-1 w-16 bg-primary/20 rounded-full group-hover:w-24 group-hover:bg-primary/40 transition-all duration-300" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

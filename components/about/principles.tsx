"use client"

import { motion } from "framer-motion"

const principles = [
    {
        id: 1,
        number: "01",
        title: "Radical Transparency",
        text: "We share everything. Our methods. Your data. No black boxes."
    },
    {
        id: 2,
        number: "02",
        title: "Data Over Opinion",
        text: "We don't care what influencers say. We care what your bloodwork says."
    },
    {
        id: 3,
        number: "03",
        title: "Service First",
        text: "You are not a membership number. You are a client we serve."
    },
    {
        id: 4,
        number: "04",
        title: "Continuous Education",
        text: "Our coaches study weekly. If we are not learning, we are failing. The science evolves, and so do we."
    }
]

export function PrinciplesSection() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-4 md:px-12 bg-grainy-beige overflow-hidden">
            <div className="w-full max-w-[1600px] h-full flex flex-col justify-center">

                {/* Section Header */}
                <div className="mb-12 md:mb-16 border-b border-[#293133]/10 pb-8">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        Our Principles
                    </h2>
                </div>

                {/* BENTO GRID - 3 on top, 1 full width below */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)] md:min-h-[60vh]">

                    {/* 1. RADICAL TRANSPARENCY (Top Left - Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-5 bg-[#F3F0E5] p-8 md:p-12 relative flex flex-col justify-between border border-[#293133]/10 rounded-2xl overflow-hidden"
                    >
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">{principles[0].number}</span>
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-3xl md:text-5xl text-[#293133] mb-4 uppercase tracking-tight">
                                {principles[0].title.split(' ')[0]}<br />{principles[0].title.split(' ')[1]}
                            </h3>
                            <p className="font-serif text-lg md:text-xl text-[#293133]/70 max-w-md">
                                {principles[0].text}
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. DATA OVER OPINION (Top Middle) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-4 bg-[#F3F0E5] p-8 md:p-12 border border-[#293133]/10 flex flex-col justify-between rounded-2xl overflow-hidden"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">{principles[1].number}</span>
                        <div>
                            <h3 className="font-serif font-bold text-2xl md:text-4xl text-[#293133] mb-4 uppercase tracking-tight">
                                {principles[1].title.split(' ').slice(0, 2).join(' ')}<br />{principles[1].title.split(' ')[2]}
                            </h3>
                            <p className="font-inter text-sm md:text-base text-[#293133]/70">
                                {principles[1].text}
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. SERVICE FIRST (Top Right - Compact) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-3 bg-transparent border border-[#293133]/20 flex flex-col justify-between p-8 md:p-12 rounded-2xl overflow-hidden"
                    >
                        <div className="w-full text-left">
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">{principles[2].number}</span>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#293133] mb-2 uppercase tracking-tight">
                                {principles[2].title.split(' ')[0]}<br />{principles[2].title.split(' ')[1]}
                            </h3>
                            <p className="font-mono text-xs md:text-sm opacity-60">
                                {principles[2].text}
                            </p>
                        </div>
                    </motion.div>

                    {/* 4. CONTINUOUS EDUCATION (Full Width - Dark) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-12 bg-[#293133] p-8 md:p-12 text-[#F3F0E5] flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl overflow-hidden"
                    >
                        <div className="flex items-start gap-8">
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">{principles[3].number}</span>
                            <div>
                                <h3 className="font-serif font-bold text-3xl md:text-5xl mb-4 uppercase tracking-tight">
                                    {principles[3].title}
                                </h3>
                            </div>
                        </div>
                        <p className="font-serif text-lg md:text-xl opacity-80 max-w-lg mt-4 md:mt-0 md:text-right">
                            {principles[3].text}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

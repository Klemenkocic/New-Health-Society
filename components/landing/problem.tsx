"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function ProblemSection() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-4 md:px-12 overflow-hidden">
            <div className="w-full max-w-[1600px] h-full flex flex-col justify-center">

                {/* Header for Context */}
                <div className="mb-12 md:mb-16 border-b border-[#293133]/10 pb-8">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        We Provide
                    </h2>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)] md:h-[70vh]">

                    {/* 1. SYSTEMS (Top Left - Large Text) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-7 bg-[#F3F0E5] p-8 md:p-12 relative flex flex-col justify-between border border-[#293133]/10 rounded-2xl overflow-hidden"
                    >
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">01</span>
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-4xl md:text-6xl text-[#293133] mb-4 uppercase tracking-tight">
                                SYSTEMS
                            </h3>
                            <p className="font-serif text-xl md:text-2xl text-[#293133]/70 max-w-md">
                                Structured training plan for your needs.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. PROGRESS (Top Right - Image Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-5 relative group bg-[#293133] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={`${basePath}/images/gym/NHS Website-39.jpg`}
                            alt="Gym Atmosphere"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                            <span className="font-mono text-xs uppercase tracking-widest text-[#F3F0E5] opacity-80">02</span>
                            <div>
                                <h3 className="font-serif font-bold text-4xl md:text-6xl text-[#F3F0E5] mb-4 uppercase tracking-tight">
                                    PROGRESS
                                </h3>
                                <p className="font-serif text-lg md:text-xl text-[#F3F0E5]/80">
                                    Continuous measurement to track improvements.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. ACCOUNTABILITY (Bottom Left - Text Focus) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-4 bg-[#F3F0E5] p-8 md:p-12 border border-[#293133]/10 flex flex-col justify-between rounded-2xl overflow-hidden"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">03</span>
                        <div>
                            <h3 className="font-serif font-bold text-2xl md:text-4xl text-[#293133] mb-4 uppercase tracking-tight break-words">
                                ACCOUNTABILITY
                            </h3>
                            <p className="font-inter text-sm md:text-base text-[#293133]/70">
                                Dedicated coaches keeping you on track.
                            </p>
                        </div>
                    </motion.div>

                    {/* 4. TIME (Bottom Middle - Compact Box) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-3 bg-transparent border border-[#293133]/20 flex flex-col justify-between p-8 md:p-12 rounded-2xl overflow-hidden"
                    >
                        <div className="w-full text-left">
                            <span className="font-mono text-xs uppercase tracking-widest opacity-60">04</span>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <h3 className="font-serif font-bold text-3xl md:text-4xl text-[#293133] mb-2 uppercase tracking-tight">
                                TIME
                            </h3>
                            <p className="font-mono text-xs md:text-sm opacity-60">
                                It takes much less than you think.
                            </p>
                        </div>
                    </motion.div>

                    {/* 5. PURPOSE (Bottom Right - Dark Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-5 bg-[#293133] p-8 md:p-12 text-[#F3F0E5] flex flex-col justify-between rounded-2xl overflow-hidden"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">05</span>
                        <div>
                            <h3 className="font-serif font-bold text-3xl md:text-5xl mb-4 uppercase tracking-tight">
                                PURPOSE
                            </h3>
                            <p className="font-serif text-lg md:text-xl opacity-80 decoration-slice">
                                Habits based on your goal.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

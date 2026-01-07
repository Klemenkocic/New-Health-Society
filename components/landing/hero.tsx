"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full bg-[#F3F0E5] flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content */}
                <div className="col-span-1 lg:col-span-6 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-8">
                            NEW HEALTH <br />
                            <span className="font-serif italic font-light text-6xl md:text-8xl lg:text-9xl text-primary">Society</span>
                        </h1>

                        <div className="w-16 h-1 bg-primary mb-8 ml-1"></div>

                        <p className="font-sans text-foreground/80 text-lg md:text-xl max-w-md leading-relaxed mb-10 ml-1">
                            Use science to build your body. <br />
                            <span className="text-primary font-medium">3 hours/week. Measurable results.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 ml-1">
                            <Link href="/consultation">
                                <Button className="rounded-full px-8 py-6 text-sm uppercase tracking-widest bg-primary hover:bg-primary-dark shadow-sm hover:shadow-md transition-all">
                                    Start Your Journey
                                </Button>
                            </Link>
                            <Link href="/concept">
                                <Button variant="outline" className="rounded-full px-8 py-6 text-sm uppercase tracking-widest border-primary text-primary hover:bg-primary/5">
                                    Our Method
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image - Arch Mask */}
                <div className="col-span-1 lg:col-span-6 relative flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-md md:max-w-lg aspect-[3/4]"
                    >
                        {/* The Arch Mask Container */}
                        <div className="absolute inset-0 bg-neutral-200 rounded-t-[200px] shadow-2xl overflow-hidden">
                            {/* Placeholder for actual image */}
                            <div className="w-full h-full bg-neutral-300 relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-mono text-xs z-10">
                                    [Hero Image: Athlete/Professional]
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Floating Badge (Rotating) - Optional "Omnia" vibe element */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex items-center justify-center shadow-lg z-20 hidden md:flex"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="text-[10px] font-mono text-primary uppercase tracking-widest text-center leading-relaxed">
                                Science <br /> Based <br /> Training
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor - Subtle blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
        </section>
    )
}

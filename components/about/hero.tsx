"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutHero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full bg-[#F3F0E5] flex items-end pb-12 px-6 md:px-12">
            {/* Background Video or Image would be absolute inset-0 z-0 */}

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

                {/* Bottom Left: Title */}
                <div className="col-span-1 md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="text-sm font-medium text-primary tracking-wide mb-2">THE STORY</div>
                        <h1 className="font-serif font-extrabold text-[12vw] md:text-[8rem] leading-[0.9] text-foreground origin-bottom-left mb-6">
                            ABOUT US
                        </h1>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed max-w-md">
                            We built the place we wanted to train in.
                            Uncompromising standards.
                            Clinical precision.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Right: CTA & Video Preview */}
                <div className="col-span-1 md:col-span-4 flex flex-col items-start md:items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full aspect-video bg-neutral-200 rounded-sm overflow-hidden relative group cursor-pointer"
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-neutral-500 font-mono text-xs">
                            [About Us Video]
                        </span>
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </motion.div>

                    <div className="flex flex-col gap-4 w-full">
                        <Link href="/consultation">
                            <Button size="lg" className="w-full px-8 text-lg h-14">
                                Book Consultation
                            </Button>
                        </Link>
                        <Button variant="ghost" className="w-full hover:bg-neutral-200 h-14">
                            View Open Positions
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

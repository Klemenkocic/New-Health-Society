"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function ConceptHero() {
    return (
        <section className="relative min-h-screen w-full bg-grainy-beige px-6 md:px-12 pt-32 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[800px]">

                {/* Left Column: Content */}
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-xl md:text-2xl font-serif italic text-neutral-500 mb-6">The Method</div>
                        <h1 className="font-serif font-bold text-6xl md:text-8xl leading-[0.9] text-[#293133] mb-8">
                            Concept
                        </h1>

                        <p className="font-inter text-[#293133]/80 text-lg leading-relaxed max-w-md mb-12">
                            A holistic approach to human performance, integrating training, nutrition, and recovery.
                        </p>

                        <Link href="/consultation">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 text-lg h-14 rounded-full border-[#293133]/20 hover:bg-[#293133]/5 text-[#293133]"
                            >
                                Book Initial Consultation
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Video Card */}
                <div className="col-span-1 lg:col-span-7 relative h-full flex items-center justify-end order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="relative w-full aspect-[3/4] md:w-[80%] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={`${basePath}/images/gym/NHS Website-35.jpg`}
                            className="w-full h-full object-cover"
                        >
                            <source src={`${basePath}/videos/concept-hero.mp4`} type="video/mp4" />
                            <img
                                src={`${basePath}/images/gym/NHS Website-35.jpg`}
                                alt="Background"
                                className="w-full h-full object-cover"
                            />
                        </video>
                        {/* Optional overlay for better contrast if needed, but per request just rounded video */}
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

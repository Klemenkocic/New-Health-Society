"use client"

import { useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { basePath } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { IntroAnimation } from "@/components/landing/intro-animation"

const heroImages = [
    `${basePath}/images/gym/NHS Website-14.jpg`,
    `${basePath}/images/gym/NHS Website-25.jpg`,
    `${basePath}/images/gym/NHS Website-35.jpg`,
]

export function Hero({ onIntroComplete, skipIntro = false }: { onIntroComplete?: () => void, skipIntro?: boolean }) {
    const [introComplete, setIntroComplete] = useState(skipIntro)
    const { scrollY } = useScroll()

    // Parallax effect for the right column images
    const y1 = useTransform(scrollY, [0, 1000], [0, -150])
    const y2 = useTransform(scrollY, [0, 1000], [0, -300])

    const handleIntroComplete = () => {
        setIntroComplete(true)
        onIntroComplete?.()
    }

    return (
        <section className="relative min-h-screen w-full text-[#293133] overflow-hidden" style={{ backgroundColor: introComplete ? '#F3F0E5' : '#000000' }}>
            {/* Intro Animation Overlay */}
            <AnimatePresence>
                {!introComplete && (
                    <IntroAnimation onComplete={handleIntroComplete} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: introComplete ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-[1920px] mx-auto px-6 md:px-12 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 min-h-screen"
            >

                {/* Left Column: Fixed Content */}
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full relative z-10">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-serif italic text-3xl md:text-5xl mb-8 leading-tight"
                        >
                            PERSONAL TRAINING
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: introComplete ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-sans text-lg md:text-xl max-w-sm leading-relaxed opacity-80 mb-12"
                        >
                            We meet you where you are — and help you get where you want to go.
                        </motion.p>


                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: introComplete ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link href="/consultation">
                                <Button variant="glass" className="px-10 py-7 text-sm uppercase tracking-widest">
                                    Start Your Journey
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bottom of Left Column: The "Landing" spot for the large text */}
                    <div className="mt-24 lg:mt-auto pt-12 relative z-20">
                        <div className="lg:absolute lg:bottom-12 lg:left-12 lg:w-full pointer-events-none flex flex-col items-start gap-[1vw] leading-[0.8] text-[10.8vw] tracking-tighter" style={{ fontFamily: 'var(--font-brand)' }}>
                            {/* Only render these when intro is complete to trigger the layoutId transition from IntroAnimation */}
                            {introComplete && (
                                <>
                                    <motion.div layoutId="word-new-wrapper" transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}>
                                        <span className="font-bold text-[10.8vw] tracking-tighter text-[#26538D]" style={{ fontFamily: 'var(--font-brand)' }}>
                                            NEW
                                        </span>
                                    </motion.div>
                                    <motion.div layoutId="word-health-wrapper" transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}>
                                        <span className="font-bold text-[10.8vw] tracking-tighter text-[#26538D]" style={{ fontFamily: 'var(--font-brand)' }}>
                                            HEALTH
                                        </span>
                                    </motion.div>
                                    <motion.div layoutId="word-society-wrapper" transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}>
                                        <span className="font-bold text-[10.8vw] tracking-tighter text-[#26538D]" style={{ fontFamily: 'var(--font-brand)' }}>
                                            SOCIETY
                                        </span>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Parallax Images */}
                <div className="col-span-1 lg:col-span-7 relative h-[60vh] lg:h-auto min-h-[800px]">
                    {/* Image 1: Background / Base */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{
                            opacity: introComplete ? 1 : 0,
                            y: introComplete ? 0 : 20,
                            scale: introComplete ? 1 : 0.98
                        }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0 }}
                        className="absolute top-0 right-0 w-[80%] aspect-[3/4] overflow-hidden rounded-sm"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={heroImages[0]}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        >
                            <source src={`${basePath}/videos/home-hero.mp4`} type="video/mp4" />
                            <img
                                src={heroImages[0]}
                                alt="NHS Studio"
                                className="w-full h-full object-cover"
                            />
                        </video>
                    </motion.div>

                    {/* Image 2: Overlay / Faster Parallax */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{
                            opacity: introComplete ? 1 : 0,
                            y: introComplete ? 0 : 40,
                            scale: introComplete ? 1 : 0.95
                        }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 1.3 }}
                        className="absolute bottom-24 left-0 w-[50%] aspect-[4/5] overflow-hidden rounded-sm shadow-2xl z-20"
                    >
                        <Image
                            src={heroImages[1]}
                            alt="NHS Training"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Marquee at the very bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: introComplete ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 z-30 border-t border-[#293133]/10 bg-[#F3F0E5]"
            >
                <Marquee className="py-4 opacity-60 mix-blend-darken" repeat={4}>
                    <span className="mx-8 font-mono text-xs uppercase tracking-[0.2em]">• Science Based Training</span>
                    <span className="mx-8 font-mono text-xs uppercase tracking-[0.2em]">• Clinical Precision</span>
                    <span className="mx-8 font-mono text-xs uppercase tracking-[0.2em]">• Measurable Results</span>
                    <span className="mx-8 font-mono text-xs uppercase tracking-[0.2em]">• Private Atmosphere</span>
                </Marquee>
            </motion.div>
        </section>
    )
}

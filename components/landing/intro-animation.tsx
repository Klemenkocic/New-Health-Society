"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export function IntroAnimation({ onComplete }: { onComplete?: () => void }) {
    useEffect(() => {
        // Hold the intro for a moment, then trigger the distinct layout transition
        const timer = setTimeout(() => {
            if (onComplete) onComplete()
        }, 1500)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
            {/* Background Layer - Fades out independently */}
            <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
            />

            {/* Content Layer - Does NOT fade out, just moves via layoutId */}
            <div className="relative z-10 flex flex-col items-center justify-center leading-[0.8]">
                <motion.div layoutId="word-new-wrapper" transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
                    <span className="font-serif font-bold text-[6vw] tracking-tighter text-[#26538D]">
                        NEW
                    </span>
                </motion.div>
                <motion.div layoutId="word-health-wrapper" transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
                    <span className="font-serif font-bold text-[6vw] tracking-tighter text-[#26538D]">
                        HEALTH
                    </span>
                </motion.div>
                <motion.div layoutId="word-society-wrapper" transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
                    <span className="font-serif font-bold text-[6vw] tracking-tighter text-[#26538D]">
                        SOCIETY
                    </span>
                </motion.div>
            </div>
        </div>
    )
}

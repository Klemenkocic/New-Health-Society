"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollLogo() {
    const { scrollY } = useScroll()

    // Size
    const scale = useTransform(scrollY, [0, 400], [1, 0.18])

    // Position:
    // Start: Bottom Left.
    // We use `bottom/left` in CSS, but `framer-motion` transform animation is smoother on Top/Left props or Translatem.
    // Current Issue: User reported it at TOP. `top: 80vh` should be at bottom. 
    // If useScroll() init value flakiness?
    // Let's use `calc(100vh - 200px)` style logic.
    // And try increasing the range slightly?
    const top = useTransform(scrollY, [0, 400], ["70vh", "28px"])
    const left = useTransform(scrollY, [0, 400], ["6%", "50%"])
    const x = useTransform(scrollY, [0, 400], ["0%", "-50%"])

    // Layout Logic:
    // "NEW HEALTH SOCIETY".
    // "SOCIETY" needs to be Left Aligned to "NEW HEALTH" (Start of line).
    // "NEW HEALTH " is approximately 5.8em wide in Playfair Display Bold?
    // Let's increase the negative shift to ensure left alignment.
    // We'll set it to -6.8em as a stronger push.
    const span2X = useTransform(scrollY, [0, 400], ["-6.9em", "0em"])
    const span2Y = useTransform(scrollY, [0, 400], ["0.9em", "0em"])

    return (
        <motion.div
            style={{ top, left, x }}
            className="fixed z-[60] whitespace-nowrap pointer-events-none origin-top-left md:origin-top"
        >
            <motion.h1
                style={{ scale }}
                className="font-serif font-extrabold text-[10vw] md:text-[7rem] leading-[0.9] text-foreground origin-top-left md:origin-top flex items-baseline"
            >
                <span>NEW HEALTH</span>
                <motion.span
                    style={{ x: span2X, y: span2Y }}
                    className="inline-block ml-[0.3em]"
                >
                    SOCIETY
                </motion.span>
            </motion.h1>
        </motion.div>
    )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100 && !hasScrolled) {
            setHasScrolled(true)
        }
    })

    return (
        <motion.nav
            animate={{
                backgroundColor: hasScrolled ? "rgba(243, 240, 229, 0.95)" : "rgba(243, 240, 229, 0)",
                borderColor: hasScrolled ? "rgba(41, 49, 51, 0.05)" : "rgba(41, 49, 51, 0)"
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-[2px] border-b"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Links */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: hasScrolled ? 0.2 : 0 }}
                    className="flex items-center gap-8"
                >
                    <Link
                        href="/about"
                        className="text-foreground/90 hover:text-primary font-semibold text-sm tracking-wide transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/concept"
                        className="text-foreground/90 hover:text-primary font-semibold text-sm tracking-wide transition-colors"
                    >
                        Concept
                    </Link>
                </motion.div>

                {/* Center Logo Area - Kept empty for spacing/structure, logo is external */}
                <div className="w-24"></div>

                {/* Right CTA */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: hasScrolled ? 0.2 : 0 }}
                >
                    <Link href="/consultation">
                        <Button>
                            Book Initial Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    )
}

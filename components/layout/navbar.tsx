"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navbar() {
    const { scrollY } = useScroll()
    const pathname = usePathname()
    const [hasScrolled, setHasScrolled] = useState(false)
    const [hasSeenNavbar, setHasSeenNavbar] = useState(true) // Default to true (visible)

    useEffect(() => {
        // Check if user has seen navbar before
        const navbarSeen = localStorage.getItem("navbarSeen")

        // Only hide navbar on homepage AND if user hasn't seen it before
        if (pathname === "/" && !navbarSeen) {
            setHasSeenNavbar(false)
        } else {
            setHasSeenNavbar(true)
        }
    }, [pathname])

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100 && !hasScrolled) {
            setHasScrolled(true)
            // Mark that user has now seen the navbar
            localStorage.setItem("navbarSeen", "true")
            setHasSeenNavbar(true)
        }
    })

    // If on homepage and user hasn't seen navbar, show/hide based on scroll
    // Otherwise, always show navbar
    const shouldShowNavbar = hasSeenNavbar || hasScrolled

    return (
        <motion.nav
            animate={{
                backgroundColor: shouldShowNavbar ? "rgba(243, 240, 229, 0.95)" : "rgba(243, 240, 229, 0)",
                borderColor: shouldShowNavbar ? "rgba(41, 49, 51, 0.05)" : "rgba(41, 49, 51, 0)"
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-[2px] border-b"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Links */}
                <motion.div
                    initial={{ opacity: hasSeenNavbar ? 1 : 0, y: hasSeenNavbar ? 0 : -10 }}
                    animate={{ opacity: shouldShowNavbar ? 1 : 0, y: shouldShowNavbar ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: shouldShowNavbar ? 0.2 : 0 }}
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
                    <Link
                        href="/braverman"
                        className="text-foreground/90 hover:text-primary font-semibold text-sm tracking-wide transition-colors"
                    >
                        Braverman Test
                    </Link>
                </motion.div>

                {/* Center Logo */}
                <motion.div
                    initial={{ opacity: hasSeenNavbar ? 1 : 0 }}
                    animate={{ opacity: shouldShowNavbar ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: shouldShowNavbar ? 0.2 : 0 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <Link href="/" className="text-xl font-serif font-bold tracking-tight">
                        NHS
                    </Link>
                </motion.div>

                {/* Right CTA */}
                <motion.div
                    initial={{ opacity: hasSeenNavbar ? 1 : 0, y: hasSeenNavbar ? 0 : -10 }}
                    animate={{ opacity: shouldShowNavbar ? 1 : 0, y: shouldShowNavbar ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: shouldShowNavbar ? 0.2 : 0 }}
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

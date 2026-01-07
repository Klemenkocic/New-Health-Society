"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
                backgroundColor: shouldShowNavbar ? "rgba(243, 240, 229, 0.85)" : "rgba(243, 240, 229, 0)",
                borderColor: shouldShowNavbar ? "rgba(41, 49, 51, 0.05)" : "rgba(41, 49, 51, 0)",
                backdropFilter: shouldShowNavbar ? "blur(12px)" : "blur(0px)",
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 border-b border-transparent"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Links */}
                <motion.div
                    initial={{ opacity: hasSeenNavbar ? 1 : 0, y: hasSeenNavbar ? 0 : -10 }}
                    animate={{ opacity: shouldShowNavbar ? 1 : 0, y: shouldShowNavbar ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: shouldShowNavbar ? 0.2 : 0 }}
                    className="flex items-center gap-10"
                >
                    <Link
                        href="/about"
                        className="text-foreground/80 hover:text-primary font-medium text-xs uppercase tracking-[0.2em] transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/concept"
                        className="text-foreground/80 hover:text-primary font-medium text-xs uppercase tracking-[0.2em] transition-colors"
                    >
                        Concept
                    </Link>
                    <Link
                        href="/braverman"
                        className="text-foreground/80 hover:text-primary font-medium text-xs uppercase tracking-[0.2em] transition-colors"
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
                    <Link href="/" className="relative block w-24 h-8 md:w-32 md:h-10">
                        <Image
                            src="/images/nhs-brandmark.svg"
                            alt="NHS Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Right CTA */}
                <motion.div
                    initial={{ opacity: hasSeenNavbar ? 1 : 0, y: hasSeenNavbar ? 0 : -10 }}
                    animate={{ opacity: shouldShowNavbar ? 1 : 0, y: shouldShowNavbar ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: shouldShowNavbar ? 0.2 : 0 }}
                >
                    <Link href="/consultation">
                        <Button className="rounded-full px-8 bg-primary hover:bg-primary-dark text-white font-medium text-xs uppercase tracking-wider">
                            Book Intake
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    )
}

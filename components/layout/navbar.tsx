"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { basePath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navbar() {
    const { scrollY } = useScroll()
    const pathname = usePathname()
    // Simplified Navbar: Always visible, always sticky/glassy
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 text-[#293133]"
        >
            <div className="max-w-[1920px] mx-auto flex items-start justify-between">
                {/* Left: Brand / Home Link */}
                <Link href="/" className="group flex flex-col items-start gap-1">
                    <Image
                        src={`${basePath}/images/nhs-brandmark.svg`}
                        alt="New Health Society"
                        width={180}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Center: Navigation (Desktop) */}
                <div className="hidden md:flex gap-8 items-center bg-[#F3F0E5]/40 backdrop-blur-md px-6 py-2 rounded-2xl border border-[#293133]/10 shadow-sm">
                    <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
                    <Link href="/concept" className="text-sm font-medium hover:opacity-70 transition-opacity">Concept</Link>
                    <Link href="/braverman" className="text-sm font-medium hover:opacity-70 transition-opacity">Test</Link>
                </div>

                {/* Right: CTA / Menu */}
                <div className="flex items-center gap-4">
                    <Link href="/consultation" className="hidden md:block">
                        <span className="text-sm font-medium uppercase tracking-widest hover:underline underline-offset-4 decoration-1">Book Intake</span>
                    </Link>
                    {/* Mobile Menu Trigger Placeholder */}
                    <button className="md:hidden uppercase text-sm font-medium tracking-widest">Menu</button>
                </div>
            </div>
        </motion.nav>
    )
}

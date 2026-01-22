"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { basePath } from "@/lib/utils"

export function Navbar({ show = true }: { show?: boolean }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: show ? 0.3 : 0 }}
            className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 text-[#293133]"
        >
            <div className="max-w-[1920px] mx-auto flex items-center justify-between">
                {/* Left: Brand / Home Link */}
                <div className="flex justify-start">
                    <Link href="/" className="group flex flex-col items-start gap-1">
                        <Image
                            src={`${basePath}/images/nhs-brandmark.svg`}
                            alt="New Health Society"
                            width={180}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Center: Navigation (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div className="flex gap-8 items-center bg-[#F3F0E5]/40 backdrop-blur-md px-6 py-2 rounded-2xl border border-[#293133]/10 shadow-sm">
                        <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
                        <Link href="/concept" className="text-sm font-medium hover:opacity-70 transition-opacity">Concept</Link>
                        <Link href="/braverman" className="text-sm font-medium hover:opacity-70 transition-opacity">Test</Link>
                    </div>
                </div>

                {/* Right: CTA / Menu */}
                <div className="flex items-center justify-end gap-4">
                    <Link href="/consultation" className="hidden md:block">
                        <span className="text-xs font-medium uppercase tracking-wider hover:underline underline-offset-4 decoration-1">Book Consultation</span>
                    </Link>
                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden uppercase text-sm font-medium tracking-widest hover:opacity-70 transition-opacity"
                    >
                        Menu
                    </button>
                </div>
            </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#F3F0E5] z-[70] md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-[#293133]/10">
                                <span className="font-serif text-2xl text-[#293133]">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 hover:bg-[#293133]/5 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-[#293133]" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 p-6">
                                <div className="flex flex-col gap-6">
                                    <Link
                                        href="/"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-[#293133] hover:opacity-70 transition-opacity py-2"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-[#293133] hover:opacity-70 transition-opacity py-2"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/concept"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-[#293133] hover:opacity-70 transition-opacity py-2"
                                    >
                                        Concept
                                    </Link>
                                    <Link
                                        href="/braverman"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-[#293133] hover:opacity-70 transition-opacity py-2"
                                    >
                                        Test
                                    </Link>

                                    <div className="border-t border-[#293133]/10 pt-6 mt-4">
                                        <Link
                                            href="/consultation"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block w-full bg-[#26538D] text-white text-center py-4 px-6 rounded-lg font-medium hover:bg-[#1E4270] transition-colors"
                                        >
                                            Book Consultation
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        </>
    )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc: string
    imageAlt: string
    title?: string
    description?: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title, description }: ImageModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }
        window.addEventListener("keydown", handleEscape)
        return () => window.removeEventListener("keydown", handleEscape)
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Glassmorphism backdrop */}
                    <div className="absolute inset-0 bg-[#293133]/90 backdrop-blur-xl" />

                    {/* Modal content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-[#F3F0E5]/60 hover:text-[#F3F0E5] transition-colors z-20"
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Image container with glassmorphism */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                            </div>

                            {/* Text content (if provided) */}
                            {(title || description) && (
                                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                                    {title && (
                                        <h3 className="font-serif text-2xl md:text-3xl text-[#F3F0E5] mb-3">
                                            {title}
                                        </h3>
                                    )}
                                    {description && (
                                        <p className="font-inter text-base md:text-lg text-[#F3F0E5]/80 leading-relaxed">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Swipe hint for mobile */}
                        <p className="mt-4 text-center text-[#F3F0E5]/40 text-sm font-mono uppercase tracking-widest md:hidden">
                            Tap anywhere to close
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

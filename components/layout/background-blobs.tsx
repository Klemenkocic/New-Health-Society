"use client"

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// ===========================================
// CONFIGURATION
// Easily edit colors and settings here
// ===========================================

const COLORS = {
    // NHS Brand Colors converted to RGBA for gradients
    // Primary Blue: #26538D -> rgba(38, 83, 141, ...)
    // Accent Blue: #F0FFFF -> rgba(240, 255, 255, ...)
    // We use slightly varied opacities to create depth

    baseBackground: "#F3F0E5", // Brand Beige

    blob1: "rgba(38, 83, 141, 0.28)",   // Primary Blue (replaces Terracotta)
    blob2: "rgba(38, 83, 141, 0.30)",   // Primary Blue for upper left (was accent - now matches right side)
    blob3: "rgba(38, 83, 141, 0.24)",   // Primary Blue
    blob4: "rgba(176, 196, 222, 0.25)", // Light Steel/Blueish Gray (replaces Peach - complimentary to blue)
    blob5: "rgba(38, 83, 141, 0.21)",   // Primary Blue
    blob6: "rgba(240, 255, 255, 0.35)", // Accent Blue
}

const SETTINGS = {
    blurAmount: 55,
    parallaxStrength: 300,
    noiseOpacity: 0.035, // Slightly increased for texture visibility
}

// ===========================================
// HOOKS
// ===========================================

const breakpoints = {
    mobileL: 430,
    tablet: 768,
    desktop: 1280,
    desktopL: 1440,
}

const useBreakpoint = () => {
    // Default to desktop to avoid hydration mismatch on server, 
    // but useEffect will fix it on client
    const [width, setWidth] = useState(1280)

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth)
        // Set initial width
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    if (width < breakpoints.mobileL) return "mobile"
    if (width < breakpoints.tablet) return "mobileL"
    if (width < breakpoints.desktop) return "tablet"
    if (width < breakpoints.desktopL) return "desktop"
    return "desktopL"
}

// ===========================================
// COMPONENT
// ===========================================

export default function BackgroundBlobs() {
    const ref = useRef(null)
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === "mobile" || breakpoint === "mobileL"
    const isTablet = breakpoint === "tablet"

    // Parallax logic
    const { scrollYProgress } = useScroll()

    // We only enable parallax effects on non-mobile devices for performance
    const parallax = isMobile ? 0 : SETTINGS.parallaxStrength

    // Create transforms for each blob
    const blob1Y = useTransform(scrollYProgress, [0, 1], [0, parallax])
    const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -parallax * 0.85])
    const blob3Y = useTransform(scrollYProgress, [0, 1], [0, parallax * 0.7])
    const blob4Y = useTransform(scrollYProgress, [0, 1], [0, -parallax * 0.55])
    const blob5Y = useTransform(scrollYProgress, [0, 1], [0, parallax * 0.9])
    const blob6Y = useTransform(scrollYProgress, [0, 1], [0, -parallax * 0.75])

    // Responsive blob sizes helper
    const getSize = (desktopSizePx: number) => {
        if (isMobile) return `${desktopSizePx * 0.55}px` // Slightly larger on mobile than original 0.45
        if (isTablet) return `${desktopSizePx * 0.7}px`
        return `${desktopSizePx}px`
    }

    // Responsive blur
    const blur = isMobile ? SETTINGS.blurAmount * 0.4 : SETTINGS.blurAmount

    return (
        <div
            ref={ref}
            className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
            style={{
                background: COLORS.baseBackground,
            }}
        >
            {/* Blob 1 - Top Right - Primary Blue */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "-5%" : "-10%",
                    right: isMobile ? "5%" : "10%",
                    width: getSize(700),
                    height: getSize(700),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob1} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob1Y,
                }}
            />

            {/* Blob 2 - Top Left - Accent */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "-5%" : "-8%",
                    left: isMobile ? "-5%" : "-5%",
                    width: getSize(750),
                    height: getSize(750),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob2} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob2Y,
                }}
            />

            {/* Blob 3 - Center Right - Primary Blue */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "25%" : "22%",
                    right: isMobile ? "10%" : "5%",
                    width: getSize(550),
                    height: getSize(550),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob3} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob3Y,
                }}
            />

            {/* Blob 4 - Center Left - Light Blue */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "40%" : "38%",
                    left: isMobile ? "10%" : "8%",
                    width: getSize(600),
                    height: getSize(600),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob4} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob4Y,
                }}
            />

            {/* Blob 5 - Lower Right - Primary Blue */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "55%" : "52%",
                    right: isMobile ? "15%" : "12%",
                    width: getSize(480),
                    height: getSize(480),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob5} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob5Y,
                }}
            />

            {/* Blob 6 - Bottom Left - Accent */}
            <motion.div
                style={{
                    position: "absolute",
                    top: isMobile ? "70%" : "68%",
                    left: isMobile ? "8%" : "5%",
                    width: getSize(520),
                    height: getSize(520),
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.blob6} 0%, transparent 70%)`,
                    filter: `blur(${blur}px)`,
                    y: blob6Y,
                }}
            />

            {/* Noise texture overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: SETTINGS.noiseOpacity,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}

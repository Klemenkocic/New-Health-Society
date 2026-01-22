"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { basePath } from "@/lib/utils"

// ===========================================
// NHS APP FEATURES CAROUSEL
// ADAPTED FROM FRAMER COMPONENT
// ===========================================

const colors = {
    accent: "#26538D", // NHS Blue
    accentLight: "rgba(38, 83, 141, 0.08)",
    green: "#4A9D5B",
    greenLight: "rgba(74, 157, 91, 0.12)",
    background: "#F3F0E5", // NHS Background
    cardBg: "#FFFFFF",
    text1: "#293133", // NHS Foreground
    text2: "#626A6C",
    text3: "#8A9294",
    white: "#FFFFFF",
}

const premiumEase = [0.22, 0.03, 0.26, 1] as const

const breakpoints = {
    mobileL: 430,
    tablet: 768,
    desktop: 1280,
    desktopL: 1440,
}

const useBreakpoint = () => {
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
// CARD ILLUSTRATIONS (Abstracted App Views)
// ===========================================
// Note: These illustration components are currently unused but kept for potential future use

/* eslint-disable @typescript-eslint/no-unused-vars */
function HealthScoreIllustration() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(145deg, #FAF9F6 0%, #F5F3EE 100%)",
                borderRadius: "16px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <span style={{ fontSize: "14px", fontWeight: "600", color: colors.text1 }}>
                    Guten Tag, Paul
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: colors.accent }}>
                    NHS App
                </span>
            </div>

            {/* Score */}
            <div
                style={{
                    background: colors.white,
                    borderRadius: "12px",
                    padding: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
            >
                <div style={{ fontSize: "48px", fontWeight: "700", color: colors.text1 }}>
                    99
                </div>
                <div style={{ fontSize: "12px", color: colors.text2, marginTop: "4px" }}>
                    Health Score
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "3px", marginTop: "12px" }}>
                    {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.85].map((h, i) => (
                        <div
                            key={i}
                            style={{
                                width: "8px",
                                height: `${h * 24}px`,
                                background: colors.accent,
                                borderRadius: "2px",
                                opacity: 0.6 + i * 0.05,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Bio Age */}
            <div
                style={{
                    background: colors.white,
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
            >
                <div>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: colors.text1 }}>
                        21
                        <span style={{ fontSize: "14px", fontWeight: "400" }}> Jahre</span>
                    </div>
                    <div style={{ fontSize: "11px", color: colors.text2 }}>
                        Biologisches Alter
                    </div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "18px", fontWeight: "600", color: colors.green }}>
                        -2
                    </div>
                    <div style={{ fontSize: "10px", color: colors.text3 }}>
                        Jahre jünger
                    </div>
                </div>
            </div>
        </div>
    )
}

function BiomarkerIllustration() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(145deg, #FAF9F6 0%, #F5F3EE 100%)",
                borderRadius: "16px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "16px", fontWeight: "600", color: colors.text1 }}>
                    Vitamin D
                </span>
                <span
                    style={{
                        fontSize: "10px",
                        fontWeight: "600",
                        color: colors.accent,
                        background: colors.accentLight,
                        padding: "4px 8px",
                        borderRadius: "100px",
                    }}
                >
                    ESSENTIAL
                </span>
            </div>

            {/* Value */}
            <div
                style={{
                    background: colors.white,
                    borderRadius: "12px",
                    padding: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
            >
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "36px", fontWeight: "700", color: colors.text1 }}>
                        48
                    </span>
                    <span style={{ fontSize: "14px", color: colors.text2 }}>ng/mL</span>
                    <span
                        style={{
                            fontSize: "11px",
                            fontWeight: "600",
                            color: colors.green,
                            marginLeft: "auto",
                        }}
                    >
                        ↑ 12%
                    </span>
                </div>
                <div
                    style={{
                        fontSize: "11px",
                        fontWeight: "500",
                        color: colors.green,
                        marginTop: "8px",
                    }}
                >
                    IM REFERENZBEREICH
                </div>

                {/* Range Bar */}
                <div
                    style={{
                        marginTop: "12px",
                        height: "8px",
                        background: "#E8E6E1",
                        borderRadius: "4px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: "20%",
                            right: "20%",
                            height: "100%",
                            background: colors.green,
                            opacity: 0.3,
                            borderRadius: "4px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "55%",
                            width: "4px",
                            height: "100%",
                            background: colors.text1,
                            borderRadius: "2px",
                        }}
                    />
                </div>
            </div>

            {/* Info */}
            <div style={{ fontSize: "12px", color: colors.text2, lineHeight: 1.5 }}>
                Optimal für Immunfunktion und Knochengesundheit.
            </div>
        </div>
    )
}

function TrendsIllustration() {
    const points = [
        { x: 0, y: 60 },
        { x: 20, y: 45 },
        { x: 40, y: 55 },
        { x: 60, y: 35 },
        { x: 80, y: 40 },
        { x: 100, y: 25 },
    ]

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(145deg, #FAF9F6 0%, #F5F3EE 100%)",
                borderRadius: "16px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "16px", fontWeight: "600", color: colors.text1 }}>
                    Verlauf
                </span>
                <span style={{ fontSize: "11px", color: colors.text2 }}>
                    Letzte 6 Monate
                </span>
            </div>

            {/* Chart */}
            <div
                style={{
                    background: colors.white,
                    borderRadius: "12px",
                    padding: "16px",
                    flex: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    position: "relative",
                }}
            >
                <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 120 80"
                    style={{ overflow: "visible" }}
                >
                    {/* Grid lines */}
                    {[20, 40, 60].map((y) => (
                        <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="120"
                            y2={y}
                            stroke="#E8E6E1"
                            strokeWidth="1"
                        />
                    ))}

                    {/* Line */}
                    <polyline
                        points={points.map((p) => `${p.x * 1.1 + 5},${p.y}`).join(" ")}
                        fill="none"
                        stroke={colors.accent}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Dots */}
                    {points.map((p, i) => (
                        <circle
                            key={i}
                            cx={p.x * 1.1 + 5}
                            cy={p.y}
                            r="4"
                            fill={colors.white}
                            stroke={colors.accent}
                            strokeWidth="2"
                        />
                    ))}
                </svg>

                {/* Labels */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "8px",
                        fontSize: "10px",
                        color: colors.text3,
                    }}
                >
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Okt</span>
                    <span>Nov</span>
                    <span>Dez</span>
                    <span>Jan</span>
                </div>
            </div>
        </div>
    )
}

function TipsIllustration() {
    const tips = [
        { icon: "🥗", text: "Mehr grünes Blattgemüse" },
        { icon: "☀️", text: "15 Min. Sonnenlicht täglich" },
        { icon: "💤", text: "Schlafqualität optimieren" },
    ]

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(145deg, #FAF9F6 0%, #F5F3EE 100%)",
                borderRadius: "16px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
            }}
        >
            {/* Header */}
            <div>
                <span style={{ fontSize: "16px", fontWeight: "600", color: colors.text1 }}>
                    Deine Tipps
                </span>
                <div style={{ fontSize: "11px", color: colors.text2, marginTop: "4px" }}>
                    Basierend auf deinen Werten
                </div>
            </div>

            {/* Tips List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {tips.map((tip, i) => (
                    <div
                        key={i}
                        style={{
                            background: colors.white,
                            borderRadius: "10px",
                            padding: "12px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                    >
                        <span style={{ fontSize: "18px" }}>{tip.icon}</span>
                        <span style={{ fontSize: "13px", color: colors.text1, fontWeight: "500" }}>
                            {tip.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA hint */}
            <div
                style={{
                    fontSize: "11px",
                    color: colors.accent,
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "auto",
                }}
            >
                Alle Empfehlungen ansehen →
            </div>
        </div>
    )
}

// ===========================================
// CAROUSEL CARD
// ===========================================

interface CarouselCardProps {
    index: number
    activeIndex: number
    onClick: (index: number) => void
    image: string
    isMobile: boolean
}

function CarouselCard({ index, activeIndex, onClick, image, isMobile }: CarouselCardProps) {
    // Calculate position based on distance from active
    const totalCards = 4
    const distance = (index - activeIndex + totalCards) % totalCards

    // Position configs for 4 cards in stack
    const configs = [
        { x: 0, y: 0, scale: 1, rotate: 0, zIndex: 4, opacity: 1 }, // Front (active)
        { x: 70, y: -35, scale: 0.88, rotate: 8, zIndex: 3, opacity: 0.85 }, // Right 1
        { x: 120, y: -60, scale: 0.76, rotate: 14, zIndex: 2, opacity: 0.65 }, // Right 2
        { x: 95, y: -45, scale: 0.7, rotate: -8, zIndex: 1, opacity: 0.45 }, // Back left
    ]

    const config = configs[distance]
    const mobileScale = isMobile ? 0.65 : 1

    return (
        <motion.div
            onClick={() => onClick(index)}
            animate={{
                x: config.x * mobileScale,
                y: config.y * mobileScale,
                scale: config.scale,
                rotate: config.rotate,
                zIndex: config.zIndex,
                opacity: config.opacity,
            }}
            transition={{ duration: 0.6, ease: premiumEase }}
            style={{
                position: "absolute",
                left: isMobile ? "5%" : "10%",
                top: isMobile ? "5%" : "0%",
                width: isMobile ? "220px" : "280px",
                height: isMobile ? "440px" : "560px",
                cursor: "pointer",
                transformOrigin: "center center",
            }}
            whileHover={distance !== 0 ? { scale: config.scale * 1.02 } : {}}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: isMobile ? "24px" : "32px",
                    overflow: "hidden",
                    boxShadow: distance === 0
                        ? `0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 15px 30px -10px rgba(0, 0, 0, 0.15)`
                        : `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)`,
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "box-shadow 0.4s ease",
                    background: "#fff"
                }}
            >
                <Image
                    src={image}
                    alt={`App Feature ${index + 1}`}
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 768px) 220px, 280px"
                />
            </div>
        </motion.div>
    )
}

// ===========================================
// NAVIGATION DOTS
// ===========================================

function NavDots({ activeIndex, setActiveIndex, totalCards }: { activeIndex: number, setActiveIndex: (i: number) => void, totalCards: number }) {
    return (
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "24px" }}>
            {Array.from({ length: totalCards }).map((_, i) => (
                <motion.button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    animate={{
                        width: i === activeIndex ? "24px" : "8px",
                        backgroundColor: i === activeIndex ? colors.accent : "#D1D5D6",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        height: "8px",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                    }}
                />
            ))}
        </div>
    )
}
/* eslint-enable @typescript-eslint/no-unused-vars */

// ===========================================
// MAIN COMPONENT
// ===========================================

interface AppFeaturesCarouselProps {
    headingText?: string
    subheadingText?: string
    autoRotate?: boolean
    autoRotateDelay?: number
}

export function AppFeaturesCarousel({
    autoRotate = true,
    autoRotateDelay = 5,
}: AppFeaturesCarouselProps) {
    const breakpoint = useBreakpoint()
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const isMobile = breakpoint === "mobile" || breakpoint === "mobileL"
    const isTablet = breakpoint === "tablet"

    const cards = [
        {
            title: "Dein Health Score",
            description: "Ein Wert. Dein aktueller Stand. Berechnet aus all deinen Biomarkern – auf einen Blick erfassbar. Sieh sofort, wo du stehst und wie sich deine Gesundheit über Zeit entwickelt.",
            image: `${basePath}/images/App/app-calendar.png`,
        },
        {
            title: "Jeder Wert erklärt",
            description: "Was er bedeutet. Wo du stehst. Was optimal wäre. Keine Fachbegriffe ohne Kontext. Jeder Biomarker wird verständlich aufgeschlüsselt.",
            image: `${basePath}/images/App/app-calendar.png`,
        },
        {
            title: "Trends über Zeit",
            description: "Sieh, was sich bewegt. Nicht Momentaufnahmen – Entwicklung. Deine Biologie im Zeitverlauf. Erkenne Muster und optimiere gezielt.",
            image: `${basePath}/images/App/app-calendar.png`,
        },
        {
            title: "Von Werten zu Handlung",
            description: "Empfehlungen, die zu deinen Werten passen. Personalisierte Tipps für Ernährung, Bewegung und Lifestyle – basierend auf deiner individuellen Biologie.",
            image: `${basePath}/images/App/app-calendar.png`,
        },
    ]

    useEffect(() => {
        if (!autoRotate || isPaused || !isInView) return

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4)
        }, autoRotateDelay * 1000)

        return () => clearInterval(interval)
    }, [autoRotate, autoRotateDelay, isPaused, isInView])

    const handleCardClick = (index: number) => {
        setActiveIndex(index)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 10000)
    }

    return (
        <section
            ref={sectionRef}
            className="w-full bg-transparent overflow-hidden"
            style={{
                fontFamily: "'Inter', sans-serif",
                padding: isMobile ? "60px 20px" : isTablet ? "80px 40px" : "120px 60px",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                {/* Header */}
                <div className="w-full mb-12 md:mb-16 border-b border-[#293133]/10 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                        transition={{ duration: 1.0, ease: premiumEase }}
                        className="font-serif text-[#293133] text-5xl md:text-7xl"
                    >
                        Your Health In Your Pocket
                    </motion.h2>
                </div>

                {/* Main Content Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile || isTablet ? "1fr" : "0.9fr 1.1fr",
                        gap: isMobile ? "40px" : "48px",
                        alignItems: "center",
                    }}
                >
                    {/* Left: Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.0, delay: 0.2, ease: premiumEase }}
                        style={{ position: "relative", height: isMobile ? "480px" : "600px" }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {/* Glow */}
                        <div
                            style={{
                                position: "absolute",
                                left: "5%",
                                top: "10%",
                                width: isMobile ? "280px" : "420px",
                                height: isMobile ? "400px" : "600px",
                                background: `radial-gradient(ellipse at center, rgba(38, 83, 141, 0.15) 0%, rgba(38, 83, 141, 0.05) 40%, transparent 70%)`,
                                filter: "blur(40px)",
                                borderRadius: "50%",
                                zIndex: 0,
                            }}
                        />

                        {/* Cards */}
                        {cards.map((card, index) => (
                            <CarouselCard
                                key={index}
                                index={index}
                                activeIndex={activeIndex}
                                onClick={handleCardClick}
                                image={card.image}
                                isMobile={isMobile}
                            />
                        ))}

                        {/* Nav Dots (Mobile/Tablet only) */}
                        {(isMobile || isTablet) && (
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                                <NavDots activeIndex={activeIndex} setActiveIndex={handleCardClick} totalCards={4} />
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.0, delay: 0.3, ease: premiumEase }}
                        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                    >
                        {/* Active Card Content - Fixed Height Wrapper */}
                        <div className="min-h-[220px] flex flex-col justify-start">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: premiumEase }}
                                >
                                    <h3
                                        className="font-serif"
                                        style={{
                                            fontSize: isMobile ? "24px" : "32px",
                                            fontWeight: "600",
                                            color: colors.text1,
                                            margin: "0 0 16px 0",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {cards[activeIndex].title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: isMobile ? "15px" : "17px",
                                            color: colors.text2,
                                            margin: 0,
                                            lineHeight: 1.6,
                                            maxWidth: "400px",
                                        }}
                                    >
                                        {cards[activeIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Card Selector (Desktop) */}
                        {!isMobile && !isTablet && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {cards.map((card, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => handleCardClick(i)}
                                        animate={{
                                            backgroundColor: i === activeIndex ? colors.accentLight : "transparent",
                                            borderColor: i === activeIndex ? colors.accent : "rgba(0,0,0,0.08)",
                                        }}
                                        whileHover={{
                                            backgroundColor: i === activeIndex ? colors.accentLight : "rgba(0,0,0,0.03)",
                                        }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: "1px solid",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                backgroundColor: i === activeIndex ? colors.accent : colors.text3,
                                                transition: "all 0.3s ease",
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: i === activeIndex ? "600" : "500",
                                                color: i === activeIndex ? colors.text1 : colors.text2,
                                            }}
                                        >
                                            {card.title}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {/* Removed Bottom Progress Bars */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

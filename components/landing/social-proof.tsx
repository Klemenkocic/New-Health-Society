"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { useJsApiLoader } from "@react-google-maps/api"

const libraries: ("places")[] = ["places"]

const logos = [
    { name: "Aesop", src: "/images/clients/Aesop.png" },
    { name: "Atlantis", src: "/images/clients/Atlantis.png" },
    { name: "Autodoc", src: "/images/clients/Autodoc.png" },
    { name: "BMW", src: "/images/clients/Bmw.png" },
    { name: "Boehmler", src: "/images/clients/Boehmler.png" },
    { name: "Dyson", src: "/images/clients/Dyson.png" },
    { name: "Elfbau", src: "/images/clients/Elfbau.png" },
    { name: "HV", src: "/images/clients/HV.png" },
    { name: "Lului", src: "/images/clients/Lului.png" },
    { name: "Sky", src: "/images/clients/Sky.png" },
    { name: "VAseven", src: "/images/clients/VAseven.png" },
    { name: "Werkhaus", src: "/images/clients/Werkhaus.png" },
]

// Fallback reviews
const fallbackReviews = [
    {
        text: "I send my patients here because I trust the science. I train here because I see the results.",
        author_name: "Dr. Thomas M.",
        relative_time_description: "Orthopedic Surgeon",
        rating: 5
    },
    {
        text: "The only hour of my day where I don't have to think. I just execute. My energy levels are back to where they were at 25.",
        author_name: "Sarah K.",
        relative_time_description: "CEO",
        rating: 5
    },
    {
        text: "Precision is everything in my job. NHS applies that same precision to health.",
        author_name: "Michael R.",
        relative_time_description: "Architect",
        rating: 5
    },
    {
        text: "An absolute game changer for my triathlon preparation. The data-driven approach is unlike anything else.",
        author_name: "Jonas W.",
        relative_time_description: "Athlete",
        rating: 5
    },
    {
        text: "Finally a place that understands female physiology. I feel stronger and more balanced.",
        author_name: "Elena B.",
        relative_time_description: "Lawyer",
        rating: 5
    }
]

export function SocialProofSection() {
    const [allReviews, setAllReviews] = React.useState<any[]>(fallbackReviews)
    const [displayIndices, setDisplayIndices] = React.useState([0, 1, 2])
    const [nextReviewIdx, setNextReviewIdx] = React.useState(3)
    const [cycleStep, setCycleStep] = React.useState(0) // 0=Middle, 1=Left, 2=Right

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
        libraries: libraries
    })

    // Fetch Reviews
    React.useEffect(() => {
        if (!isLoaded || !window.google) return

        const fetchReviews = () => {
            const service = new window.google.maps.places.PlacesService(document.createElement("div"))

            const request = {
                query: "New Health Society Munich",
                fields: ["place_id", "name"]
            }

            service.findPlaceFromQuery(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results[0]) {
                    const placeId = results[0].place_id
                    if (!placeId) return;

                    const detailsRequest = {
                        placeId: placeId,
                        fields: ["reviews"]
                    }

                    service.getDetails(detailsRequest, (place, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
                            const sortedReviews = place.reviews
                                .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                                .slice(0, 10) // Get more reviews for cycling

                            // Merge with real reviews if enough, otherwise keep fallbacks mixed/used
                            if (sortedReviews.length >= 3) {
                                setAllReviews(sortedReviews)
                            }
                        }
                    })
                }
            })
        }

        fetchReviews()
    }, [isLoaded])

    // Animation Cycle Logic
    React.useEffect(() => {
        if (allReviews.length <= 3) return // No need to cycle if 3 or fewer reviews

        const interval = setInterval(() => {
            setDisplayIndices(prev => {
                const newIndices = [...prev]

                // Determine which slot to update based on user request: Middle -> Left -> Right
                // Slot indices: 0=Left, 1=Middle, 2=Right
                let slotToUpdate = 1 // Default Middle

                if (cycleStep === 1) slotToUpdate = 0 // Left
                if (cycleStep === 2) slotToUpdate = 2 // Right

                // Replace the review at this slot with the next available one
                newIndices[slotToUpdate] = nextReviewIdx
                return newIndices
            })

            // Advance pointers
            setNextReviewIdx(prev => (prev + 1) % allReviews.length)
            setCycleStep(prev => (prev + 1) % 3)

        }, 4000) // Change every 4 seconds

        return () => clearInterval(interval)
    }, [allReviews, nextReviewIdx, cycleStep])


    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-16 text-center">
                    TRUSTED BY
                </h2>

                {/* Animated Grid */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {displayIndices.map((reviewIndex, slotIndex) => {
                        const review = allReviews[reviewIndex] || allReviews[0]
                        return (
                            <div key={slotIndex} className="h-full min-h-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={review.text || reviewIndex} // Key triggers animation
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="h-full"
                                    >
                                        <div className="glass-card p-8 h-full flex flex-col justify-between hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                                            <div>
                                                <div className="flex gap-1 mb-4 text-primary">
                                                    {[...Array(review.rating || 5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="font-serif italic text-lg text-foreground mb-6 line-clamp-6">
                                                    "{review.text}"
                                                </p>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-foreground">{review.author_name || review.name}</div>
                                                <div className="text-xs text-foreground/60">{review.relative_time_description || "Member"}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile View (Simple Stack/Carousel Fallback) */}
                <div className="md:hidden flex flex-col gap-4">
                    {/* Just show top 3 on mobile stacked or simple overflow */}
                    {allReviews.slice(0, 3).map((review, i) => (
                        <div key={i} className="glass-card p-8">
                            <div className="flex gap-1 mb-4 text-primary">
                                {[...Array(review.rating || 5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="font-serif italic text-lg text-foreground mb-4">
                                "{review.text}"
                            </p>
                            <div className="font-bold text-sm text-foreground">{review.author_name || review.name}</div>
                        </div>
                    ))}
                </div>

                {/* Logos Carousel */}
                <div className="mt-24 pt-12 border-t border-foreground/10 relative overflow-hidden">
                    <p className="text-center text-sm font-medium text-foreground/40 tracking-widest uppercase mb-12">Trusted by teams from</p>

                    <div className="flex overflow-hidden relative w-full">
                        <motion.div
                            className="flex gap-16 items-center whitespace-nowrap pr-16"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <div key={i} className="relative w-32 h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

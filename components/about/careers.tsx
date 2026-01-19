"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock, Calendar } from "lucide-react"

const jobs = [
    {
        id: 1,
        title: "Senior Coach",
        type: "Full-time",
        location: "Munich",
        start: "Immediate",
        description: "Lead personal training sessions and guide clients toward their health goals using our science-based methodology.",
        responsibilities: [
            "Design and implement personalized training programs",
            "Track and analyze client progress using our data systems",
            "Conduct regular assessments and adjust programs accordingly",
            "Educate clients on proper form and technique",
            "Collaborate with the team on client care strategies"
        ],
        requirements: [
            "5+ years of personal training experience",
            "Relevant certifications (NSCA, ACSM, or equivalent)",
            "Experience with data-driven training approaches",
            "Strong communication and interpersonal skills",
            "Fluent in English and German"
        ],
        benefits: [
            "Competitive salary with performance bonuses",
            "Continued education and certification support",
            "Access to our state-of-the-art facility",
            "Health and wellness benefits"
        ]
    },
    {
        id: 2,
        title: "Studio Manager",
        type: "Part-time",
        location: "Munich",
        start: "Oct 2026",
        description: "Oversee daily studio operations and ensure an exceptional client experience at every touchpoint.",
        responsibilities: [
            "Manage studio scheduling and client bookings",
            "Coordinate with coaches on client needs",
            "Handle client communications and inquiries",
            "Maintain studio cleanliness and equipment",
            "Support marketing and community initiatives"
        ],
        requirements: [
            "2+ years in hospitality or studio management",
            "Excellent organizational skills",
            "Customer service excellence mindset",
            "Proficiency with scheduling software",
            "Fluent in English and German"
        ],
        benefits: [
            "Flexible part-time schedule",
            "Complimentary training sessions",
            "Growth opportunities within the company",
            "Positive team environment"
        ]
    },
]

export function CareersSection() {
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section id="careers" className="py-24 px-6 md:px-12 bg-transparent">
            <div className="max-w-5xl mx-auto">
                {/* Section Header - Consistent with other pages */}
                <div className="border-b border-[#293133]/10 pb-8 mb-16">
                    <h2 className="font-serif text-5xl md:text-7xl text-[#293133]">
                        Join The Team
                    </h2>
                </div>

                {/* Job Listings */}
                <div className="space-y-4">
                    {jobs.map((job) => {
                        const isExpanded = expandedId === job.id
                        return (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-[#293133]/10 rounded-2xl overflow-hidden bg-[#F3F0E5] hover:shadow-md transition-shadow"
                            >
                                {/* Job Header - Always Visible */}
                                <button
                                    onClick={() => toggleExpand(job.id)}
                                    className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 text-left hover:bg-[#293133]/5 transition-colors"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="font-serif font-bold text-xl md:text-2xl text-[#293133] mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-[#293133]/60">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Start: {job.start}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-[#26538D]">
                                            {isExpanded ? 'Less Info' : 'More Information'}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-[#26538D]" />
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-[#293133]/10">
                                                {/* Description */}
                                                <p className="text-[#293133]/80 mb-8 text-lg">
                                                    {job.description}
                                                </p>

                                                <div className="grid md:grid-cols-3 gap-8 mb-8">
                                                    {/* Responsibilities */}
                                                    <div>
                                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#293133]/50 mb-4">
                                                            Responsibilities
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.responsibilities.map((item, i) => (
                                                                <li key={i} className="text-sm text-[#293133]/70 flex items-start gap-2">
                                                                    <span className="text-[#26538D] mt-1">•</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Requirements */}
                                                    <div>
                                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#293133]/50 mb-4">
                                                            Requirements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements.map((item, i) => (
                                                                <li key={i} className="text-sm text-[#293133]/70 flex items-start gap-2">
                                                                    <span className="text-[#26538D] mt-1">•</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Benefits */}
                                                    <div>
                                                        <h4 className="font-bold text-sm uppercase tracking-widest text-[#293133]/50 mb-4">
                                                            Benefits
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.benefits.map((item, i) => (
                                                                <li key={i} className="text-sm text-[#293133]/70 flex items-start gap-2">
                                                                    <span className="text-[#26538D] mt-1">•</span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Apply Button */}
                                                <a href={`mailto:careers@newhealthsociety.com?subject=Application: ${job.title}`}>
                                                    <Button className="w-full md:w-auto px-12 py-6 text-base">
                                                        Apply Now
                                                    </Button>
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>

                {/* General Inquiry */}
                <div className="mt-12 text-center">
                    <p className="text-[#293133]/60 mb-4">
                        Don't see your role?
                    </p>
                    <a
                        href="mailto:careers@newhealthsociety.com?subject=General Inquiry"
                        className="text-[#26538D] font-medium hover:underline"
                    >
                        Send us your CV anyway →
                    </a>
                </div>
            </div>
        </section>
    )
}

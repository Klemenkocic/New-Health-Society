"use client"

import { Button } from "@/components/ui/button"

const jobs = [
    { title: "Senior Coach", type: "Full-time", location: "Munich", start: "Immediate" },
    { title: "Studio Manager", type: "Part-time", location: "Munich", start: "Oct 2026" },
]

export function CareersSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#F3F0E5]">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-serif font-bold text-4xl mb-12 text-center">JOIN THE TEAM</h2>

                <div className="border-t border-foreground/10">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-foreground/10 hover:bg-black/5 transition-colors px-4 -mx-4 rounded-sm group">
                            <div className="mb-4 md:mb-0">
                                <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                                <div className="flex gap-4 text-sm opacity-60">
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>Start: {job.start}</span>
                                </div>
                            </div>

                            <a href="mailto:careers@newhealthsociety.com">
                                <Button variant="outline" className="w-full md:w-auto">
                                    Apply Now
                                </Button>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm opacity-60">
                    Don't see your role? <a href="mailto:careers@newhealthsociety.com" className="underline hover:text-primary">Email us</a> anyway.
                </div>
            </div>
        </section>
    )
}

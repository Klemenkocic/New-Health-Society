"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full bg-[#F3F0E5] flex items-end pb-12 px-6 md:px-12 pt-32">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 h-full">

                {/* Top Content (Title Area) */}
                <div className="col-span-1 md:col-span-12 flex justify-between items-start">
                    <div className="max-w-md">
                        <p className="font-inter text-sm font-bold tracking-wide text-primary mb-4">THE STORY</p>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed">
                            We built the place we wanted to train in.
                            Uncompromising standards.
                            Clinical precision.
                        </p>
                    </div>

                    {/* Video Element on Right */}
                    <div className="hidden md:block w-64 aspect-video bg-neutral-200 rounded-sm">
                        {/* Video Placeholder */}
                    </div>
                </div>

                {/* Bottom Content (Main Title & Actions) */}
                <div className="col-span-1 md:col-span-12 self-end flex flex-col md:flex-row justify-between items-end">

                    <h1 className="font-serif font-extrabold text-[12vw] md:text-[8rem] leading-[0.9] text-foreground origin-bottom-left">
                        ABOUT US
                    </h1>

                    <div className="flex flex-col gap-4 w-full md:w-auto mb-2 md:mb-4">
                        <Link href="/consultation">
                            <Button size="lg" className="w-full md:w-auto">Book Consultation</Button>
                        </Link>
                        <Button variant="ghost" className="w-full md:w-auto hover:bg-neutral-200">
                            View Open Positions
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}

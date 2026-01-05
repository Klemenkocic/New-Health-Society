"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
    return (
        <section className="py-0 relative h-[600px] w-full bg-neutral-100 flex flex-col md:flex-row">
            {/* Map Side (Left) */}
            <div className="w-full md:w-1/2 h-full bg-neutral-300 relative group overflow-hidden">
                {/* Google Map Embed would go here. Using Image/Div placeholder. */}
                <div className="absolute inset-0 bg-neutral-400 group-hover:brightness-110 transition-all duration-500 cursor-grab active:cursor-grabbing flex items-center justify-center text-neutral-600 font-mono">
                    [Google Map Embed: Munich, Schwabing]
                </div>
                {/* Overlay for map interaction hint */}
                <div className="absolute top-4 left-4 bg-white/80 px-4 py-2 text-xs font-bold rounded-sm shadow-sm backdrop-blur-sm">
                    INTERACTIVE MAP
                </div>
            </div>

            {/* Info Side (Right) */}
            <div className="w-full md:w-1/2 bg-[#293133] text-[#F3F0E5] p-12 md:p-24 flex flex-col justify-center">
                <h2 className="font-serif font-bold text-3xl md:text-4xl mb-12">VISIT THE LAB</h2>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Location</h4>
                            <p className="opacity-80">Leopoldstraße 123</p>
                            <p className="opacity-80">80802 Munich, Germany</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Opening Hours</h4>
                            <p className="opacity-80">Mon - Fri: 06:00 - 22:00</p>
                            <p className="opacity-80">Sat - Sun: 08:00 - 20:00</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-bold mb-1">Contact</h4>
                            <p className="opacity-80">info@newhealthsociety.com</p>
                            <p className="opacity-80">+49 89 12345678</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

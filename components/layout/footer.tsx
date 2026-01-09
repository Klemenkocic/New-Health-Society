import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full bg-[#293133] text-[#F3F0E5] font-sans border-t border-[#F3F0E5]/10">
            {/* ROW 1: GRID & COLUMNS */}
            <div className="border-b border-[#F3F0E5]/10">
                <div className="flex flex-col md:flex-row">

                    {/* COLUMN 1: BRAND (50%) */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#F3F0E5]/10 flex flex-col justify-between">
                        <div className="flex flex-col items-start leading-[0.8] uppercase tracking-tighter" style={{ fontFamily: 'var(--font-brand)' }}>
                            <span className="text-[12vw] md:text-[6vw] block">New</span>
                            <span className="text-[12vw] md:text-[6vw] block">Health</span>
                            <span className="text-[12vw] md:text-[6vw] block">Society</span>
                        </div>
                    </div>

                    {/* COLUMN 2: EXPLORE (25%) */}
                    <div className="w-full md:w-1/4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#F3F0E5]/10 flex flex-col">
                        <h4 className="font-mono text-sm uppercase tracking-widest mb-12 opacity-60">Explore</h4>
                        <div className="flex flex-col gap-4 font-serif text-lg md:text-xl opacity-80">
                            <Link href="/" className="hover:text-primary transition-colors w-fit">Studio</Link>
                            <Link href="/about" className="hover:text-primary transition-colors w-fit">About Us</Link>
                            <Link href="/concept" className="hover:text-primary transition-colors w-fit">Concept</Link>
                            <Link href="/consultation" className="hover:text-primary transition-colors w-fit">Initial Consultation</Link>
                        </div>
                    </div>

                    {/* COLUMN 3: CONNECT (25%) */}
                    <div className="w-full md:w-1/4 p-8 md:p-12 flex flex-col">
                        <h4 className="font-mono text-sm uppercase tracking-widest mb-12 opacity-60">Connect</h4>

                        <div className="flex flex-col gap-8 font-inter">
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:info@newhealthsociety.com" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>

                            <div>
                                <p className="font-bold mb-2 text-sm opacity-60 uppercase tracking-widest">Contact</p>
                                <div className="flex flex-col gap-1 text-base md:text-lg opacity-80">
                                    <a href="tel:+4915129431318" className="hover:text-primary transition-colors">+49 151 2943 1318</a>
                                    <a href="mailto:info@newhealthsociety.com" className="hover:text-primary transition-colors">info@newhealthsociety.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ROW 2: QUOTE */}
            <div className="w-full text-center py-12 md:py-16 px-6 border-b border-[#F3F0E5]/10 bg-[#293133]">
                <h2 className="font-serif italic text-2xl md:text-3xl text-[#F3F0E5] leading-relaxed max-w-4xl mx-auto opacity-80">
                    "Longevity,<br />Invest in the years that count"
                </h2>
            </div>

            {/* ROW 3: LEGAL */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center p-6 md:px-12 text-sm opacity-60 font-mono uppercase tracking-wider">
                <div className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} NEW HEALTH SOCIETY.
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right">
                    <Link href="#" className="hover:text-primary transition-colors">Imprint</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    )
}

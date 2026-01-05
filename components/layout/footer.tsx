import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-background border-t border-foreground/10 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    {/* Nav Links */}
                    <div className="flex gap-8 text-sm font-medium text-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Studio</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/concept" className="hover:text-primary transition-colors">Concept</Link>
                        <Link href="/consultation" className="hover:text-primary transition-colors">Initial Consultation</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary hover:scale-110 transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-primary hover:scale-110 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:info@newhealthsociety.com" className="hover:text-primary hover:scale-110 transition-all duration-300">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Center Quote */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="font-serif italic text-2xl text-foreground mb-2">
                        "Performance meets Science.
                    </p>
                    <p className="font-serif italic text-2xl text-foreground">
                        600m² in Schwabing. Maximum 10 people."
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-foreground/60 pt-8 border-t border-foreground/5">
                    <div className="font-bold text-lg text-foreground mb-4 md:mb-0">NHS</div>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary">Imprint</Link>
                        <Link href="#" className="hover:text-primary">Privacy</Link>
                        <Link href="#" className="hover:text-primary">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

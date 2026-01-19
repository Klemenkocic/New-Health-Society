"use client"
import Image from "next/image"
import { basePath } from "@/lib/utils"

const clients = [
    { title: "CEO", company: "Tech Unicorn", imageSrc: `${basePath}/images/gym/NHS Website-15.jpg` },
    { title: "Founder", company: "AI Startup", imageSrc: `${basePath}/images/gym/NHS Website-25.jpg` },
    { title: "CMO", company: "Retail Giant", imageSrc: `${basePath}/images/gym/NHS Website-35.jpg` },
    { title: "Partner", company: "Global Law Firm", imageSrc: `${basePath}/images/gym/NHS Website-14.jpg` },
]

export function TrustedBySection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-lg text-foreground mb-16 text-center">
                    AMBITIOUS PEOPLE TRAIN HERE
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clients.map((client, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="w-full aspect-[4/5] rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 relative overflow-hidden">
                                <Image
                                    src={client.imageSrc}
                                    alt={client.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-lg">{client.title}</h3>
                            <p className="text-sm opacity-60">{client.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

const clients = [
    { title: "CEO", company: "Tech Unicorn", image: "bg-neutral-300" },
    { title: "Founder", company: "AI Startup", image: "bg-neutral-400" },
    { title: "CMO", company: "Retail Giant", image: "bg-neutral-500" },
    { title: "Partner", company: "Global Law Firm", image: "bg-neutral-600" },
]

export function TrustedBySection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif font-bold text-lg text-foreground mb-16 text-center">
                    AMBITIOUS PEOPLE TRAIN HERE
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clients.map((client, i) => (
                        <div key={i} className="group cursor-default">
                            <div className={`w-full aspect-[4/5] ${client.image} rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-500`} />
                            <h3 className="font-bold text-lg">{client.title}</h3>
                            <p className="text-sm opacity-60">{client.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

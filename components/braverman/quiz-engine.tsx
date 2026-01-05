"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { questions, natureDescriptions } from "@/data/braverman"
import { Check, ArrowRight } from "lucide-react"

type Step = "intro" | "quiz" | "email" | "results"

export function QuizEngine() {
    const [step, setStep] = useState<Step>("intro")
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<number, boolean>>({})
    const [email, setEmail] = useState("")

    const handleAnswer = (value: boolean) => {
        setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: value }))

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 200) // Small delay for UX
        } else {
            setStep("email")
        }
    }

    const calculateResults = () => {
        // Logic: Count TRUE answers per category
        const scores = { dopamine: 0, acetylcholine: 0, gaba: 0, serotonin: 0 }

        questions.forEach(q => {
            if (answers[q.id]) {
                if (q.category === "dopamine_nature") scores.dopamine++
                if (q.category === "acetylcholine_nature") scores.acetylcholine++
                if (q.category === "gaba_nature") scores.gaba++
                if (q.category === "serotonin_nature") scores.serotonin++
            }
        })

        // Find dominant
        const maxScore = Math.max(...Object.values(scores))
        const dominant = Object.keys(scores).find(k => scores[k as keyof typeof scores] === maxScore)

        return { scores, dominant }
    }

    const results = calculateResults()

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-sm shadow-xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center border border-foreground/5">
            <AnimatePresence mode="wait">

                {/* INTRO */}
                {step === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center"
                    >
                        <h2 className="font-serif font-bold text-3xl mb-6">THE BRAVERMAN TEST</h2>
                        <p className="font-inter text-foreground/70 mb-8 leading-relaxed">
                            This assessment determines your neuro-chemical dominance and efficiency.
                            It allows us to tailor your training volume, frequency, and nutrition.
                        </p>
                        <div className="text-sm font-mono text-foreground/40 mb-12">
                            EST TIME: 10 MIN • 160 QUESTIONS
                        </div>
                        <Button onClick={() => setStep("quiz")} size="lg" className="w-full md:w-auto px-12">
                            Start Assessment
                        </Button>
                    </motion.div>
                )}

                {/* QUIZ */}
                {step === "quiz" && (
                    <motion.div
                        key="quiz"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="w-full"
                    >
                        {/* Progress */}
                        <div className="w-full h-1 bg-neutral-100 mb-12">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                            />
                        </div>

                        <div className="mb-4 text-xs font-mono text-foreground/30 uppercase tracking-widest">
                            Question {currentQuestionIndex + 1} / {questions.length}
                        </div>

                        <h3 className="font-serif text-2xl md:text-3xl mb-12 leading-tight min-h-[120px]">
                            {questions[currentQuestionIndex].text}
                        </h3>

                        <div className="flex gap-4">
                            <Button
                                onClick={() => handleAnswer(true)}
                                className="flex-1 h-16 text-lg bg-foreground hover:bg-foreground/90"
                            >
                                True
                            </Button>
                            <Button
                                onClick={() => handleAnswer(false)}
                                variant="outline"
                                className="flex-1 h-16 text-lg"
                            >
                                False
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* EMAIL */}
                {step === "email" && (
                    <motion.div
                        key="email"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <h2 className="font-serif font-bold text-2xl mb-6">ALMOST DONE</h2>
                        <p className="mb-8 opacity-70">Enter your email to save your results and receive your detailed report.</p>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-foreground/20 rounded-sm mb-6 focus:outline-none focus:border-primary"
                        />

                        <Button onClick={() => setStep("results")} disabled={!email} size="lg" className="w-full">
                            See Results <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                )}

                {/* RESULTS */}
                {step === "results" && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8" />
                        </div>

                        <h2 className="font-serif font-bold text-3xl mb-2">
                            TYPE: {results.dominant?.toUpperCase() || "BALANCED"}
                        </h2>

                        <p className="text-foreground/70 mb-8 italic">
                            "{natureDescriptions[results.dominant as keyof typeof natureDescriptions]}"
                        </p>

                        <div className="bg-neutral-50 p-6 rounded-sm mb-8 text-left space-y-4">
                            {Object.entries(results.scores).map(([key, score]) => (
                                <div key={key}>
                                    <div className="flex justify-between text-xs font-bold uppercase mb-1">
                                        <span>{key}</span>
                                        <span>{score} pts</span>
                                    </div>
                                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary"
                                            style={{ width: `${(score / 5) * 100}%` }} // Assuming max 4-5 dummy questions
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="/consultation">
                            <Button className="w-full">Book Consultation Analysis</Button>
                        </a>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    )
}

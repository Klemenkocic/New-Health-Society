"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { questions, natureDescriptions, deficiencyDescriptions } from "@/data/braverman"
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
            setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 200)
        } else {
            // Quiz complete, move to email step
            setTimeout(() => setStep("email"), 300)
        }
    }

    const calculateResults = () => {
        // Count TRUE answers for each category
        const scores = {
            dopamine_nature: 0,
            dopamine_deficiency: 0,
            acetylcholine_nature: 0,
            acetylcholine_deficiency: 0,
            gaba_nature: 0,
            gaba_deficiency: 0,
            serotonin_nature: 0,
            serotonin_deficiency: 0
        }

        questions.forEach(q => {
            if (answers[q.id]) {
                scores[q.category as keyof typeof scores]++
            }
        })

        // Calculate net scores (nature - deficiency) for each neurotransmitter
        const netScores = {
            dopamine: scores.dopamine_nature - scores.dopamine_deficiency,
            acetylcholine: scores.acetylcholine_nature - scores.acetylcholine_deficiency,
            gaba: scores.gaba_nature - scores.gaba_deficiency,
            serotonin: scores.serotonin_nature - scores.serotonin_deficiency
        }

        // Find dominant neurotransmitter
        const maxScore = Math.max(...Object.values(netScores))
        const dominant = Object.keys(netScores).find(k => netScores[k as keyof typeof netScores] === maxScore) as keyof typeof netScores

        // Identify deficiencies (negative net scores)
        const deficiencies = Object.keys(netScores).filter(k => netScores[k as keyof typeof netScores] < 0) as Array<keyof typeof netScores>

        return { scores, netScores, dominant, deficiencies }
    }

    const results = calculateResults()
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

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
                            This assessment determines your neuro-chemical dominance and deficiencies.
                            It evaluates four key neurotransmitters: Dopamine, Acetylcholine, GABA, and Serotonin.
                            Your results will help us tailor your training, recovery, and nutrition protocols.
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
                        <div className="w-full h-1 bg-neutral-100 mb-12 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="mb-4 text-xs font-mono text-foreground/30 uppercase tracking-widest">
                            Question {currentQuestionIndex + 1} / {questions.length}
                        </div>

                        <h3 className="font-serif text-2xl md:text-3xl mb-12 leading-tight min-h-[120px] flex items-center">
                            {questions[currentQuestionIndex]?.text || "Loading..."}
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
                        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8" />
                        </div>

                        <h2 className="font-serif font-bold text-3xl mb-4">ASSESSMENT COMPLETE!</h2>
                        <p className="text-lg mb-8 text-foreground/80">
                            Receive your personalized Braverman Test results via email
                        </p>
                        <p className="text-sm mb-8 text-foreground/60">
                            We'll send you a comprehensive PDF report with your neurotransmitter profile,
                            detailed analysis, and personalized recommendations for training, nutrition, and supplementation.
                        </p>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-foreground/20 rounded-sm mb-6 focus:outline-none focus:border-primary text-lg"
                        />

                        <Button onClick={() => setStep("results")} disabled={!email} size="lg" className="w-full h-14 text-lg">
                            Send My Results <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="text-xs text-foreground/40 mt-4">
                            Your results will be sent within 24 hours
                        </p>
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
                            RESULTS SENT!
                        </h2>

                        <p className="text-foreground/70 mb-4 text-lg">
                            Check your inbox at <span className="font-bold text-primary">{email}</span>
                        </p>

                        <p className="text-foreground/60 mb-8">
                            Your personalized Braverman Test PDF report will arrive within 24 hours.
                        </p>

                        {/* Quick Preview */}
                        <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-sm mb-8 text-left">
                            <h3 className="font-bold text-sm uppercase mb-4 text-center">Quick Preview</h3>

                            <div className="mb-4">
                                <p className="text-sm font-bold mb-2">Dominant Type:</p>
                                <p className="text-2xl font-serif font-bold text-primary">{results.dominant?.toUpperCase()}</p>
                                <p className="text-sm text-foreground/70 italic mt-1">
                                    {natureDescriptions[results.dominant as keyof typeof natureDescriptions]}
                                </p>
                            </div>

                            <div className="space-y-3 mt-6">
                                <p className="text-xs font-bold uppercase text-foreground/50">Balance Overview:</p>
                                {Object.entries(results.netScores).map(([key, score]) => (
                                    <div key={key} className="flex items-center justify-between">
                                        <span className="text-sm capitalize">{key}</span>
                                        <span className={`text-sm font-bold ${score >= 0 ? "text-green-600" : "text-red-600"}`}>
                                            {score > 0 ? "+" : ""}{score}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <a href="/consultation">
                                <Button className="w-full h-14 text-lg">Book Consultation for In-Depth Analysis</Button>
                            </a>
                            <a href="/">
                                <Button variant="outline" className="w-full h-14 text-lg">Return to Homepage</Button>
                            </a>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    )
}

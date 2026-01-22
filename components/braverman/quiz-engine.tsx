"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { questions, natureDescriptions } from "@/data/braverman"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Step = "intro" | "quiz" | "results"

type QuestionCategory =
    | "dopamine_nature"
    | "dopamine_deficiency"
    | "acetylcholine_nature"
    | "acetylcholine_deficiency"
    | "gaba_nature"
    | "gaba_deficiency"
    | "serotonin_nature"
    | "serotonin_deficiency"

type ScoreRecord = Record<QuestionCategory, number>

type NeurotransmitterType = "dopamine" | "acetylcholine" | "gaba" | "serotonin"

export function QuizEngine() {
    const [step, setStep] = useState<Step>("intro")
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<number, boolean>>({})

    const handleAnswer = useCallback((value: boolean) => {
        setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: value }))

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 150)
        } else {
            // Quiz complete, move directly to results for immediate feedback
            setTimeout(() => setStep("results"), 300)
        }
    }, [currentQuestionIndex])

    // Keyboard Navigation
    useEffect(() => {
        if (step !== "quiz") return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handleAnswer(false)
            } else if (e.key === "ArrowRight") {
                handleAnswer(true)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [step, handleAnswer])

    const calculateResults = () => {
        // Count TRUE answers for each category
        const scores: ScoreRecord = {
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
                scores[q.category as QuestionCategory]++
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
        const dominant = (Object.keys(netScores) as NeurotransmitterType[]).find(
            k => netScores[k] === maxScore
        ) as NeurotransmitterType

        // Identify deficiencies (negative net scores)
        const deficiencies = (Object.keys(netScores) as NeurotransmitterType[]).filter(
            k => netScores[k] < 0
        )

        return { scores, netScores, dominant, deficiencies }
    }

    const results = calculateResults()
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

    return (
        <div className="w-full max-w-3xl mx-auto backdrop-blur-xl bg-white/70 border border-[#293133]/10 rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col justify-center relative overflow-hidden z-10">

            <AnimatePresence mode="wait">

                {/* INTRO */}
                {step === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center relative z-10 flex flex-col items-center"
                    >
                        <h2 className="font-serif font-bold text-5xl md:text-6xl mb-6 text-[#293133]">The Braverman Assessment</h2>
                        <div className="w-20 h-1 bg-[#26538D] mb-8" />
                        <p className="font-sans text-[#293133]/80 mb-8 leading-relaxed text-xl max-w-2xl">
                            Discover your unique neuro-chemical profile. This clinical assessment identifies your dominant neurotransmitters and potential deficiencies to tailor your perfect health protocol.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12 text-center w-full max-w-md">
                            <div className="p-4 rounded-2xl bg-white/30 border border-[#293133]/5">
                                <div className="text-3xl font-serif font-bold text-[#26538D] mb-1">10</div>
                                <div className="text-xs uppercase tracking-widest text-[#293133]/60">Minutes</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/30 border border-[#293133]/5">
                                <div className="text-3xl font-serif font-bold text-[#26538D] mb-1">160</div>
                                <div className="text-xs uppercase tracking-widest text-[#293133]/60">Questions</div>
                            </div>
                        </div>

                        <Button
                            onClick={() => setStep("quiz")}
                            size="lg"
                            variant="outline"
                            className="px-8 text-lg h-14 rounded-full border-[#293133]/20 hover:bg-[#293133]/5 text-[#293133]"
                        >
                            Begin Assessment
                        </Button>
                    </motion.div>
                )}

                {/* QUIZ */}
                {step === "quiz" && (
                    <motion.div
                        key="quiz"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full relative z-10"
                    >
                        {/* Header / Progress */}
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#293133]/40">Question {currentQuestionIndex + 1} / {questions.length}</span>
                            <span className="text-xs font-mono font-bold text-[#26538D]">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full h-1 bg-[#293133]/5 mb-16 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#26538D]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="min-h-[200px] flex items-center justify-center mb-12">
                            <h3 className="font-serif text-3xl md:text-4xl text-center leading-tight text-[#293133]">
                                {questions[currentQuestionIndex]?.text || "Loading..."}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <button
                                onClick={() => handleAnswer(false)}
                                className="group flex flex-col items-center justify-center gap-2 p-8 rounded-2xl border-2 border-[#293133]/10 hover:border-[#293133]/30 hover:bg-[#293133]/5 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#293133]/20"
                            >
                                <span className="text-xl font-bold text-[#293133]/60 group-hover:text-[#293133]">False</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#293133]/30 flex items-center gap-1 group-hover:text-[#293133]/50 transition-colors">
                                    <ArrowLeft className="w-3 h-3" /> Press Left
                                </span>
                            </button>

                            <button
                                onClick={() => handleAnswer(true)}
                                className="group flex flex-col items-center justify-center gap-2 p-8 rounded-2xl border-2 border-[#26538D]/20 bg-[#26538D]/5 hover:bg-[#26538D]/10 hover:border-[#26538D]/40 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#26538D]/20"
                            >
                                <span className="text-xl font-bold text-[#26538D]">True</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#26538D]/40 flex items-center gap-1 group-hover:text-[#26538D]/60 transition-colors">
                                    Press Right <ArrowRight className="w-3 h-3" />
                                </span>
                            </button>
                        </div>

                        <div className="text-center text-xs text-[#293133]/30 font-mono">
                            Use arrow keys or click to select
                        </div>
                    </motion.div>
                )}

                {/* RESULTS (Immediate) */}
                {step === "results" && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center relative z-10 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar"
                    >
                        <div className="mb-8">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#26538D]/10 text-[#26538D] text-xs font-bold uppercase tracking-widest mb-4">
                                Analysis Complete
                            </span>
                            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-2 text-[#293133]">
                                Your Braverman Profile
                            </h2>
                        </div>

                        {/* Quick Preview */}
                        <div className="bg-white/60 backdrop-blur-md border border-[#293133]/10 p-8 rounded-3xl mb-12 shadow-lg text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#26538D]/5 rounded-bl-full" />

                            <div className="mb-8 relative z-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-[#293133]/40 mb-2">Dominant Nature</p>
                                <div className="flex items-baseline gap-4">
                                    <p className="text-4xl md:text-5xl font-serif font-bold text-[#26538D]">{results.dominant?.toUpperCase()}</p>
                                </div>
                                <p className="text-lg text-[#293133]/70 mt-4 leading-relaxed">
                                    {natureDescriptions[results.dominant as keyof typeof natureDescriptions]}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-[#293133]/10 pt-8">
                                {Object.entries(results.netScores).map(([key, score]) => (
                                    <div key={key} className="text-center p-3 rounded-xl bg-white/50 border border-[#293133]/5">
                                        <div className="text-[10px] uppercase font-bold text-[#293133]/40 mb-1">{key}</div>
                                        <div className={`text-xl font-bold ${score >= 0 ? "text-[#26538D]" : "text-amber-600"}`}>
                                            {score > 0 ? "+" : ""}{score}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Link href="/consultation" className="block">
                                <button className="w-full h-16 text-lg rounded-xl bg-[#26538D] hover:bg-[#26538D]/90 text-white shadow-lg hover:shadow-xl transition-all font-bold">
                                    Book Your Free Initial Consultation
                                </button>
                            </Link>
                            <Link href="/" className="block">
                                <button className="w-full h-14 text-lg rounded-xl text-[#293133]/60 hover:text-[#293133] hover:bg-[#293133]/5 transition-all">
                                    Return to Homepage
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    )
}


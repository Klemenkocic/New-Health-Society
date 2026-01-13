"use client"

import { useEffect, useRef } from "react"

interface NoiseProps {
    opacity?: number
    className?: string
}

export function Noise({ opacity = 0.15, className = "" }: NoiseProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size to a small tile that will repeat
        const size = 200
        canvas.width = size
        canvas.height = size

        // Generate noise pattern
        const imageData = ctx.createImageData(size, size)
        for (let i = 0; i < imageData.data.length; i += 4) {
            const value = Math.random() * 255
            imageData.data[i] = value     // R
            imageData.data[i + 1] = value // G
            imageData.data[i + 2] = value // B
            imageData.data[i + 3] = 40    // A (semi-transparent noise)
        }
        ctx.putImageData(imageData, 0, 0)
    }, [])

    return (
        <div
            className={className}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                opacity,
                zIndex: 1,
                overflow: "hidden",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    imageRendering: "pixelated",
                }}
            />
        </div>
    )
}

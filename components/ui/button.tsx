import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// I'm skipping class-variance-authority install for now and just writing a simple button to save time/dependencies, 
// strictly following the brand design.
// Actually, I didn't install cva. I'll write a simple functional component.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-md)] text-sm font-semibold ring-offset-background transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-primary text-white hover:bg-[#1e4270] shadow-[var(--shadow-small)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-[2px]",
            outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 hover:border-[#1e4270] hover:text-[#1e4270]",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-12 px-6 py-2 text-base",
            sm: "h-9 rounded-[var(--radius-sm)] px-3 text-xs",
            lg: "h-14 rounded-[var(--radius-lg)] px-8 text-lg",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

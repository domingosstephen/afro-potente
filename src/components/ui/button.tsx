import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B94A2F]/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#B94A2F] text-[#F5EDE0] shadow-sm hover:bg-[#9E3E27] hover:scale-[1.02] uppercase tracking-[0.05em] text-sm",
        outline:
          "border-2 border-[#2B1A0E] bg-transparent text-[#2B1A0E] hover:bg-[#2B1A0E] hover:text-[#F5EDE0] uppercase tracking-[0.05em] text-sm",
        secondary:
          "bg-[#2B1A0E] text-[#F5EDE0] shadow-sm hover:bg-[#2B1A0E]/90 uppercase tracking-[0.05em] text-sm",
        ghost:
          "text-[#2B1A0E] hover:bg-[#2B1A0E]/5 hover:text-[#B94A2F]",
        link:
          "text-[#B94A2F] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-lg px-8 md:px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

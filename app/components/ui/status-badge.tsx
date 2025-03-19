import type React from "react"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  children: React.ReactNode
  variant?: "success" | "warning" | "error" | "info"
  className?: string
}

export function StatusBadge({ children, variant = "info", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "warning" && "bg-yellow-100 text-yellow-800",
        variant === "error" && "bg-red-100 text-red-800",
        variant === "info" && "bg-blue-100 text-blue-800",
        className,
      )}
    >
      {children}
    </span>
  )
}


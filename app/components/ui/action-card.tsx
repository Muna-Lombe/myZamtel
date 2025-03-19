"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ActionCardProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
}

export function ActionCard({ icon, label, onClick, className, variant = "primary" }: ActionCardProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center rounded-xl p-4 transition-all active:scale-95",
        variant === "primary" && "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600",
        variant === "secondary" && "bg-emerald-100 text-emerald-700 shadow-sm hover:bg-emerald-200",
        variant === "outline" && "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50",
        className,
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "mb-2 flex h-10 w-10 items-center justify-center rounded-full",
          variant === "primary" && "bg-emerald-400",
          variant === "secondary" && "bg-white",
          variant === "outline" && "bg-emerald-50",
        )}
      >
        {icon}
      </div>
      <span className="text-center text-sm font-medium">{label}</span>
    </button>
  )
}


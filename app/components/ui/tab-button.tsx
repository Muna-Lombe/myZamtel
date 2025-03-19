"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface TabButtonProps {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export function TabButton({ children, active, onClick, className }: TabButtonProps) {
  return (
    <button
      className={cn(
        "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}


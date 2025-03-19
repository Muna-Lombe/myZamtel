"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  className?: string
  active?: boolean
}

export function ServiceCard({ icon, label, onClick, className, active }: ServiceCardProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-95",
        active && "ring-2 ring-emerald-500",
        className,
      )}
      onClick={onClick}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">{icon}</div>
      <span className="text-center text-sm font-medium text-gray-800">{label}</span>
    </button>
  )
}


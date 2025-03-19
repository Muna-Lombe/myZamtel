"\"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface BottomNavigationProps {
  children: React.ReactNode
  className?: string
}

interface BottomNavigationItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function BottomNavigation({ children, className }: BottomNavigationProps) {
  return (
    <div className={cn("bg-white border-t border-gray-200 py-2 px-4 w-full", className)}>
      <div className="flex justify-between items-center">{children}</div>
    </div>
  )
}

export function BottomNavigationItem({ icon, label, active, onClick, className }: BottomNavigationItemProps) {
  return (
    <div className={cn("flex flex-col items-center cursor-pointer", className)} onClick={onClick}>
      <div className="bg-gray-100 rounded-full p-1">{icon}</div>
      <span className={cn("text-xs mt-1", active ? "text-emerald-500 font-medium" : "text-gray-500")}>{label}</span>
    </div>
  )
}


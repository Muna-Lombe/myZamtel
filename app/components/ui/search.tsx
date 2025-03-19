"use client"

import * as React from "react"
import { SearchIcon, X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({ className, onClear, value, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        className={cn(
          "h-11 w-full rounded-full bg-gray-100 pl-10 pr-10 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500",
          className,
        )}
        ref={ref}
        value={value}
        {...props}
      />
      {value && (
        <button type="button" onClick={onClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
})
Search.displayName = "Search"

export { Search }


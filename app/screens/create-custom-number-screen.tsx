"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Check, Info } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface CreateCustomNumberScreenProps {
  onNavigate: (screen: string) => void
}

export default function CreateCustomNumberScreen({ onNavigate }: CreateCustomNumberScreenProps) {
  const [prefix, setPrefix] = useState("097")
  const [customNumber, setCustomNumber] = useState("")
  const [selectedNumber, setSelectedNumber] = useState("")

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*$/.test(value) && value.length <= 7) {
      setCustomNumber(value)
    }
  }

  const suggestedNumbers = ["0971234567", "0979876543", "0975555555", "0977777777", "0973333333"]

  const isValidNumber = customNumber.length === 7

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center border-b">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("profile")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">Create Custom Number</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h2 className="text-lg font-medium mb-4">Choose Your Number</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter your preferred number</label>
            <div className="flex items-center">
              <div className="bg-gray-100 p-3 rounded-l-lg border-y border-l border-gray-300">
                <select
                  className="bg-transparent focus:outline-none"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                >
                  <option value="097">097</option>
                  <option value="096">096</option>
                  <option value="095">095</option>
                </select>
              </div>
              <input
                type="text"
                className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="1234567"
                value={customNumber}
                onChange={handleNumberChange}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Enter 7 digits after the prefix</p>
          </div>

          {isValidNumber && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-6 flex items-center">
              <Check className="w-5 h-5 text-emerald-500 mr-2" />
              <div>
                <p className="text-emerald-700 font-medium">{prefix + customNumber}</p>
                <p className="text-xs text-emerald-600">This number is available!</p>
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Suggested Numbers</h3>
              <button className="text-xs text-emerald-600">Refresh</button>
            </div>
            <div className="space-y-2">
              {suggestedNumbers.map((number, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg flex justify-between items-center cursor-pointer ${selectedNumber === number ? "border-emerald-500 bg-emerald-50" : "border-gray-200"
                    }`}
                  onClick={() => setSelectedNumber(number)}
                >
                  <span className="font-medium">{number}</span>
                  {selectedNumber === number && <Check className="w-5 h-5 text-emerald-500" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-blue-700">Custom Number Fee</p>
                <p className="text-xs text-blue-600">A one-time fee of K50 will be charged for your custom number.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t">
        <button
          className={`w-full py-3 rounded-lg font-medium ${isValidNumber || selectedNumber
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          disabled={!isValidNumber && !selectedNumber}
          onClick={() => onNavigate("profile")}
        >
          Continue
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation>
        <div className="flex flex-col items-center" onClick={() => onNavigate("home")}>
          <div className="bg-emerald-500 rounded-full p-1">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <span className="text-xs text-emerald-500 font-medium mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => onNavigate("dashboard")}>
          <div className="bg-gray-100 rounded-full p-1">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Money</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => onNavigate("services")}>
          <div className="bg-gray-100 rounded-full p-1">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Services</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => onNavigate("shop")}>
          <div className="bg-gray-100 rounded-full p-1">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Shop</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => onNavigate("help")}>
          <div className="bg-gray-100 rounded-full p-1">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500 mt-1">Help</span>
        </div>
      </BottomNavigation>
    </div>
  )
}


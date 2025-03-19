"use client"
import { useState } from "react"

export default function PinEntryScreen({ onNavigate }) {
  const [pin, setPin] = useState<string[]>(["", "", "", ""])

  const handlePinInput = (digit: string) => {
    const currentIndex = pin.findIndex((d) => d === "")
    if (currentIndex !== -1) {
      const newPin = [...pin]
      newPin[currentIndex] = digit
      setPin(newPin)
    }
  }

  const handleBackspace = () => {
    const lastFilledIndex = pin.map((d) => d !== "").lastIndexOf(true)
    if (lastFilledIndex !== -1) {
      const newPin = [...pin]
      newPin[lastFilledIndex] = ""
      setPin(newPin)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* PIN Entry Modal */}
      <div className="absolute inset-x-0 top-1/4 bg-white rounded-t-3xl z-20 shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Enter Your Mobile Money PIN</h2>

          {/* PIN Dots */}
          <div className="flex justify-center space-x-4 mb-8">
            {pin.map((digit, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ${digit ? "bg-emerald-500" : "border-2 border-gray-300"}`}
              ></div>
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handlePinInput(num.toString())}
                className="bg-white border border-gray-200 rounded-lg py-6 text-2xl font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              >
                {num}
              </button>
            ))}

            <button
              className="bg-white border border-gray-200 rounded-lg py-6 text-2xl font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              onClick={() => onNavigate("dashboard")}
            >
              Submit
            </button>

            <button
              onClick={() => handlePinInput("0")}
              className="bg-white border border-gray-200 rounded-lg py-6 text-2xl font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100"
            >
              0
            </button>

            <button
              onClick={handleBackspace}
              className="bg-white border border-gray-200 rounded-lg py-6 text-2xl font-medium text-gray-800 hover:bg-gray-50 active:bg-gray-100 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"
import { useState } from "react"
import { ArrowLeft, Smartphone, X } from "lucide-react"

export default function CashOutScreen({ onNavigate }) {
  const [agentCode, setAgentCode] = useState("")
  const [showKeypad, setShowKeypad] = useState(true)

  const handleKeyPress = (key) => {
    if (key === "backspace") {
      setAgentCode((prev) => prev.slice(0, -1))
    } else if (key === "clear") {
      setAgentCode("")
    } else {
      setAgentCode((prev) => prev + key)
    }
  }

  const handleNext = () => {
    if (agentCode.trim()) {
      onNavigate("pinEntry")
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Status Bar */}
      <div className="bg-emerald-500 py-2 px-4">
        <div className="flex justify-end">
          <div className="text-white text-xs">10:26</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("dashboard")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Cash Out</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-xl font-medium text-gray-800 mb-6">Enter Agent Details</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Agent Code*</label>
              <div className="relative">
                <input
                  type="text"
                  value={agentCode}
                  onChange={(e) => setAgentCode(e.target.value)}
                  onFocus={() => setShowKeypad(true)}
                  placeholder="Enter agent code"
                  className="w-full p-4 text-lg border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                {agentCode && (
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setAgentCode("")}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
              <div className="bg-amber-100 rounded-full p-2">
                <Smartphone className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-sm text-amber-800">You can find the agent code displayed at the agent's location</p>
            </div>

            <button
              className={`w-full py-4 text-lg rounded-lg font-medium transition-all ${
                agentCode.trim()
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!agentCode.trim()}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Keypad */}
      {showKeypad && (
        <div className="bg-gray-800 py-4">
          <div className="grid grid-cols-3 gap-1 px-2">
            {/* Row 1 */}
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("1")}
            >
              1
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("2")}
            >
              2
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("3")}
            >
              3
            </button>

            {/* Row 2 */}
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("4")}
            >
              4
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("5")}
            >
              5
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("6")}
            >
              6
            </button>

            {/* Row 3 */}
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("7")}
            >
              7
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("8")}
            >
              8
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("9")}
            >
              9
            </button>

            {/* Row 4 */}
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress(".")}
            >
              .
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded"
              onClick={() => handleKeyPress("0")}
            >
              0
            </button>
            <button
              className="bg-gray-700 text-white text-2xl font-medium py-6 rounded flex items-center justify-center"
              onClick={() => handleKeyPress("backspace")}
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
      )}
    </div>
  )
}


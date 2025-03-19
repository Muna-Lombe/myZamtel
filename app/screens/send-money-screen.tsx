"use client"
import { ArrowLeft, User } from "lucide-react"

export default function SendMoneyScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("dashboard")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Send Money</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-xl font-medium text-gray-800 mb-6">Recipient Details</h2>

          <div className="space-y-5">
            <div className="relative">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Number*"
                  className="w-full p-5 text-base border border-emerald-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="bg-emerald-100 p-5 border border-emerald-200 rounded-r-lg">
                  <User className="h-6 w-6 text-emerald-600" />
                </button>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Receiver's Name"
                className="w-full p-5 text-base border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center" onClick={() => onNavigate("home")}>
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs text-gray-500">Home</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => onNavigate("dashboard")}>
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-emerald-500 font-medium">MobileMoney</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="text-xs text-gray-500">Offers</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-gray-500">Help</span>
          </div>
        </div>
      </div>
    </div>
  )
}


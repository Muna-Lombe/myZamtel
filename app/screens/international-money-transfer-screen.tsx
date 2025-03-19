"use client"
import { useState } from "react"
import { ArrowLeft, CreditCard, DollarSign, ChevronRight, Search } from "lucide-react"
import { StatusBadge } from "@/app/components/ui/status-badge"

  export default function InternationalMoneyTransferScreen({ onNavigate }: { onNavigate: (screen: string, props?: any) => void }) {
  const [activeTab, setActiveTab] = useState("popular")
  
  const countries = [
    { id: "south-africa", name: "South Africa", flag: "🇿🇦", popular: true },
    { id: "zimbabwe", name: "Zimbabwe", flag: "🇿🇼", popular: true },
    { id: "tanzania", name: "Tanzania", flag: "🇹🇿", popular: true },
    { id: "kenya", name: "Kenya", flag: "🇰🇪", popular: true },
    { id: "uganda", name: "Uganda", flag: "🇺🇬", popular: false },
    { id: "malawi", name: "Malawi", flag: "🇲🇼", popular: false },
    { id: "botswana", name: "Botswana", flag: "🇧🇼", popular: false },
    { id: "namibia", name: "Namibia", flag: "🇳🇦", popular: false },
  ]

  const displayedCountries = activeTab === "popular" ? countries.filter((country) => country.popular) : countries

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
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">International Money Transfer</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Exchange Rate Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800">Today's Exchange Rate</h2>
            <button className="text-emerald-500 text-sm font-medium">View All</button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-emerald-100 rounded-full p-2 mr-3">
                <DollarSign className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">1 USD = 20.35 ZMW</p>
                <p className="text-gray-500 text-sm">1 ZMW = 0.049 USD</p>
              </div>
            </div>
            <StatusBadge variant="info">Updated</StatusBadge>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            className={`py-2 px-4 font-medium ${activeTab === "popular" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === "all" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("all")}
          >
            All Countries
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search country"
            className="w-full rounded-full bg-gray-100 pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Countries List */}
        <div className="space-y-3">
          {displayedCountries.map((country) => (
            <button
              key={country.id}
              className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
              onClick={() => onNavigate("sendInternational", { country: country.id })}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{country.flag}</div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">{country.name}</h3>
                  <p className="text-sm text-gray-500">Send money to {country.name}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full bg-emerald-500 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3">
              <CreditCard className="h-5 w-5" />
              <span>New Transfer</span>
            </button>

            <button className="w-full bg-white border border-emerald-200 text-emerald-600 font-medium py-4 rounded-lg flex items-center justify-center gap-3">
              <DollarSign className="h-5 w-5" />
              <span>Exchange Rates</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 w-full bg-white border-t border-gray-200 py-2 px-4 max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center" onClick={() => onNavigate("home")}>
            <div className="bg-gray-100 rounded-full p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500 mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => onNavigate("dashboard")}>
            <div className="bg-emerald-500 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xs text-emerald-500 font-medium mt-1">Money</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => onNavigate("services")}>
            <div className="bg-gray-100 rounded-full p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <span className="text-xs text-gray-500 mt-1">Services</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => onNavigate("offers")}>
            <div className="bg-gray-100 rounded-full p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500 mt-1">Offers</span>
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
        </div>
      </div>
    </div>
  )
}


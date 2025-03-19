"use client"
import { useState } from "react"
import { ArrowLeft, HelpCircle, Shield, Bell, ChevronRight, FlameIcon as Fire } from "lucide-react"
import { Search as SearchInput } from "@/app/components/ui/search"

export default function SupportScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("home")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Help & Support</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <SearchInput
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Support Options */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How can we help?</h2>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-3 mb-2">
              <HelpCircle className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-gray-800 font-medium">FAQs</span>
          </button>

          <button className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center">
            <div className="bg-emerald-100 rounded-full p-3 mb-2">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-gray-800 font-medium">Report Fraud</span>
          </button>
        </div>

        {/* Chat Support */}
        <div className="mb-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-500 font-bold text-xs">Z</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Chat with Support</h3>
                  <p className="text-sm text-gray-500">We're here to help!</p>
                </div>
              </div>
              <button className="text-emerald-500">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Notifications</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
                  <Bell className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">System Updates</h3>
                  <p className="text-sm text-gray-500">App maintenance scheduled</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full p-2">
                  <Fire className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">New Features</h3>
                  <p className="text-sm text-gray-500">Check out our latest updates</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-3">Contact Us</h3>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-gray-700 mb-2">
              Customer Service: <span className="font-medium">101</span>
            </p>
            <p className="text-gray-700 mb-2">
              WhatsApp: <span className="font-medium">+260 95 5000 101</span>
            </p>
            <p className="text-gray-700">
              Email: <span className="font-medium">customerservice@zamtel.co.zm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


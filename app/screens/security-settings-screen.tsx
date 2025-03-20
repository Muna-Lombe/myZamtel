"use client"

import { useState } from "react"
import { ArrowLeft, Lock, Fingerprint, Shield, Eye, EyeOff, ChevronRight } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface SecuritySettingsScreenProps {
  onNavigate: (screen: string) => void
}

export default function SecuritySettingsScreen({ onNavigate }: SecuritySettingsScreenProps) {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true)
  const [autoLockEnabled, setAutoLockEnabled] = useState(true)
  const [showPin, setShowPin] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center border-b">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("profile")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">Security Settings</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="bg-white rounded-xl shadow-sm mb-4">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="bg-emerald-100 p-2 rounded-full mr-3">
                <Lock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="font-medium">Change PIN</h2>
                <p className="text-sm text-gray-500">Update your transaction PIN</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Current PIN</label>
              <div className="relative">
                <input
                  type={showPin ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter current PIN"
                  maxLength={4}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New PIN</label>
              <input
                type={showPin ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter new PIN"
                maxLength={4}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New PIN</label>
              <input
                type={showPin ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Confirm new PIN"
                maxLength={4}
              />
            </div>

            <button className="w-full py-3 bg-emerald-500 text-white rounded-lg font-medium">Update PIN</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-4">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Fingerprint className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-medium">Biometric Authentication</h2>
                <p className="text-sm text-gray-500">Use fingerprint or face ID</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={biometricsEnabled}
                  onChange={() => setBiometricsEnabled(!biometricsEnabled)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-4">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-medium">Auto-Lock</h2>
                <p className="text-sm text-gray-500">Lock app after 5 minutes of inactivity</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={autoLockEnabled}
                  onChange={() => setAutoLockEnabled(!autoLockEnabled)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <button className="p-4 w-full flex items-center justify-between" onClick={() => onNavigate("privacy-policy")}>
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="font-medium">Privacy Policy</h2>
                <p className="text-sm text-gray-500">View our privacy policy</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation>
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


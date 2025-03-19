"use client"
import { ArrowLeft, User, Phone, Shield, Bell, HelpCircle, Share2, FileText, LogOut } from "lucide-react"

export default function ProfileScreen({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("home")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Profile</h1>
      </header>

      {/* User Info */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
        <div className="flex items-center mb-4">
          <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-500 font-bold text-lg">Zamtel</span>
          </div>
        </div>
        <h2 className="text-white text-2xl font-bold">Lombe Munakalilamsiku</h2>
        <p className="text-white opacity-90 text-lg">260952768272</p>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("editProfile")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <User className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Edit Profile</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("customNumber")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <Phone className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Create Custom Number</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("security")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <Shield className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Security Settings</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("notifications")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <Bell className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Notifications</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("support")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <HelpCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Help & Support</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("share")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <Share2 className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Share App</span>
            </div>
          </button>

          <button
            className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
            onClick={() => onNavigate("privacyPolicy")}
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-base">Privacy Policy</span>
            </div>
          </button>
        </div>

        <div className="mt-8">
          <button
            className="flex items-center justify-center w-full bg-red-50 p-4 rounded-xl text-red-600 font-medium"
            onClick={() => onNavigate("home")}
          >
            <LogOut className="h-5 w-5 mr-2" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}


"use client"
import { useState } from "react"
import { ArrowLeft, User, Mail, Phone, Camera, Save } from "lucide-react"

export default function EditProfileScreen({ onNavigate }) {
  const [profile, setProfile] = useState({
    firstName: "Lombe",
    lastName: "Munakalilamsiku",
    phoneNumber: "260952768272",
    email: "lombe@example.com",
  })

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Save profile changes
    onNavigate("profile")
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Status Bar */}
      <div className="bg-emerald-500 py-2 px-4">
        <div className="flex justify-end">
          <div className="text-white text-xs">10:27</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("profile")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Edit Profile</h1>
      </header>

      {/* Profile Picture */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 flex flex-col items-center">
        <div className="relative mb-2">
          <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-500 font-bold text-2xl">
              {profile.firstName.charAt(0)}
              {profile.lastName.charAt(0)}
            </span>
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md">
            <Camera className="h-5 w-5 text-emerald-500" />
          </button>
        </div>
        <p className="text-white text-lg font-medium">Change Profile Picture</p>
      </div>

      {/* Form */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={profile.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  disabled
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Phone number cannot be changed</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-emerald-500 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Save className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  )
}


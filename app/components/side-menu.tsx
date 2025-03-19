"use client"
import { Home, BarChart2, MessageSquare, Tag, Layers, Phone, HelpCircle, Share2, User, FileText } from "lucide-react"

export default function SideMenu({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="w-4/5 bg-white h-full shadow-xl">
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
        <div className="p-2">
          <div className="space-y-1">
            {[
              { icon: Home, label: "Home", screen: "home" },
              { icon: BarChart2, label: "Create Custom Number", screen: "customNumber" },
              { icon: MessageSquare, label: "WhatsApp Chatbot", screen: "chatbot" },
              { icon: Tag, label: "Promotions", screen: "offers" },
              { icon: Layers, label: "Value Added Services", screen: "services" },
              { icon: Phone, label: "Contact Us", screen: "support" },
              { icon: HelpCircle, label: "FAQs", screen: "help" },
              { icon: Share2, label: "Share", screen: "share" },
              { icon: User, label: "Profile", screen: "profile" },
              { icon: FileText, label: "Privacy Policy", screen: "privacy" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center w-full p-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => onNavigate(item.screen)}
              >
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <item.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-base">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dimmed Overlay */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={() => onNavigate("home")}></div>
    </div>
  )
}


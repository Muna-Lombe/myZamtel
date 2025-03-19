"use client"
import { useState } from "react"
import { User, ChevronDown, Phone, Smartphone, Bell, Zap, CreditCard, Gift, BarChart2, ShoppingBag } from "lucide-react"
import { Search } from "@/app/components/ui/search"
import { ServiceCard } from "@/app/components/ui/service-card"
import { StatusBadge } from "@/app/components/ui/status-badge"
import { BottomNavigation, BottomNavigationItem } from "@/app/components/ui/bottom-navigation"

export default function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotification, setShowNotification] = useState(true)

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Status Bar */}
      <div className="bg-emerald-500 py-2 px-4">
        <div className="flex justify-end">
          <div className="text-white text-xs">11:37</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 pb-6">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate("profile")}>
            <User className="h-6 w-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-500 font-bold text-xs">Zamtel</span>
            </div>
          </div>
          <button onClick={() => onNavigate("notifications")}>
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Location Bar */}
      <div className="bg-white px-4 py-3 -mt-3 rounded-t-3xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">You are in</span>
            <div className="flex items-center">
              <span className="font-medium">Lusaka</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
            </div>
          </div>
          <button className="text-emerald-500 text-sm font-medium">Change</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pt-4 pb-4 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <Search
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Notification */}
        {showNotification && (
          <div className="bg-amber-50 rounded-xl p-4 mb-6 relative">
            <button className="absolute right-2 top-2 text-gray-500" onClick={() => setShowNotification(false)}>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 mt-1">
                <Bell className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Verify your account</h3>
                <p className="text-sm text-gray-600 mt-1">Please confirm your personal data to access all features</p>
              </div>
            </div>
          </div>
        )}

        {/* User Info */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 rounded-full p-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-white text-xs">L</span>
                </div>
              </div>
              <div>
                <h3 className="text-emerald-600 font-medium">Lombe</h3>
                <div className="flex items-center text-gray-600">
                  <span>260952768272</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-emerald-500 text-white px-5 py-3 rounded-lg font-medium"
                onClick={() => onNavigate("dashboard")}
              >
                Mobile Money
              </button>
            </div>
          </div>
        </div>

        {/* Balance Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="bg-emerald-100 rounded-full p-3">
              <Smartphone className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-emerald-600 font-medium">ZMW 0.01</h3>
              <p className="text-gray-600 text-sm">Main Balance</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="bg-emerald-100 rounded-full p-3">
              <Phone className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-emerald-600 font-medium">0 Mins</h3>
              <p className="text-gray-600 text-sm">Voice Balance</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Services</h2>
          <div className="grid grid-cols-3 gap-3">
            <ServiceCard
              icon={<Zap className="h-6 w-6 text-emerald-500" />}
              label="Pay Bills"
              onClick={() => onNavigate("makePayment")}
            />
            <ServiceCard
              icon={<CreditCard className="h-6 w-6 text-emerald-500" />}
              label="Mobile Money"
              onClick={() => onNavigate("dashboard")}
            />
            <ServiceCard
              icon={<Gift className="h-6 w-6 text-emerald-500" />}
              label="Offers"
              onClick={() => onNavigate("offers")}
            />
            <ServiceCard icon={<BarChart2 className="h-6 w-6 text-emerald-500" />} label="My Usage" />
            <ServiceCard
              icon={<ShoppingBag className="h-6 w-6 text-emerald-500" />}
              label="Shop"
              onClick={() => onNavigate("shop")}
            />
            <ServiceCard
              icon={<Phone className="h-6 w-6 text-emerald-500" />}
              label="Support"
              onClick={() => onNavigate("support")}
            />
          </div>
        </div>

        {/* Recharge Offers */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800">Recharge Offers</h2>
            <a href="#" className="text-emerald-500 font-medium text-sm">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {/* Women's day offer */}
            <div className="bg-purple-600 rounded-xl p-3 text-white">
              <div className="flex justify-between items-start">
                <div className="text-xs mb-1">Women's day offer</div>
                <StatusBadge variant="warning">Special</StatusBadge>
              </div>
              <h3 className="text-xl font-bold mb-1">K49</h3>
              <p className="text-sm">10GB, 120Mins</p>
              <p className="text-xs mt-1">Valid for 30 Days</p>
            </div>

            {/* K2 */}
            <div className="bg-purple-600 rounded-xl p-3 text-white">
              <div className="flex justify-between items-start">
                <div className="text-xs mb-1">Daily Bundle</div>
                <StatusBadge variant="info">Popular</StatusBadge>
              </div>
              <h3 className="text-xl font-bold mb-1">K2</h3>
              <p className="text-sm">7Mins, 50SMS</p>
              <p className="text-xs mt-1">Valid for 24 Hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation>
        <BottomNavigationItem
          icon={
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          }
          label="Home"
          active={true}
        />
        <BottomNavigationItem
          icon={
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          label="Money"
          onClick={() => onNavigate("dashboard")}
        />
        <BottomNavigationItem
          icon={
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
          label="Services"
          onClick={() => onNavigate("services")}
        />
        <BottomNavigationItem
          icon={
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          }
          label="Shop"
          onClick={() => onNavigate("shop")}
        />
        <BottomNavigationItem
          icon={
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          label="Help"
          onClick={() => onNavigate("help")}
        />
      </BottomNavigation>
    </div>
  )
}


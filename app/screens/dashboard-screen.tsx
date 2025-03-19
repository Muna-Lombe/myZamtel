"use client"
import { useState } from "react"
import {
  User,
  ArrowUpRight,
  Smartphone,
  Download,
  FileText,
  Send,
  CreditCard,
  Wallet,
  QrCode,
  ChevronRight,
  Bell,
  Plus,
    } from "lucide-react"
import { Search } from "@/app/components/ui/search"
import { TabButton } from "@/app/components/ui/tab-button"
  import { ActionCard } from "@/app/components/ui/action-card"

  export default function DashboardScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

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
          <h1 className="text-xl font-semibold">Mobile Money</h1>
          <button onClick={() => onNavigate("notifications")}>
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 -mt-3 overflow-hidden flex flex-col">
        {/* Balance Card */}
        <div className="bg-white rounded-t-3xl shadow-sm px-4 pt-6 pb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-600 font-medium">Balance (ZMW)</h2>
            <button className="text-emerald-500 text-sm font-medium flex items-center">
              <Plus className="h-4 w-4 mr-1" />
              Top Up
            </button>
          </div>
          <p className="text-4xl font-bold text-gray-800 mb-2">30,592.25</p>

          <div className="flex items-center gap-2 mt-4">
            <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")}>
              All
            </TabButton>
            <TabButton active={activeTab === "recent"} onClick={() => setActiveTab("recent")}>
              Recent
            </TabButton>
            <TabButton active={activeTab === "favorites"} onClick={() => setActiveTab("favorites")}>
              Favorites
            </TabButton>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
          {/* Search */}
          <div className="mb-6">
            <Search
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery("")}
            />
          </div>

          {/* Pay from balance section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pay from balance</h2>
            <div className="grid grid-cols-3 gap-3">
              <ActionCard
                icon={<QrCode className="h-5 w-5 text-white" />}
                label="Pay by QR"
                onClick={() => onNavigate("qrPayment")}
              />
              <ActionCard
                icon={<Smartphone className="h-5 w-5 text-white" />}
                label="Pay Bills"
                onClick={() => onNavigate("makePayment")}
              />
              <ActionCard
                icon={<Wallet className="h-5 w-5 text-white" />}
                label="Transfer"
                onClick={() => onNavigate("transferOptions")}
              />
            </div>
          </div>

          {/* Transfer Options */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Transfer Money</h2>
              <button className="text-emerald-500 text-sm font-medium">View All</button>
            </div>

            <div className="space-y-3">
              <button
                className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                onClick={() => onNavigate("sendMoney")}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Smartphone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">Zamtel to Zamtel</h3>
                    <p className="text-sm text-gray-500">Send to Zamtel users</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button
                className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                onClick={() => onNavigate("otherNetworks")}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Send className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">Other Networks</h3>
                    <p className="text-sm text-gray-500">Airtel, MTN</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button
                className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                onClick={() => onNavigate("bankTransfer")}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <CreditCard className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">Bank Transfer</h3>
                    <p className="text-sm text-gray-500">Zanaco, FNB, ABSA, UBA, ZNBS</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button
                className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                onClick={() => onNavigate("internationalTransfer")}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <ArrowUpRight className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">International Transfer</h3>
                    <p className="text-sm text-gray-500">Send money abroad</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button
                className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                onClick={() => onNavigate("cashOut")}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Download className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">Cash Out</h3>
                    <p className="text-sm text-gray-500">Withdraw at agent</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
              <button className="text-emerald-500 text-sm font-medium" onClick={() => onNavigate("transactionHistory")}>
                View All
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Empty State */}
              <div className="p-8 flex flex-col items-center justify-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-center">No recent transactions</p>
                <button className="mt-4 text-emerald-500 font-medium text-sm">Make your first transaction</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 w-full bg-white border-t border-gray-200 py-2 px-4">
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
          <div className="flex flex-col items-center">
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
        </div>
      </div>
    </div>
  )
}


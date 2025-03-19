"use client"
import { useState } from "react"
import {
  ArrowLeft,
  SearchIcon,
  Smartphone,
  Send,
  CreditCard,
  ArrowUpRight,
  Download,
  User,
  ChevronRight,
} from "lucide-react"
import { Search } from "@/app/components/ui/search"
import { TabButton } from "@/app/components/ui/tab-button"

export default function TransferOptionsScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const transferOptions = [
    {
      id: "zamtel",
      icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
      title: "Zamtel to Zamtel",
      description: "Send to Zamtel users",
      navigate: () => onNavigate("sendMoney"),
    },
    {
      id: "airtel",
      icon: <Send className="h-5 w-5 text-emerald-600" />,
      title: "Airtel Money",
      description: "Send to Airtel users",
      navigate: () => onNavigate("otherNetworks"),
    },
    {
      id: "mtn",
      icon: <Send className="h-5 w-5 text-emerald-600" />,
      title: "MTN Mobile Money",
      description: "Send to MTN users",
      navigate: () => onNavigate("otherNetworks"),
    },
    {
      id: "zanaco",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "Zanaco Bank",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "fnb",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "FNB Bank",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "absa",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "ABSA Bank",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "uba",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "UBA Bank",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "znbs",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "ZNBS",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "indobank",
      icon: <CreditCard className="h-5 w-5 text-emerald-600" />,
      title: "Indo Bank",
      description: "Transfer to bank account",
      navigate: () => onNavigate("bankTransfer"),
    },
    {
      id: "international",
      icon: <ArrowUpRight className="h-5 w-5 text-emerald-600" />,
      title: "International Transfer",
      description: "Send money abroad",
      navigate: () => onNavigate("internationalTransfer"),
    },
    {
      id: "cashout",
      icon: <Download className="h-5 w-5 text-emerald-600" />,
      title: "Cash Out",
      description: "Withdraw at agent",
      navigate: () => onNavigate("cashOut"),
    },
    {
      id: "contacts",
      icon: <User className="h-5 w-5 text-emerald-600" />,
      title: "Send to Contact",
      description: "Choose from your contacts",
      navigate: () => onNavigate("contacts"),
    },
  ]

  const filteredOptions = searchQuery
    ? transferOptions.filter(
        (option) =>
          option.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : transferOptions

  const displayOptions =
    activeTab === "all"
      ? filteredOptions
      : activeTab === "mobile"
        ? filteredOptions.filter((option) => ["zamtel", "airtel", "mtn"].includes(option.id))
        : filteredOptions.filter((option) => ["zanaco", "fnb", "absa", "uba", "znbs", "indobank"].includes(option.id))

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("dashboard")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Transfer Money</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <Search
            placeholder="Search transfer options..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <TabButton active={activeTab === "all"} onClick={() => setActiveTab("all")}>
            All
          </TabButton>
          <TabButton active={activeTab === "mobile"} onClick={() => setActiveTab("mobile")}>
            Mobile Money
          </TabButton>
          <TabButton active={activeTab === "bank"} onClick={() => setActiveTab("bank")}>
            Banks
          </TabButton>
        </div>

        {/* Transfer Options List */}
        <div className="space-y-3">
          {displayOptions.map((option) => (
            <button
              key={option.id}
              className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
              onClick={option.navigate}
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 rounded-full p-3">{option.icon}</div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">{option.title}</h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>

        {displayOptions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <SearchIcon className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-center">No transfer options found</p>
          </div>
        )}
      </div>
    </div>
  )
}


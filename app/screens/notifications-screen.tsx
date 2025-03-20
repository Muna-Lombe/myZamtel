"use client"

import { useState } from "react"
import { ArrowLeft, Bell, Filter, Trash2 } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface NotificationsScreenProps {
  onNavigate: (screen: string) => void
}

interface Notification {
  id: string
  title: string
  message: string
  time: string
  isRead: boolean
  type: "transaction" | "promotion" | "system"
}

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all")
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Money Received",
      message: "You have received K250 from John Doe",
      time: "2 hours ago",
      isRead: false,
      type: "transaction",
    },
    {
      id: "2",
      title: "50% Off on Data Bundles",
      message: "Limited time offer: Get 50% off on all data bundles",
      time: "Yesterday",
      isRead: true,
      type: "promotion",
    },
    {
      id: "3",
      title: "Security Alert",
      message: "Your account was accessed from a new device",
      time: "2 days ago",
      isRead: true,
      type: "system",
    },
    {
      id: "4",
      title: "Bill Payment Successful",
      message: "Your electricity bill payment of K150 was successful",
      time: "3 days ago",
      isRead: true,
      type: "transaction",
    },
    {
      id: "5",
      title: "New Feature Available",
      message: "You can now pay for parking using our app",
      time: "1 week ago",
      isRead: true,
      type: "system",
    },
  ])

  const [filterType, setFilterType] = useState<"all" | "transaction" | "promotion" | "system">("all")

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, isRead: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "unread" && notification.isRead) return false
    if (filterType !== "all" && notification.type !== filterType) return false
    return true
  })

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("profile")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Notifications</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => {
              const filterMenu = document.getElementById("filterMenu")
              if (filterMenu) {
                filterMenu.classList.toggle("hidden")
              }
            }}
          >
            <Filter className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={markAllAsRead}>
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Menu */}
      <div id="filterMenu" className="hidden bg-white border-b p-4">
        <h3 className="text-sm font-medium mb-2">Filter by type</h3>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filterType === "all" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            onClick={() => setFilterType("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filterType === "transaction" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            onClick={() => setFilterType("transaction")}
          >
            Transactions
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filterType === "promotion" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            onClick={() => setFilterType("promotion")}
          >
            Promotions
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filterType === "system" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            onClick={() => setFilterType("system")}
          >
            System
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            className={`flex-1 py-3 text-center font-medium ${activeTab === "all" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"
              }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${activeTab === "unread" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"
              }`}
            onClick={() => setActiveTab("unread")}
          >
            Unread
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b ${notification.isRead ? "bg-white" : "bg-emerald-50"}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-full mr-3 ${notification.type === "transaction"
                      ? "bg-emerald-100 text-emerald-600"
                      : notification.type === "promotion"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                >
                  <Bell className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
                <button
                  className="p-2 text-gray-400 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteNotification(notification.id)
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No notifications yet</p>
          </div>
        )}
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


"use client"
import { useState } from "react"
import { ArrowLeft, Filter, Calendar, ArrowUpRight, ArrowDownLeft, Search } from "lucide-react"
import { StatusBadge } from "@/app/components/ui/status-badge"

export default function TransactionHistoryScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample transaction data
  const transactions = [
    {
      id: "tx1",
      type: "sent",
      name: "John Doe",
      amount: "250.00",
      date: "18 Mar 2025",
      time: "14:32",
      status: "completed",
    },
    {
      id: "tx2",
      type: "received",
      name: "Mary Smith",
      amount: "500.00",
      date: "15 Mar 2025",
      time: "09:15",
      status: "completed",
    },
    {
      id: "tx3",
      type: "bill",
      name: "ZESCO Electricity",
      amount: "120.00",
      date: "10 Mar 2025",
      time: "16:45",
      status: "completed",
    },
    {
      id: "tx4",
      type: "cashout",
      name: "Agent #45678",
      amount: "300.00",
      date: "5 Mar 2025",
      time: "11:20",
      status: "completed",
    },
  ]

  const filteredTransactions =
    activeFilter === "all" ? transactions : transactions.filter((tx) => tx.type === activeFilter)

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
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Transaction History</h1>
      </header>

      {/* Filter Bar */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b">
        <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
          <button
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "all" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "sent" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter("sent")}
          >
            Sent
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "received"
                ? "bg-emerald-500 text-white"
                : activeFilter === "bill" 
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter("received")}
          >
            Received
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "bill" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter("bill")}
          >
            Bills
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === "cashout" ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter("cashout")}
          >
            Cash Out
          </button>
        </div>
        <button className="flex items-center text-gray-700 gap-2 px-3 py-2 rounded-full bg-gray-100">
          <Filter className="h-5 w-5" />
          <span className="text-sm">Filter</span>
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-gray-100 pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Date Range */}
      <div className="px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">4th March 2025 - 18th March 2025</h2>
              <button className="text-gray-500">
                <Calendar className="h-5 w-5" />
              </button>
            </div>
            <div className="h-1 bg-emerald-500 mt-2 rounded-full"></div>
          </div>

          {/* Transactions List */}
          {filteredTransactions.length > 0 ? (
            <div className="divide-y">
              {filteredTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-full p-2 ${
                          transaction.type === "sent" || transaction.type === "bill" || transaction.type === "cashout"
                            ? "bg-red-100"
                            : "bg-green-100"
                        }`}
                      >
                        {transaction.type === "sent" ||
                        transaction.type === "bill" ||
                        transaction.type === "cashout" ? (
                          <ArrowUpRight
                            className={`h-5 w-5 ${
                              transaction.type === "sent" ||
                              transaction.type === "bill" ||
                              transaction.type === "cashout"
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          />
                        ) : (
                          <ArrowDownLeft className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{transaction.name}</h3>
                        <p className="text-xs text-gray-500">
                          {transaction.date} • {transaction.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          transaction.type === "sent" || transaction.type === "bill" || transaction.type === "cashout"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {transaction.type === "sent" || transaction.type === "bill" || transaction.type === "cashout"
                          ? "-"
                          : "+"}
                        ZMW {transaction.amount}
                      </p>
                      <StatusBadge variant={transaction.status === "completed" ? "success" : "info"} className="mt-1">
                        {transaction.status}
                      </StatusBadge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <p className="text-gray-500">No transactions found for this period</p>
            </div>
          )}
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


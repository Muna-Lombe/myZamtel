"use client"
import { X, Signal, CreditCard, Phone, User, Wifi } from "lucide-react"

export default function ServiceOptionsModal({ onNavigate }) {
  return (
    <div className="flex flex-col h-full">
      {/* Dimmed Background */}
      <div className="flex-1 bg-black bg-opacity-50">
        {/* Main Dashboard (Blurred) */}
        <div className="h-full flex flex-col opacity-60 pointer-events-none">
          <header className="bg-emerald-500 text-white p-4 flex items-center">
            <div className="mr-2">
              <div className="h-6 w-6 bg-white bg-opacity-20 rounded" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-10 h-10 bg-white rounded-full" />
            </div>
          </header>

          <div className="flex-1 p-5">
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-2" />
              <div className="h-10 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-gray-200 rounded-full p-4 mb-2 h-14 w-14" />
                  <div className="h-4 bg-gray-200 rounded w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="bg-white rounded-t-3xl absolute bottom-0 left-0 right-0 shadow-2xl">
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">What would you like to do?</h2>
            <button className="text-gray-500" onClick={() => onNavigate("dashboard")}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {/* Recharge */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("recharge")}>
              <div className="bg-emerald-100 rounded-full p-5 mb-3 transition-all duration-200 hover:bg-emerald-200 active:scale-95">
                <Signal className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">Recharge</span>
            </div>

            {/* Balance */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("balance")}>
              <div className="bg-emerald-100 rounded-full p-5 mb-3 transition-all duration-200 hover:bg-emerald-200 active:scale-95">
                <CreditCard className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">Balance</span>
            </div>

            {/* BuyMinutes */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("buyMinutes")}>
              <div className="bg-emerald-100 rounded-full p-5 mb-3 transition-all duration-200 hover:bg-emerald-200 active:scale-95">
                <Phone className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">BuyMinutes</span>
            </div>

            {/* BuyForOther */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("buyForOther")}>
              <div className="bg-emerald-100 rounded-full p-5 mb-3 transition-all duration-200 hover:bg-emerald-200 active:scale-95">
                <User className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">BuyForOther</span>
            </div>

            {/* FTTH */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("ftth")}>
              <div className="bg-emerald-100 rounded-full p-5 mb-3 transition-all duration-200 hover:bg-emerald-200 active:scale-95">
                <Wifi className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">FTTH</span>
            </div>

            {/* Yango */}
            <div className="flex flex-col items-center" onClick={() => onNavigate("yango")}>
              <div className="bg-red-500 rounded-xl p-3 mb-3 transition-all duration-200 hover:bg-red-600 active:scale-95 h-16 w-16 flex items-center justify-center">
                <span className="text-white font-bold text-base">YANGO</span>
              </div>
              <span className="text-sm text-gray-700">Yango</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


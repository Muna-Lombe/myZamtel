"use client"
import { useState } from "react"
import { ArrowLeft, CreditCard, ChevronDown, User } from "lucide-react"

const banks = [
  { id: "zanaco", name: "Zanaco Bank" },
  { id: "fnb", name: "FNB Bank" },
  { id: "absa", name: "ABSA Bank" },
  { id: "uba", name: "UBA Bank" },
  { id: "znbs", name: "ZNBS" },
  { id: "indobank", name: "Indo Bank" },
]

export default function BankTransferScreen({ onNavigate }) {
  const [selectedBank, setSelectedBank] = useState(null)
  const [showBankDropdown, setShowBankDropdown] = useState(false)
  const [accountNumber, setAccountNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")

  const handleContinue = () => {
    if (selectedBank && accountNumber && amount) {
      onNavigate("pinEntry")
    }
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("transferOptions")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Bank Transfer</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-xl font-medium text-gray-800 mb-6">Transfer Details</h2>

          <div className="space-y-5">
            {/* Bank Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank*</label>
              <button
                type="button"
                className="w-full flex items-center justify-between p-4 text-base border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onClick={() => setShowBankDropdown(!showBankDropdown)}
              >
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>{selectedBank ? banks.find((b) => b.id === selectedBank).name : "Choose a bank"}</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>

              {/* Dropdown */}
              {showBankDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                  {banks.map((bank) => (
                    <button
                      key={bank.id}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center"
                      onClick={() => {
                        setSelectedBank(bank.id)
                        setShowBankDropdown(false)
                      }}
                    >
                      <CreditCard className="h-5 w-5 text-emerald-600 mr-3" />
                      {bank.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Number*</label>
              <div className="relative">
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter account number"
                  className="w-full p-4 text-base border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-100 p-2 rounded-md">
                  <User className="h-5 w-5 text-emerald-600" />
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (ZMW)*</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full p-4 text-base border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Note (Optional)</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note"
                className="w-full p-4 text-base border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Continue Button */}
            <button
              className={`w-full py-4 text-lg rounded-lg font-medium transition-all ${
                selectedBank && accountNumber && amount
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleContinue}
              disabled={!selectedBank || !accountNumber || !amount}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"
import { useState } from "react"
import { Menu, ChevronDown, SearchIcon } from "lucide-react"
import { Search } from "@/app/components/ui/search"

export default function HelpScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState("network")

  const toggleFaq = (faq: string) => {
    if (expandedFaq === faq) {
      setExpandedFaq(null as any)
    } else {
      setExpandedFaq(faq)
    }
  }

  const faqs = [
    {
      id: "network",
      question: "How can I check for Zamtel network coverage in my area?",
      answer:
        "You can check Zamtel network coverage by dialing *100# and selecting option 5 for network coverage, or by visiting our website at https://www.zamtel.zm/coverage",
    },
    {
      id: "portfolio",
      question: "What is Zamtel's product portfolio?",
      answer: "You can check our product portfolio on https://www.zamtel.zm",
    },
    {
      id: "retail",
      question: "How can I check for Zamtel's retail presence?",
      answer:
        "You can find our retail stores by visiting our website or using the store locator feature in this app under the Services menu.",
    },
    {
      id: "bank",
      question: "Can I send money from my Zamtel Mobile Money wallet to my bank account?",
      answer:
        "Yes, you can transfer money from your Zamtel Mobile Money wallet to your bank account. Go to Transfer Money > Bank Transfer and follow the instructions.",
    },
    {
      id: "network-transfer",
      question: "Can I send money from my Zamtel Mobile Money wallet to another network?",
      answer:
        "Yes, you can send money to other networks like Airtel and MTN. Go to Transfer Money > Other Networks and follow the instructions.",
    },
    {
      id: "atm",
      question: "Can I withdraw money from my Zamtel Mobile Money using an ATM?",
      answer:
        "Yes, you can withdraw money from your Zamtel Mobile Money account using ATMs that support cardless withdrawals. Follow the instructions on the ATM screen.",
    },
    {
      id: "agent",
      question: "Can I withdraw money from my Zamtel Mobile Money using Kazang, Zoona or other agents?",
      answer:
        "Yes, you can withdraw money from your Zamtel Mobile Money account at any authorized agent. Use the Cash Out feature and provide the agent code.",
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

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
        <button className="mr-2" onClick={() => onNavigate("home")}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center">FAQs</h1>
      </header>

      {/* Search */}
      <div className="p-4 bg-white border-b">
        <Search
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery("")}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h2 className="font-medium text-gray-800 pr-4">{faq.question}</h2>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === faq.id && (
                  <div className="p-4 pt-0 border-t">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <SearchIcon className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-center">No FAQs found matching your search</p>
            <button className="mt-4 text-emerald-500 font-medium" onClick={() => setSearchQuery("")}>
              Clear search
            </button>
          </div>
        )}
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
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xs text-emerald-500 font-medium mt-1">Help</span>
          </div>
        </div>
      </div>
    </div>
  )
}


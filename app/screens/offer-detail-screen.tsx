"use client"

import { useState } from "react"
import { ArrowLeft, Clock, AlertCircle } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface OfferDetailScreenProps {
  onNavigate: (screen: string) => void
  offerId?: string
}

export default function OfferDetailScreen({ onNavigate, offerId = "1" }: OfferDetailScreenProps) {
  // Mock offer data
  const offer = {
    id: "1",
    title: "50% Off on All Data Bundles",
    description: "Get 50% off on all data bundles for a limited time. Offer valid for both new and existing customers.",
    discount: "50%",
    validUntil: "March 31, 2025",
    image: "/placeholder.svg?height=200&width=400",
    code: "DATA50",
    terms: [
      "Offer valid until March 31, 2025",
      "Applicable on all data bundles",
      "Cannot be combined with other offers",
      "Limit one redemption per customer",
      "Zamtel reserves the right to modify or cancel this offer at any time",
    ],
    howToUse: [
      "Select your preferred data bundle",
      "Enter promo code DATA50 at checkout",
      "Enjoy 50% off on your purchase",
    ],
    bundles: [
      {
        name: "Daily Bundle",
        data: "1 GB",
        originalPrice: "K20",
        discountedPrice: "K10",
        validity: "24 hours",
      },
      {
        name: "Weekly Bundle",
        data: "5 GB",
        originalPrice: "K75",
        discountedPrice: "K37.50",
        validity: "7 days",
      },
      {
        name: "Monthly Bundle",
        data: "20 GB",
        originalPrice: "K250",
        discountedPrice: "K125",
        validity: "30 days",
      },
    ],
  }

  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center border-b">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("offers")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">Offer Details</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Offer Banner */}
        <div className="relative">
          <img src={offer.image || "/placeholder.svg"} alt={offer.title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2 w-fit">
              {offer.discount} OFF
            </div>
            <h2 className="text-white text-xl font-bold">{offer.title}</h2>
          </div>
        </div>

        {/* Offer Details */}
        <div className="p-4">
          <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <p className="text-gray-700 mb-4">{offer.description}</p>

            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Clock className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Valid Until</p>
                <p className="font-medium">{offer.validUntil}</p>
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-lg p-3 bg-gray-50 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Promo Code</p>
                  <p className="font-bold text-lg tracking-wider">{offer.code}</p>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${copied ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500 text-white"
                    }`}
                  onClick={copyCode}
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                This offer is available for a limited time only. Redeem before the expiration date to enjoy the
                discount.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <h3 className="font-medium mb-3">How to Use</h3>
            <ol className="space-y-3">
              {offer.howToUse.map((step, index) => (
                <li key={index} className="flex">
                  <div className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
            <h3 className="font-medium mb-3">Available Bundles</h3>
            <div className="space-y-3">
              {offer.bundles.map((bundle, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{bundle.name}</h4>
                    <div className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs">{bundle.validity}</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{bundle.data}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through mr-2">{bundle.originalPrice}</span>
                      <span className="font-bold text-emerald-600">{bundle.discountedPrice}</span>
                    </div>
                    <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-sm">Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-medium mb-3">Terms & Conditions</h3>
            <ul className="space-y-2">
              {offer.terms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-2"></div>
                  <p className="text-sm text-gray-700">{term}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t">
        <button
          className="w-full py-3 bg-emerald-500 text-white rounded-lg font-medium"
          onClick={() => onNavigate("offers")}
        >
          Redeem Offer
        </button>
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


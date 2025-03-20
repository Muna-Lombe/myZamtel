"use client"

import { useState } from "react"
import { ArrowLeft, Star, Share2, Clock, Check } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface ServiceDetailScreenProps {
  onNavigate: (screen: string) => void
  serviceId?: string
}

export default function ServiceDetailScreen({ onNavigate, serviceId = "1" }: ServiceDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<"details" | "how-to-use" | "terms">("details")

  // Mock service data
  const service = {
    id: "1",
    name: "Zamtel Home Internet",
    category: "Internet",
    rating: 4.8,
    reviews: 245,
    description: "High-speed fiber internet for your home with unlimited data and reliable connection.",
    image: "/placeholder.svg?height=200&width=200",
    features: [
      "Speeds up to 100 Mbps",
      "Unlimited data usage",
      "Free installation",
      "24/7 customer support",
      "No contract required",
    ],
    howToUse: [
      "Select the Zamtel Home Internet package that suits your needs",
      "Complete the application form with your details",
      "Schedule an installation appointment",
      "Our technicians will visit your home for installation",
      "Start enjoying high-speed internet",
    ],
    terms: [
      "Minimum subscription period is 1 month",
      "Installation fee may apply in some areas",
      "Service availability depends on coverage area",
      "Fair usage policy applies",
      "Prices are subject to change with notice",
    ],
    plans: [
      {
        name: "Basic",
        speed: "10 Mbps",
        price: "K250",
        period: "per month",
      },
      {
        name: "Standard",
        speed: "50 Mbps",
        price: "K450",
        period: "per month",
      },
      {
        name: "Premium",
        speed: "100 Mbps",
        price: "K750",
        period: "per month",
      },
    ],
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("services")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Service Details</h1>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Service Header */}
        <div className="bg-white p-4 border-b">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
              <img src={service.image || "/placeholder.svg"} alt={service.name} className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <div className="flex items-center mt-1">
                <span className="text-gray-500 text-sm">{service.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm">{service.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{service.reviews} reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b">
          <div className="flex">
            <button
              className={`flex-1 py-3 text-center font-medium ${activeTab === "details" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${activeTab === "how-to-use" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("how-to-use")}
            >
              How to Use
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${activeTab === "terms" ? "text-emerald-500 border-b-2 border-emerald-500" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("terms")}
            >
              Terms
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "details" && (
            <div>
              <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-700">{service.description}</p>

                <h3 className="font-medium mt-4 mb-2">Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-medium mb-4">Available Plans</h3>
                <div className="space-y-3">
                  {service.plans.map((plan, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{plan.name}</h4>
                          <p className="text-sm text-gray-500">{plan.speed}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-emerald-600">{plan.price}</p>
                          <p className="text-xs text-gray-500">{plan.period}</p>
                        </div>
                      </div>
                      <button className="w-full mt-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium">
                        Select Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "how-to-use" && (
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-medium mb-4">How to Use</h3>
              <ol className="space-y-3">
                {service.howToUse.map((step, index) => (
                  <li key={index} className="flex">
                    <div className="bg-emerald-100 text-emerald-600 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-700">
                  The installation process typically takes 1-3 business days depending on your location and availability
                  of technicians.
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-medium mb-4">Terms & Conditions</h3>
              <ul className="space-y-3">
                {service.terms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 mr-2"></div>
                    <p className="text-gray-700">{term}</p>
                  </li>
                ))}
              </ul>

              <button
                className="w-full mt-6 py-2 border border-emerald-500 text-emerald-500 rounded-lg text-sm font-medium"
                onClick={() => onNavigate("privacy-policy")}
              >
                View Full Terms & Conditions
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white border-t">
        <button
          className="w-full py-3 bg-emerald-500 text-white rounded-lg font-medium"
          onClick={() => onNavigate("services")}
        >
          Subscribe to Service
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
          <div className="bg-emerald-500 rounded-full p-1">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <span className="text-xs text-emerald-500 font-medium mt-1">Services</span>
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


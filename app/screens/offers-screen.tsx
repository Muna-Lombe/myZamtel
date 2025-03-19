"use client"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { TabButton } from "@/app/components/ui/tab-button"
import { StatusBadge } from "@/app/components/ui/status-badge"

export default function OffersScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [activeTab, setActiveTab] = useState("niyathu")
  const [expandedSection, setExpandedSection] = useState("24hrs")

  const toggleSection = (section:string) => {
    if (expandedSection === section) {
      setExpandedSection(null as any)
    } else {
      setExpandedSection(section)
    }
  }

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
        <h1 className="text-xl font-semibold flex-1 text-center">OFFERS</h1>
      </header>

      {/* Tabs */}
      <div className="bg-white p-3 border-b">
        <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
          <TabButton
            active={activeTab === "niyathu"}
            onClick={() => setActiveTab("niyathu")}
            className="whitespace-nowrap"
          >
            Ni Yathu
          </TabButton>
          <TabButton active={activeTab === "vibez"} onClick={() => setActiveTab("vibez")} className="whitespace-nowrap">
            Vibez Data
          </TabButton>
          <TabButton active={activeTab === "other"} onClick={() => setActiveTab("other")} className="whitespace-nowrap">
            Other Mobile Data Bundles
          </TabButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* 24 Hours Section */}
        <div className="mb-4">
          <button
            className="w-full bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            onClick={() => toggleSection("24hrs")}
          >
            <h2 className="text-lg font-bold">24 Hrs - Ni Yathu</h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${expandedSection === "24hrs" ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === "24hrs" && (
            <div className="mt-3 space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K2 Daily NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">24 Hrs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K2</span>
                    <StatusBadge variant="info" className="ml-2">
                      Popular
                    </StatusBadge>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K3_Daily NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">24 Hrs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K5_Daily NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">24 Hrs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K5</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K10_Daily NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">24 Hrs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K10</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 7 Days Section */}
        <div className="mb-4">
          <button
            className="w-full bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            onClick={() => toggleSection("7days")}
          >
            <h2 className="text-lg font-bold">7 Days - Ni Yathu</h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${expandedSection === "7days" ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === "7days" && (
            <div className="mt-3 space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K15 Weekly NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">7 Days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K15</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K25 Weekly NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">7 Days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K25</span>
                    <StatusBadge variant="warning" className="ml-2">
                      Best Value
                    </StatusBadge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 30 Days Section */}
        <div className="mb-4">
          <button
            className="w-full bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            onClick={() => toggleSection("30days")}
          >
            <h2 className="text-lg font-bold">30 Days - Ni Yathu</h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${expandedSection === "30days" ? "rotate-180" : ""}`}
            />
          </button>

          {expandedSection === "30days" && (
            <div className="mt-3 space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K49 Monthly NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">30 Days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K49</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 rounded-full p-2 mt-1">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">K99 Monthly NiYathu AllNet</h3>
                      <p className="text-sm text-gray-500">30 Days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-purple-600">K99</span>
                    <StatusBadge variant="success" className="ml-2">
                      Popular
                    </StatusBadge>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  )
}


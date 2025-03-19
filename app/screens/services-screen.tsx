"use client"
import { useState } from "react"
import { Menu, SearchIcon, Wifi, Phone, Home, Briefcase, Headphones, Server, ChevronRight } from "lucide-react"
import { Search } from "@/app/components/ui/search"
import { StatusBadge } from "@/app/components/ui/status-badge"

export default function ServicesScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const serviceCategories = [
    { id: "all", name: "All" },
    { id: "mobile", name: "Mobile" },
    { id: "internet", name: "Internet" },
    { id: "home", name: "Home" },
    { id: "business", name: "Business" },
  ]

  const services = [
    {
      id: "mobile-data",
      name: "Mobile Data",
      description: "Browse, stream, and download",
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      category: "mobile",
      featured: true,
    },
    {
      id: "voice-bundles",
      name: "Voice Bundles",
      description: "Talk more for less",
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      category: "mobile",
    },
    {
      id: "fiber",
      name: "Fiber Internet",
      description: "High-speed home internet",
      icon: <Wifi className="h-6 w-6 text-emerald-600" />,
      category: "internet",
      featured: true,
    },
    {
      id: "lte",
      name: "4G LTE",
      description: "Wireless broadband",
      icon: <Wifi className="h-6 w-6 text-emerald-600" />,
      category: "internet",
    },
    {
      id: "home-wifi",
      name: "Home WiFi",
      description: "Connect your entire home",
      icon: <Home className="h-6 w-6 text-emerald-600" />,
      category: "home",
    },
    {
      id: "tv-bundles",
      name: "TV Bundles",
      description: "Entertainment packages",
      icon: <Home className="h-6 w-6 text-emerald-600" />,
      category: "home",
    },
    {
      id: "business-internet",
      name: "Business Internet",
      description: "Enterprise connectivity",
      icon: <Briefcase className="h-6 w-6 text-emerald-600" />,
      category: "business",
    },
    {
      id: "cloud",
      name: "Cloud Services",
      description: "Secure business solutions",
      icon: <Server className="h-6 w-6 text-emerald-600" />,
      category: "business",
    },
    {
      id: "support",
      name: "Customer Support",
      description: "Get help with your services",
      icon: <Headphones className="h-6 w-6 text-emerald-600" />,
      category: "all",
    },
  ]

  const filteredServices = services.filter(
    (service) =>
      (activeCategory === "all" || service.category === activeCategory) &&
      (searchQuery === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const featuredServices = services.filter((service) => service.featured)

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Status Bar */}
      <div className="bg-emerald-500 py-2 px-4">
        <div className="flex justify-end">
          <div className="text-white text-xs">11:37</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex items-center shadow-md">
        <button className="mr-2" onClick={() => onNavigate("home")}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center">Services</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <Search
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 mb-6 pb-1 no-scrollbar">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category.id ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Services */}
        {activeCategory === "all" && searchQuery === "" && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Featured Services</h2>
            <div className="grid grid-cols-2 gap-3">
              {featuredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-4 shadow-sm flex flex-col"
                  onClick={() => onNavigate(`service-${service.id}`)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-emerald-100 rounded-full p-2">{service.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-800">{service.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <StatusBadge variant="success" className="self-start mt-2">
                    Featured
                  </StatusBadge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {activeCategory === "all"
              ? "All Services"
              : activeCategory === "mobile"
                ? "Mobile Services"
                : activeCategory === "internet"
                  ? "Internet Services"
                  : activeCategory === "home"
                    ? "Home Services"
                    : "Business Services"}
          </h2>

          {filteredServices.length > 0 ? (
            <div className="space-y-3">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                  onClick={() => onNavigate(`service-${service.id}`)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 rounded-full p-3">{service.icon}</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-800">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <SearchIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-center">No services found</p>
              {searchQuery && (
                <button className="mt-4 text-emerald-500 font-medium" onClick={() => setSearchQuery("")}>
                  Clear search
                </button>
              )}
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
          <div className="flex flex-col items-center">
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
        </div>
      </div>
    </div>
  )
}


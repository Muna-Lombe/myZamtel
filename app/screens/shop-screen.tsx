"use client"
import { useState } from "react"
import { Menu, SearchIcon, ChevronRight, ShoppingCart } from "lucide-react"
import { Search } from "@/app/components/ui/search"
import { TabButton } from "@/app/components/ui/tab-button"
import { StatusBadge } from "@/app/components/ui/status-badge"

export default function ShopScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [cartCount, setCartCount] = useState(0)

  const productCategories = [
    { id: "all", name: "All" },
    { id: "phones", name: "Phones" },
    { id: "tablets", name: "Tablets" },
    { id: "modems", name: "Modems" },
    { id: "accessories", name: "Accessories" },
  ]

  const products = [
    {
      id: "samsung-a54",
      name: "Samsung Galaxy A54",
      price: "4,999",
      category: "phones",
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
      discount: "15% OFF",
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      price: "12,999",
      category: "phones",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "tecno-spark",
      name: "Tecno Spark 10",
      price: "2,499",
      category: "phones",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "ipad-10",
      name: "iPad 10th Gen",
      price: "8,999",
      category: "tablets",
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
    },
    {
      id: "samsung-tab-a8",
      name: "Samsung Tab A8",
      price: "3,999",
      category: "tablets",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "4g-router",
      name: "4G LTE Router",
      price: "1,299",
      category: "modems",
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
    },
    {
      id: "mifi-device",
      name: "Portable MiFi Device",
      price: "799",
      category: "modems",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "wireless-earbuds",
      name: "Wireless Earbuds",
      price: "499",
      category: "accessories",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "power-bank",
      name: "20000mAh Power Bank",
      price: "399",
      category: "accessories",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "all" || product.category === activeCategory) &&
      (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const featuredProducts = products.filter((product) => product.featured)

  const addToCart = (e:any, productId:string) => {
    e.stopPropagation()
    setCartCount((prev) => prev + 1)
    // Add product to cart logic would go here
  }

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
        <h1 className="text-xl font-semibold flex-1 text-center">Shop</h1>
        <button className="relative" onClick={() => onNavigate("cart")}>
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Search */}
        <div className="mb-6">
          <Search
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 mb-6 pb-1 no-scrollbar">
          {productCategories.map((category) => (
            <TabButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </TabButton>
          ))}
        </div>

        {/* Featured Products */}
        {activeCategory === "all" && searchQuery === "" && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Featured Products</h2>
            <div className="grid grid-cols-2 gap-3">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-4 shadow-sm flex flex-col"
                  onClick={() => onNavigate(`product-${product.id}`)}
                >
                  <div className="flex justify-center mb-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-gray-800">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-emerald-600 font-bold">K{product.price}</p>
                    {product.discount && <StatusBadge variant="warning">{product.discount}</StatusBadge>}
                  </div>
                  <button
                    className="mt-3 bg-emerald-500 text-white py-2 rounded-lg text-sm font-medium"
                    onClick={(e) => addToCart(e, product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Products */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {activeCategory === "all"
              ? "All Products"
              : activeCategory === "phones"
                ? "Phones"
                : activeCategory === "tablets"
                  ? "Tablets"
                  : activeCategory === "modems"
                    ? "Modems"
                    : "Accessories"}
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="space-y-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm"
                  onClick={() => onNavigate(`product-${product.id}`)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-16 w-16 object-contain"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{product.name}</h3>
                      <p className="text-emerald-600 font-bold">K{product.price}</p>
                      {product.discount && (
                        <StatusBadge variant="warning" className="mt-1">
                          {product.discount}
                        </StatusBadge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                    <button
                      className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-medium"
                      onClick={(e) => addToCart(e, product.id)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <SearchIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-center">No products found</p>
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
          <div className="flex flex-col items-center" onClick={() => onNavigate("services")}>
            <div className="bg-gray-100 rounded-full p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <span className="text-xs text-gray-500 mt-1">Services</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-500 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <span className="text-xs text-emerald-500 font-medium mt-1">Shop</span>
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


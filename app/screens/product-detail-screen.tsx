"use client"
import { useState } from "react"
import { ArrowLeft, Star, ShoppingCart, Share2, Heart } from "lucide-react"
import { StatusBadge } from "@/app/components/ui/status-badge"

export default function ProductDetailScreen({ onNavigate, productId = "samsung-a54" }: { onNavigate: (screen: string) => void, productId: string|null }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  // This would typically come from an API or props
  const product = {
    id: "samsung-a54",
    name: "Samsung Galaxy A54",
    price: "4,999",
    originalPrice: "5,899",
    discount: "15% OFF",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    description:
      "The Samsung Galaxy A54 features a 6.4-inch Super AMOLED display, 128GB storage, 8GB RAM, and a 50MP main camera. Powered by a 5000mAh battery with fast charging support.",
    specs: [
      "6.4-inch Super AMOLED display",
      "Exynos 1380 processor",
      "8GB RAM, 128GB storage",
      "50MP + 12MP + 5MP triple camera",
      "32MP front camera",
      "5000mAh battery",
      "Android 13",
    ],
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    // Add to cart logic would go here
    onNavigate("cart")
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
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
        <button className="mr-2" onClick={() => onNavigate("shop")}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Product Details</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Images */}
        <div className="bg-white p-4 flex justify-center">
          <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="h-64 w-64 object-contain" />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <button
                className={`rounded-full p-2 ${isFavorite ? "bg-red-100" : "bg-gray-100"}`}
                onClick={toggleFavorite}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-500"}`} />
              </button>
            </div>

            <div className="flex items-center mt-2">
              <div className="flex items-center text-amber-500">
                <Star className="h-4 w-4 fill-amber-500" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-gray-500">{product.reviews} reviews</span>
            </div>

            <div className="flex items-center mt-3">
              <span className="text-2xl font-bold text-emerald-600">K{product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">K{product.originalPrice}</span>
              )}
              {product.discount && (
                <StatusBadge variant="warning" className="ml-2">
                  {product.discount}
                </StatusBadge>
              )}
            </div>

            {product.inStock ? (
              <StatusBadge variant="success" className="mt-2">
                In Stock
              </StatusBadge>
            ) : (
              <StatusBadge variant="error" className="mt-2">
                Out of Stock
              </StatusBadge>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-gray-700 mr-3">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-1 text-gray-500 hover:bg-gray-100" onClick={decreaseQuantity}>
                  -
                </button>
                <span className="px-3 py-1 text-gray-800">{quantity}</span>
                <button className="px-3 py-1 text-gray-500 hover:bg-gray-100" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                className="bg-emerald-500 text-white py-3 rounded-lg font-medium flex items-center justify-center"
                onClick={addToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="bg-white border border-emerald-500 text-emerald-500 py-3 rounded-lg font-medium flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Specifications</h3>
            <ul className="space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 mr-2"></div>
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
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


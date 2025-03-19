"use client"
import { useState } from "react"
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"

export default function CartScreen({ onNavigate }) {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: "samsung-a54",
      name: "Samsung Galaxy A54",
      price: 4999,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "wireless-earbuds",
      name: "Wireless Earbuds",
      price: 499,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const deliveryFee = 50
  const total = subtotal + deliveryFee

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
        <h1 className="text-xl font-semibold flex-1 text-center mr-6">Shopping Cart</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-16 w-16 object-contain mr-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-emerald-600 font-bold">K{item.price.toLocaleString()}</p>
                    </div>
                    <button className="text-red-500 p-2" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex justify-end mt-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                      <button
                        className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">K{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">K{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 my-2 pt-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-bold">Total</span>
                  <span className="text-emerald-600 font-bold">K{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="w-full bg-emerald-500 text-white py-4 rounded-lg font-medium flex items-center justify-center"
              onClick={() => onNavigate("checkout")}
            >
              Proceed to Checkout
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 text-center mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <button
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium"
              onClick={() => onNavigate("shop")}
            >
              Continue Shopping
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


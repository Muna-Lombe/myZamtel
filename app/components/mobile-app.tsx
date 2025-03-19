"use client"
import { useState } from "react"
import HomeScreen from "../screens/home-screen"
import DashboardScreen from "../screens/dashboard-screen"
import MakePaymentScreen from "../screens/make-payment-screen"
import SendMoneyScreen from "../screens/send-money-screen"
import CashOutScreen from "../screens/cash-out-screen"
import TransactionHistoryScreen from "../screens/transaction-history-screen"
import InternationalMoneyTransferScreen from "../screens/international-money-transfer-screen"
import ServiceOptionsModal from "../screens/service-options-modal"
import PinEntryScreen from "../screens/pin-entry-screen"
import SideMenu from "./side-menu"
import ProfileScreen from "../screens/profile-screen"
import SupportScreen from "../screens/support-screen"
import EditProfileScreen from "../screens/edit-profile-screen"
import TransferOptionsScreen from "../screens/transfer-options-screen"
import BankTransferScreen from "../screens/bank-transfer-screen"
import OtherNetworksScreen from "../screens/other-networks-screen"
import OffersScreen from "../screens/offers-screen"
import HelpScreen from "../screens/help-screen"
import ServicesScreen from "../screens/services-screen"
import ShopScreen from "../screens/shop-screen"
import ProductDetailScreen from "../screens/product-detail-screen"
import CartScreen from "../screens/cart-screen"

export default function MobileApp() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [previousScreen, setPreviousScreen] = useState<string | null>(null)
  const [productId, setProductId] = useState<string | null>(null)

  const handleNavigate = (screen: string, productId?: string) => {
    setPreviousScreen(currentScreen)
    setCurrentScreen(screen)
    if (productId) {
      setProductId(productId)
    }
  }

  const handleBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen)
      setPreviousScreen(null)
    } else {
      setCurrentScreen("home")
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />
      case "dashboard":
        return <DashboardScreen onNavigate={handleNavigate} />
      case "makePayment":
        return <MakePaymentScreen onNavigate={handleNavigate} />
      case "sendMoney":
        return <SendMoneyScreen onNavigate={handleNavigate} />
      case "cashOut":
        return <CashOutScreen onNavigate={handleNavigate} />
      case "transactionHistory":
        return <TransactionHistoryScreen onNavigate={handleNavigate} />
      case "internationalTransfer":
        return <InternationalMoneyTransferScreen onNavigate={handleNavigate} />
      case "serviceOptions":
        return <ServiceOptionsModal onNavigate={handleNavigate} />
      case "pinEntry":
        return <PinEntryScreen onNavigate={handleNavigate} />
      case "sideMenu":
        return <SideMenu onNavigate={handleNavigate} />
      case "profile":
        return <ProfileScreen onNavigate={handleNavigate} />
      case "support":
        return <SupportScreen onNavigate={handleNavigate} />
      case "editProfile":
        return <EditProfileScreen onNavigate={handleNavigate} />
      case "transferOptions":
        return <TransferOptionsScreen onNavigate={handleNavigate} />
      case "bankTransfer":
        return <BankTransferScreen onNavigate={handleNavigate} />
      case "otherNetworks":
        return <OtherNetworksScreen onNavigate={handleNavigate} />
      case "offers":
        return <OffersScreen onNavigate={handleNavigate} />
      case "help":
        return <HelpScreen onNavigate={handleNavigate} />
      case "services":
        return <ServicesScreen onNavigate={handleNavigate} />
      case "shop":
        return <ShopScreen onNavigate={handleNavigate} />
      case "productDetail":
        return <ProductDetailScreen productId={productId} onNavigate={handleNavigate} />
      case "cart":
        return <CartScreen onNavigate={handleNavigate} />
      default:
        return <HomeScreen onNavigate={handleNavigate} />
    }
  }

  return <div className="max-w-md mx-auto h-screen overflow-hidden bg-gray-50 relative">{renderScreen()}</div>
}


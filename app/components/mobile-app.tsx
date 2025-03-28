"use client"
import { useState } from "react"
import HomeScreen from "./screens/home-screen"
import DashboardScreen from "./screens/dashboard-screen"
import MakePaymentScreen from "./screens/make-payment-screen"
import SendMoneyScreen from "./screens/send-money-screen"
import CashOutScreen from "./screens/cash-out-screen"
import TransactionHistoryScreen from "./screens/transaction-history-screen"
import InternationalMoneyTransferScreen from "./screens/international-money-transfer-screen"
import ServiceOptionsModal from "./screens/service-options-modal"
import PinEntryScreen from "./screens/pin-entry-screen"
import SideMenu from "./side-menu"
import ProfileScreen from "./screens/profile-screen"
import SupportScreen from "./screens/support-screen"
import EditProfileScreen from "./screens/edit-profile-screen"
import TransferOptionsScreen from "./screens/transfer-options-screen"
import BankTransferScreen from "./screens/bank-transfer-screen"
import OtherNetworksScreen from "./screens/other-networks-screen"
import OffersScreen from "./screens/offers-screen"
import HelpScreen from "./screens/help-screen"
import ServicesScreen from "./screens/services-screen"
import ShopScreen from "./screens/shop-screen"
import ProductDetailScreen from "./screens/product-detail-screen"
import CartScreen from "./screens/cart-screen"
import NotificationsScreen from "./screens/notifications-screen"
import PrivacyPolicyScreen from "./screens/privacy-policy-screen"
import SecuritySettingsScreen from "./screens/security-settings-screen"
import OfferDetailScreen from "./screens/offer-detail-screen"
import CreateCustomNumberScreen from "./screens/create-custom-number-screen"
import ServiceDetailScreen from "./screens/service-show-screen"

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
        return <HomeScreen />
      case "notifications":
        return <NotificationsScreen/>
      case "dashboard":
        return <DashboardScreen />
      case "makePayment":
        return <MakePaymentScreen />
      case "sendMoney":
        return <SendMoneyScreen />
      case "cashOut":
        return <CashOutScreen />
      case "transactionHistory":
        return <TransactionHistoryScreen />
      case "internationalTransfer":
        return <InternationalMoneyTransferScreen />
      case "serviceOptions":
        return <ServiceOptionsModal onClose={()=>""} />
      case "pinEntry":
        return <PinEntryScreen />
      case "sideMenu":
        return <SideMenu onNavigate={handleNavigate} />
      case "profile":
        return <ProfileScreen />
      case "customNumber":
        return <CreateCustomNumberScreen />
      case "support":
        return <SupportScreen />
      case "privacy":
        return <PrivacyPolicyScreen />
      case "security":
        return <SecuritySettingsScreen />
      case "editProfile":
        return <EditProfileScreen />
      case "transferOptions":
        return <TransferOptionsScreen />
      case "bankTransfer":
        return <BankTransferScreen />
      case "otherNetworks":
        return <OtherNetworksScreen />
      case "offers":
        return <OffersScreen />
      case "offerDetail":
        return <OfferDetailScreen />
      case "help":
        return <HelpScreen />
      case "services":
        return <ServicesScreen />
      case "serviceDetail":
        return <ServiceDetailScreen /> 
      case "shop":
        return <ShopScreen />
      case "productDetail":
        return <ProductDetailScreen route={{ productId }} />
      case "cart":
        return <CartScreen />
      default:
        return <HomeScreen />
    }
  }

  return <div className="max-w-md mx-auto h-screen overflow-hidden bg-gray-50 relative">{renderScreen()}</div>
}


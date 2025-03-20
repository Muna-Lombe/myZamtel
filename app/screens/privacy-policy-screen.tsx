"use client"

import { ArrowLeft } from "lucide-react"
import { BottomNavigation } from "@/app/components/ui/bottom-navigation"

interface PrivacyPolicyScreenProps {
  onNavigate: (screen: string) => void
}

export default function PrivacyPolicyScreen({ onNavigate }: PrivacyPolicyScreenProps) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 flex items-center border-b">
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2" onClick={() => onNavigate("security-settings")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">Privacy Policy</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-gray-500 mb-4">Last updated: March 15, 2025</p>

          <div className="space-y-4 text-gray-700">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p>
                Welcome to the Zamtel Mobile Money App. We respect your privacy and are committed to protecting your
                personal data. This privacy policy will inform you about how we look after your personal data when you
                use our mobile application and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Data We Collect</h3>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Identity Data: includes first name, last name, username or similar identifier, date of birth.</li>
                <li>Contact Data: includes billing address, email address and telephone numbers.</li>
                <li>Financial Data: includes bank account details, payment card details, and transaction history.</li>
                <li>
                  Technical Data: includes internet protocol (IP) address, your login data, browser type and version,
                  device type, operating system and platform.
                </li>
                <li>Usage Data: includes information about how you use our mobile application and services.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. How We Use Your Data</h3>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your transactions.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our app, products/services, marketing or customer relationships.</li>
                <li>To recommend products or services that may be of interest to you.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal
                data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Data Retention</h3>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Your Legal Rights</h3>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <div className="mt-2">
                <p>Email: privacy@zamtel.co.zm</p>
                <p>Phone: +260 211 123456</p>
                <p>Address: Zamtel House, Corner of Church and Cairo Roads, Lusaka, Zambia</p>
              </div>
            </section>
          </div>
        </div>
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


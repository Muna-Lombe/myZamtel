import MobileApp from "./components/mobile-app"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 md:p-24 bg-gray-100">
      <div className="relative w-full max-w-md h-[800px] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
        <MobileApp />
      </div>
    </main>
  )
}


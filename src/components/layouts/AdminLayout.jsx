import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

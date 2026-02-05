import { Link } from "react-router-dom"
import { Megaphone, ChevronRight } from "lucide-react"

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import heroImage from "../../assets/website/images/lambakin.jpg"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(16,185,129,0.9),
              rgba(5,150,105,0.9)
            ),
            url(${heroImage})
          `,
        }}
      >
        <Header variant="transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-36 text-white w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Welcome to <br />
              <span className="font-bold">Barangay Lambakin</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Your official digital hub for barangay announcements and
              community updates.
            </p>

            <p className="text-lg md:text-xl text-white/80 mb-10">
              Log in to access barangay services or stay informed through
              verified announcements.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/login"
                className="px-8 py-3 rounded-lg bg-white/20 border border-white/40
                           hover:bg-white/30 transition font-medium text-lg"
              >
                Login / Register
              </Link>

              <Link
                to="/announcements"
                className="px-8 py-3 rounded-lg bg-white text-emerald-700
                           hover:bg-gray-100 transition font-semibold text-lg"
              >
                View Announcements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS PREVIEW */}
      <main className="flex-1 bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <header className="mb-8">
              <h2 className="text-2xl font-semibold mb-1">
                Announcements
              </h2>
              <p className="text-gray-600">
                Latest updates and official notices from the barangay.
              </p>
            </header>

            <div className="space-y-6">
              <div className="flex gap-4 items-start border-b pb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-emerald-600" />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium">
                    Barangay Assembly This Saturday
                  </h3>
                  <p className="text-sm text-gray-500">
                    March 20, 2024
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Please attend for updates and an open forum for
                    resident concerns.
                  </p>
                </div>

                <Link
                  to="/announcements/1"
                  className="flex items-center text-sm text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/announcements"
                className="inline-flex items-center gap-1 text-emerald-700 font-medium hover:text-emerald-800"
              >
                View All Announcements
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

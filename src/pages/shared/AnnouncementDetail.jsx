import { useParams, Link } from "react-router-dom"
import { ChevronLeft, Clock, User } from "lucide-react"
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { announcements } from "./data/announcements"

export default function AnnouncementDetail() {
  const { id } = useParams()

  const announcement = announcements.find(
    (a) => String(a.id) === id
  )

  if (!announcement) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Announcement not found.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-14">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/announcements" className="hover:underline">
              Announcements
            </Link>{" "}
            / <span className="text-gray-700">{announcement.title}</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h1 className="text-3xl font-semibold mb-3">
              {announcement.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span>Posted on {announcement.date}</span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Barangay Lambakin Officials
              </span>
            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed mb-8">
              {announcement.content}
            </p>

            {/* Details box */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-medium mb-4">
                Announcement Details
              </h3>

              <p className="flex items-center gap-2 text-sm mb-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <strong>Time:</strong> {announcement.time}
              </p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm">
                {announcement.category}
              </span>
            </div>

            {/* Back */}
            <Link
              to="/announcements"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Announcements
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

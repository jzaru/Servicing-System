import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Search, Megaphone, ChevronLeft, ChevronRight } from "lucide-react"

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { announcements } from "./data/announcements"

const ITEMS_PER_PAGE = 10
const CATEGORIES = [
  "All Announcements",
  "Community Meeting",
  "Community Event",
  "Health Advisory"
]

export default function AllAnnouncements() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All Announcements")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return announcements.filter((a) => {
      const matchesSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.content.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === "All Announcements" || a.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-2">
            Announcements
          </h1>
          <p className="text-gray-600 mb-8">
            Stay informed with the latest announcements and updates from
            Barangay Lambakin.
          </p>

          {/* SEARCH + FILTER */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setPage(1)
              }}
              className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* LIST */}
          <div className="bg-white rounded-xl shadow-sm divide-y">
            {paginated.length === 0 && (
              <p className="p-6 text-center text-gray-500">
                No announcements found.
              </p>
            )}

            {paginated.map((a) => (
              <Link
                key={a.id}
                to={`/announcements/${a.id}`}
                className="block p-6 hover:bg-emerald-50 transition group"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-lg group-hover:text-emerald-700">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Posted on {a.date}
                    </p>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {a.content}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs">
                        {a.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        Time: {a.time}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="p-2 disabled:opacity-40"
              >
                <ChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    page === i + 1
                      ? "bg-emerald-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="p-2 disabled:opacity-40"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

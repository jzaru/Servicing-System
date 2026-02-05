import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/layout/common/ProtectedRoute"

/* Public */
import HomePage from "./pages/public/HomePage"
import Login from "./pages/public/Login"
import Register from "./pages/public/Register"

/* Shared */
import AllAnnouncements from "./pages/shared/AllAnnouncements"
import AnnouncementDetail from "./pages/shared/AnnouncementDetail"

/* Layouts */
import AdminLayout from "./components/layouts/AdminLayout"
import OfficialLayout from "./components/layouts/OfficialLayout"
import ResidentLayout from "./components/layouts/ResidentLayout"

/* Pages */
import AdminDashboard from "./pages/admin/AdminDashboard"
import OfficialDashboard from "./pages/official/OfficialDashboard"
import ResidentDashboard from "./pages/resident/ResidentDashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/announcements" element={<AllAnnouncements />} />
        <Route path="/announcements/:id" element={<AnnouncementDetail />} />

        {/* ANNOUNCEMENTS (PUBLIC) */}
        <Route path="/announcements" element={<AllAnnouncements />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* OFFICIAL */}
        <Route
          path="/official"
          element={
            <ProtectedRoute roles={["official"]}>
              <OfficialLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<OfficialDashboard />} />
        </Route>

        {/* RESIDENT */}
        <Route
          path="/resident"
          element={
            <ProtectedRoute roles={["resident"]}>
              <ResidentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ResidentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import { Link, useNavigate } from "react-router-dom"
import { getUser, logout } from "../features/services/auth"

export default function Header({ variant = "default" }) {
  const navigate = useNavigate()
  const user = getUser()
  const transparent = variant === "transparent"

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header
      className={`w-full ${
        transparent
          ? "absolute top-0 left-0 z-20 text-white"
          : "bg-emerald-700 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="w-8 h-8 rounded-full bg-yellow-400 text-emerald-900 flex items-center justify-center font-bold">
            ≡
          </span>
          <span>Barangay Digital Hub</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-sm">
          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`px-4 py-1.5 rounded-md font-medium transition ${
                  transparent
                    ? "bg-white text-emerald-700 hover:bg-gray-100"
                    : "bg-white text-emerald-700 hover:bg-gray-100"
                }`}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="capitalize opacity-90">
                {user.role}
              </span>
              <button
                onClick={handleLogout}
                className="hover:underline"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

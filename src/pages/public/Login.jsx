import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { login } from "../../components/features/services/auth"

export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    try {
      const user = login(username, password)

      // Redirect based on role
      if (user.role === "admin") navigate("/admin")
      else if (user.role === "official") navigate("/official")
      else navigate("/resident")
    } catch (err) {
      setError("Invalid username or password")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-center mb-2">
            Login
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Sign in to access your account
          </p>

          {/* Demo credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm mb-6">
            <p className="font-medium text-blue-700 mb-1">
              Demo Credentials:
            </p>
            <ul className="space-y-1 text-blue-700">
              <li>• Resident: <code>resident / 123</code></li>
              <li>• Official: <code>official / 123</code></li>
              <li>• Admin: <code>admin / 123</code></li>
            </ul>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md p-3 mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 text-white py-2.5 rounded-md hover:bg-emerald-800 transition"
            >
              Login
            </button>
          </form>

          {/* Footer link */}
          <p className="text-sm text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-emerald-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

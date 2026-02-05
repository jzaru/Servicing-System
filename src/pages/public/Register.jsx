import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, X } from "lucide-react"

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

export default function Register() {
  const [role, setRole] = useState("resident")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!agreed) {
      alert("You must agree to the Terms and Conditions.")
      return
    }

    if (role === "official") {
      alert(
        "Registration submitted.\n\nBarangay Official accounts require admin approval before activation."
      )
    } else {
      alert(
        "Registration submitted.\n\nResident accounts must be activated at the Barangay Office.\nPlease bring a valid HOA Certificate."
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-10">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-center mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Register to access barangay services and announcements
          </p>

          {/* Role toggle */}
          <div className="flex gap-2 mb-8">
            <button
              type="button"
              onClick={() => setRole("resident")}
              className={`flex-1 py-2 rounded-md font-medium transition ${
                role === "resident"
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Resident
            </button>

            <button
              type="button"
              onClick={() => setRole("official")}
              className={`flex-1 py-2 rounded-md font-medium transition ${
                role === "official"
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Barangay Official
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="First Name *"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <input
                required
                placeholder="Last Name *"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <input
              required
              placeholder="09XX XXX XXXX"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            />

            <input
              required
              type="email"
              placeholder="Email Address *"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            />

            <input
              required
              placeholder="Username *"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
            />

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Password *"
                  className="w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="relative">
                <input
                  required
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password *"
                  className="w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Notices */}
            {role === "resident" && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 text-sm">
                <strong>Resident Account Notice:</strong>
                <br />
                After registration, please visit the Barangay Office to activate
                your account.
                <br />
                <span className="font-medium">
                  Bring a valid HOA Certificate for verification.
                </span>
              </div>
            )}

            {role === "official" && (
              <div className="bg-blue-50 border border-blue-200 text-blue-700 rounded-lg p-4 text-sm">
                <strong>Official Account Notice:</strong>
                <br />
                Barangay Official accounts require admin approval before
                activation.
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-emerald-700 font-medium underline hover:text-emerald-800"
                >
                  Terms and Conditions
                </button>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 text-white py-3 rounded-md hover:bg-emerald-800 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </main>

      <Footer />

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white max-w-xl w-full mx-4 rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Terms and Conditions
            </h2>

            <div className="text-sm text-gray-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                By registering for the Barangay Digital Hub, you agree to provide
                accurate and truthful information.
              </p>
              <p>
                Accounts are subject to verification and approval by Barangay
                authorities.
              </p>
              <p>
                Misuse of the system or providing false information may result in
                account suspension or termination.
              </p>
              <p>
                Resident accounts require in-person verification at the Barangay
                Office.
              </p>
              <p>
                Barangay Official accounts require administrative approval.
              </p>
              <p>
                The Barangay reserves the right to update these terms at any
                time.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowTerms(false)}
                className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

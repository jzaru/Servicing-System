const STORAGE_KEY = "barangay_auth_user"

// Mock users (for now)
const USERS = {
  resident: { username: "resident", password: "123", role: "resident" },
  official: { username: "official", password: "123", role: "official" },
  admin: { username: "admin", password: "123", role: "admin" },
}

export function login(username, password) {
  const user = Object.values(USERS).find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    throw new Error("Invalid credentials")
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getUser() {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : null
}

export function isAuthenticated() {
  return !!getUser()
}

export function hasRole(allowedRoles = []) {
  const user = getUser()
  return user && allowedRoles.includes(user.role)
}

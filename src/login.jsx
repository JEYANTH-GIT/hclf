import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const navigate = useNavigate()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function handleLogin() {
    // ✅ Email format check
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address")
      return
    } else {
      setEmailError("")
    }

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Login successful") {
          navigate("/dashboard")
        } else {
          alert(data)
        }
      })
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  )
}

export default Login

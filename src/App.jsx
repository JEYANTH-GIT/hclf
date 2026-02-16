import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login"
import Signup from "./signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<h2>Welcome inside 🎉</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import ClientLayout from "./layouts/ClientLayout/ClientLayout"
import AuthLayout from "./layouts/AuthLayout/AuthLayout"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} >
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Route>
        <Route element={<ClientLayout />} >
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
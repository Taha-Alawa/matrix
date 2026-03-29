import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import ClientLayout from "./layouts/ClientLayout/ClientLayout"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayout />} >
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
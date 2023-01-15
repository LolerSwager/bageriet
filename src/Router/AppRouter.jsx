import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hjem" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/kontact" element={<Contact />} />
                <Route path="/Contact" element={<Contact />} />
                {/*  <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    )
}

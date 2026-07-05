import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

// Route configuration for the application pages
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Farmersdashboard from "../pages/Farmersdashboard";
import FieldDashboard from "../pages/FieldDashboard";
import About from "../pages/About";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/farmer-dashboard" element={<Farmersdashboard />} />
        <Route path="/field-dashboard" element={<FieldDashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

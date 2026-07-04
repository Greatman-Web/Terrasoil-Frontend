import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Farmersdashboard from "../pages/Farmersdashboard";
import FieldDashboard from "../pages/FieldDashboard";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/farmer-dashboard" element={<Farmersdashboard />} />
        <Route path="/field-dashboard" element={<FieldDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

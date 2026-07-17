import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

// Route configuration for the application pages
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Farmersdashboard from "../pages/Farmersdashboard";
import FieldDashboard from "../pages/FieldDashboard";
import About from "../pages/About";
import Soiltest from "../pages/Soiltest";
import Soiltestdetails from "../pages/Soiltestdetails";
import HouseholdDashboard from "../pages/HouseholdDashboard";
import HouseholdSummary from "../pages/HouseholdSummary";
import Recommendations from "../pages/Recommendations";

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
        <Route path="/soil-test" element={<Soiltest />} />
        <Route path="/soil-test-details" element={<Soiltestdetails />} />
        <Route path="/soil-test/:testId" element={<Soiltestdetails />} />
        <Route path="/household-dashboard" element={<HouseholdDashboard />} />
        <Route path="/household-summary" element={<HouseholdSummary />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

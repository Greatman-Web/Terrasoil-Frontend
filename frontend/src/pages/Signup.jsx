import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("");

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>

      {/* FORM SECTION */}
      <div className="form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Middle Name (optional)" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>

      <h3>Select Your Role</h3>

      {/* ROLE SELECTION */}
      <div className="roles">
        <div
          className={`card ${role === "farmer" ? "active" : ""}`}
          onClick={() => setRole("farmer")}
        >
          <h4>Farmer</h4>
          <p>Track and manage your farm's soil health</p>
        </div>

        <div
          className={`card ${role === "advisor" ? "active" : ""}`}
          onClick={() => setRole("advisor")}
        >
          <h4>Advisor</h4>
          <p>Guide and support farmers with insights</p>
        </div>

        <div
          className={`card ${role === "researcher" ? "active" : ""}`}
          onClick={() => setRole("researcher")}
        >
          <h4>Researcher</h4>
          <p>Analyze data across multiple farms</p>
        </div>
      </div>

      <button className="create-btn" disabled={!role}>
        Create Account
      </button>

      <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
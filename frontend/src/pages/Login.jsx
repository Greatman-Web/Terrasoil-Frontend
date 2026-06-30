import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  // Local state to track which dashboard role is selected
  const [role, setRole] = useState("");
  // Navigation hook for route changes
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="login-brand" onClick={() => navigate("/")}>
          <div className="login-logo">🌱</div>
          <h2>TerraSoil</h2>
        </div>

        <div className="login-nav">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </header>

      <main className="login-container">
        <section className="login-card">
          <h1>Welcome back</h1>
          <p className="login-subtitle">
            Login to monitor your soil health and manage your farm insights.
          </p>

          <div className="login-form">
            <input type="email" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
          </div>

          <h3>Preview dashboard as:</h3>

          <div className="role-buttons">
            <button
              className={role === "farmer" ? "active-role" : ""}
              onClick={() => setRole("farmer")}
            >
              Farmer
            </button>

            <button
              className={role === "advisor" ? "active-role" : ""}
              onClick={() => setRole("advisor")}
            >
              Advisor
            </button>

            <button
              className={role === "researcher" ? "active-role" : ""}
              onClick={() => setRole("researcher")}
            >
              Researcher
            </button>
          </div>

          <p className="selected-role">
            Selected Role: <strong>{role || "None"}</strong>
          </p>

          <button className="login-btn" disabled={!role}>
            Login
          </button>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
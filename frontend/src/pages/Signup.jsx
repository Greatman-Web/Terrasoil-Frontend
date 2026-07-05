import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {
  // Tracks the selected account role: farmer, advisor, or researcher
  const [role, setRole] = useState("");
  // Hook for navigating between pages
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  return (
    <div className="signup-page">

      {/* Header */}

      <header className="signup-header">

        <div className="signup-brand" onClick={() => navigate("/")}>
          <div className="signup-logo">🌱</div>
          <h2>TerraSoil</h2>
        </div>

        <div className="signup-nav">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>

      </header>

      {/* Card */}

      <main className="signup-container">

        <div className="signup-card">

          <h1>Create Your Account</h1>

          <p className="signup-subtitle">
            Join TerraSoil and start monitoring soil health with intelligent recommendations.
          </p>

          <div className="signup-form">

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}/>

            <input
              type="text"
              placeholder="Middle Name (Optional)"
            />

            <input type="text" placeholder="Last Name" />

            <input
              type="tel"
              placeholder="phone number"
            />

            <input
              type="password"
              placeholder="Password"
            />

          </div>

          <h3>Select Your Role</h3>

          <div className="role-cards">

            <button
              className={role === "farmer" ? "role-card active-role" : "role-card"}
              onClick={() => setRole("farmer")}
            >
              <h4>🌾 Farmer</h4>

              <p>
                Track your farm, crops and soil health.
              </p>
            </button>

            <button
              className={role === "advisor" ? "role-card active-role" : "role-card"}
              onClick={() => setRole("advisor")}
            >
              <h4>👨‍🌾 Advisor</h4>

              <p>
                Help farmers with recommendations.
              </p>
            </button>

            <button
              className={role === "researcher" ? "role-card active-role" : "role-card"}
              onClick={() => setRole("researcher")}
            >
              <h4>🔬 Researcher</h4>

              <p>
                Analyse agricultural data and trends.
              </p>
            </button>

          </div>

          <button
           className="create-btn"
           disabled={!role}
           onClick={() =>
           navigate("/farmer-dashboard", {
         state: {
           username: firstName,
           isNewUser: true,
          },
        })
       }>
       Create Account
       </button>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </main>

    </div>
  );
}
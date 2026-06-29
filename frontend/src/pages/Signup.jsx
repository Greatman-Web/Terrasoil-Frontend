import { useState } from "react";
import { useNavigate,} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  return (
    <div>

    {/* Header */}
    <div>
      <h2>FARM & SOIL HEALTH MONITORING APP</h2>

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
    
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
        <div>
          <button onClick={() => setRole("farmer")}>Farmer</button>
          <p>Track and manage your farm's soil health</p>
        </div>

        <div>
         <button onClick={() => setRole("advisor")}>Advisor</button>
          <p>Guide and support farmers with insights</p>
        </div>

        <div>
          <button onClick={() => setRole("researcher")}>Researcher</button>
          <p>Analyze data across multiple farms</p>
        </div>
      </div>

      <button className="create-btn" disabled={!role}>
        Create Account
      </button>

      <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
}
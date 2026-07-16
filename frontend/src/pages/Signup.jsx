import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

 const handleCreateAccount = () => {
  if (!firstName || !lastName || !phoneNumber || !password || !role) {
    setError("Please complete all required fields.");
    return;
  }

  if (!/^[0-9]+$/.test(phoneNumber)) {
    setError("Phone number must contain numbers only.");
    return;
  }

  if (phoneNumber.length < 8) {
    setError("Phone number is too short.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  const userData = {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    password,
    role,
  };

  localStorage.setItem("terraSoilUser", JSON.stringify(userData));

  setError("");
  setAccountCreated(true);
};

  if (accountCreated) {
  return (
    <div className="signup-page">

      <header className="signup-header">

        <div className="signup-brand">
          <div className="signup-logo">🌱</div>
          <h2>Farmily</h2>
        </div>

      </header>

      <main className="signup-container">

        <div className="signup-card success-card">

          <div className="success-circle">
            ✅
          </div>

          <h1>Account Created Successfully!</h1>

          <p className="success-message">
            Congratulations <strong>{firstName}</strong>,
            your Farmily account has been created successfully.
          </p>

          <div className="success-details">

            <div className="detail-item">
              <span>👤</span>
              <p>{firstName} {lastName}</p>
            </div>

            <div className="detail-item">
              <span>📱</span>
              <p>{phoneNumber}</p>
            </div>

            <div className="detail-item">
              <span>🌾</span>
              <p>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
            </div>

          </div>

          <p className="success-note">
            You can now begin registering your farm fields,
            monitor soil health, and receive intelligent farming
            recommendations.
          </p>

          <button
            className="create-btn"
            onClick={() =>
              navigate("/farmer-dashboard", {
                state: {
                  username: firstName,
                  isNewUser: true,
                },
              })
            }
          >
            Continue to Dashboard →
          </button>

        </div>

      </main>

    </div>
  );
}

  return (
    <div className="signup-page">
      <header className="signup-header">
        <div className="signup-brand" onClick={() => navigate("/")}>
          <div className="signup-logo">🌱</div>
          <h2>Farmily</h2>
        </div>

        <div className="signup-nav">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </header>

      <main className="signup-container">
        <div className="signup-card">
          <h1>Create Your Account</h1>

          <p className="signup-subtitle">
            Join Farmily and start monitoring soil health with intelligent
            recommendations.
          </p>

          {error && <p className="signup-error">{error}</p>}

          <div className="signup-form">
            <input
              type="text"
              placeholder="First Name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Middle Name (Optional)"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="+251 9XXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <h3>Select Your Role</h3>

          <div className="role-cards">
            <button
              type="button"
              className={role === "farmer" ? "role-card active-role" : "role-card"}
              onClick={() => setRole("farmer")}
            >
              <h4>🌾 Farmer</h4>
              <p>Track your farm, crops and soil health.</p>
            </button>

            <button
              type="button"
              className={role === "advisor" ? "role-card active-role" : "role-card"}
              onClick={() => setRole("advisor")}
            >
              <h4>👨‍🌾 Advisor</h4>
              <p>Help farmers with recommendations.</p>
            </button>

            <button
              type="button"
              className={
                role === "researcher" ? "role-card active-role" : "role-card"
              }
              onClick={() => setRole("researcher")}
            >
              <h4>🔬 Researcher</h4>
              <p>Analyse agricultural data and trends.</p>
            </button>
          </div>

          <button className="create-btn" onClick={handleCreateAccount}>
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
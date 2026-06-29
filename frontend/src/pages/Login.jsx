import { useState } from "react";
import { useNavigate,} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
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
    <div>
      <h1>Login</h1>

      {/* FORM */}
      <div>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
      </div>

      <h3>Preview dashboard as:</h3>

      {/* ROLE SELECTION */}
      <div>
        <button onClick={() => setRole("farmer")}>Farmer</button>
        <button onClick={() => setRole("advisor")}>Advisor</button>
        <button onClick={() => setRole("researcher")}>Researcher</button>
      </div>

      <p>Selected Role: {role}</p>

      <button disabled={!role}>Login</button>

      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  </div>
  );
}
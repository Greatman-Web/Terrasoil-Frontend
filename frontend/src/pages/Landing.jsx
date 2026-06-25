import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>FARM & SOIL HEALTH  MONITORING APP</h1>

      <p>
        Monitor. Analyze. Improve.
      </p>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>

      <footer>
        <p>Footer / Navigation Links</p>
      </footer>
    </div>
  );
}



import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
import heroImage from "../assets/images/terrasoil-hero.png";
import footerImage from "../assets/images/footer.png";

export default function Landing() {
  // Navigation hook for the landing page actions
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/*HEADER */}

      <header className="landing-header">
        <div className="brand">
          <div className="brand-icon">🌱</div>

          <div className="brand-text">
            <h2>Farmily</h2>
            <p>Smart Soil Health Monitoring Platform</p>
          </div>
        </div>

        <nav className="landing-nav">

  <select className="language-select" defaultValue="en">
    <option value="en">🇬🇧 English</option>
    <option value="am">🇪🇹 አማርኛ (Amharic)</option>
  </select>

  <div className="landing-nav">

  <button
    className="text-btn"
    onClick={() => navigate("/about")}
  >
    About
  </button>

  <button
    className="nav-link"
    onClick={() => navigate("/login")}
  >
    Login
  </button>

  <button
    className="blue-btn"
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </button>

</div>

</nav>
      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="welcome-text">
            Welcome to Farmily 👋
          </p>

          <p className="hero-subtitle">
            Smart Soil Health Monitoring Platform
          </p>

          <h1>
            Grow Smarter.
            <br />
            Harvest More.
          </h1>

          <p className="hero-description">
            Empowering sustainable agriculture through intelligent soil health
            monitoring. Farmily helps farmers monitor soil conditions,
            receive smart recommendations, and make data-driven decisions for
            healthier crops and increased productivity.
          </p>

          <div className="hero-actions">
            <button
              className="blue-btn"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>

           <button
             className="text-btn"
             onClick={() => navigate("/about")}
             >
            Learn More
           </button>
          </div>

        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Farmer using smartphone to monitor soil health in a field"
          />
        </div>

      </section>

      {/* FEATURES*/}

      <section className="features">

        <h2>Everything your farm needs</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <span>🌱</span>
            <h3>Smart Recommendations</h3>
            <p>
              Tailored advice for your soil, crops and field conditions.
            </p>
          </div>

          <div className="feature-card">
            <span>📈</span>
            <h3>Market Intelligence</h3>
            <p>
              Know the best prices, buyers and the right time to sell.
            </p>
          </div>

          <div className="feature-card">
            <span>👥</span>
            <h3>Community Learning</h3>
            <p>
              Connect with farmers, advisors and researchers.
            </p>
          </div>

          <div className="feature-card">
            <span>📶</span>
            <h3>Works Offline</h3>
            <p>
              Access important features even with limited internet.
            </p>
          </div>

        </div>

      </section>
        {/* FOOTER */}
        <footer className="footer">
  <div className="footer-brand">
    <div className="footer-logo">🌱</div>
    <h2>Farmily</h2>
    <p>Smart Soil Health Monitoring Platform</p>
  </div>

  <div className="footer-links">
    <h3>Quick Links</h3>
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/signup">Sign Up</a>
    <a href="/login">Login</a>
  </div>

  <div className="footer-links">
    <h3>Resources</h3>
    <a href="#">Privacy Policy</a>
    <a href="#">FAQs</a>
    <a href="#">Support</a>
  </div>

  <div className="footer-links">
    <h3>Contact Us</h3>
    <p>+251 9XX XXX XXX</p>
    <p>info@Farmily.com</p>
    <p>Hawassa, Ethiopia</p>
  </div>

  <div className="footer-image">
    <img src={footerImage} alt="Growing plant in soil" />
  </div>

  <div className="footer-bottom">
    © 2026 Farmily. All rights reserved.
  </div>
</footer>
</div>
  );
}
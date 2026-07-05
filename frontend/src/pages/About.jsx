import { useNavigate } from "react-router-dom";
import "../styles/About.css";
import aboutHero from "../assets/images/about hero.png";
import farmer from "../assets/images/farmer.png";
import researcher from "../assets/images/researcher.png";
import advisor from "../assets/images/advisor.Png";
import missionImage from "../assets/images/mission.png";
import visionImage from "../assets/images/vission.png";
import footerImage from "../assets/images/footer.png";
export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Header */}

      <header className="about-header">

        <div className="brand">

          <div className="brand-icon">🌱</div>

          <div>
            <h2>TerraSoil</h2>
            <p>Smart Soil Health Monitoring Platform</p>
          </div>

        </div>

        <button
          className="blue-btn"
          onClick={() => navigate("/")}
        >
          Back Home
        </button>

      </header>

      {/* Hero */}

      <section className="about-hero">

        <div className="about-text">

          <p className="small-title">ABOUT TERRASOIL</p>

          <h1>
            Empowering Farmers Through Smart Agriculture
          </h1>

          <p>
            TerraSoil is a smart soil health monitoring platform designed to
            help farmers make informed decisions through digital technologies,
            soil analysis, and data-driven recommendations. Our mission is to
            improve productivity while promoting sustainable farming practices.
          </p>

        </div>

        <div className="about-image">

         <img src={aboutHero} alt="TerraSoil farm landscape" />
        </div>

      </section>

      {/* Mission */}

      <section className="mission-card">

  <div className="mission-text">

    <h2>🌱 Our Mission</h2>

    <p>
      To empower farmers with accessible digital tools for monitoring soil
      health, improving crop productivity, and encouraging sustainable
      agricultural practices.
    </p>

  </div>

  <div className="mission-image">

    <img
      src={missionImage}
      alt="Our Mission"
    />

  </div>

</section>
      {/* Features */}

      <section className="about-section">

        <h2>What TerraSoil Offers</h2>

        <div className="about-grid">

          <div className="about-card">
            <span>🌾</span>
            <h3>Soil Health Monitoring</h3>
            <p>Track soil quality and monitor changes over time.</p>
          </div>

          <div className="about-card">
            <span>🧪</span>
            <h3>Soil Testing</h3>
            <p>Record soil test results manually or through AI.</p>
          </div>

          <div className="about-card">
            <span>🤖</span>
            <h3>AI Recommendations</h3>
            <p>Receive intelligent farming recommendations.</p>
          </div>

          <div className="about-card">
            <span>📊</span>
            <h3>Farm Management</h3>
            <p>Manage multiple fields and monitor performance.</p>
          </div>

        </div>

      </section>

      {/* Users */}

      <section className="about-section">

        <h2>Who Can Use TerraSoil?</h2>

        <div className="user-grid">

          <div className="user-card">
  <img src={farmer} alt="Farmer using TerraSoil" />
  <div>
    <h3>Farmers</h3>
    <p>Monitor soil health, improve productivity and increase yields.</p>
  </div>
</div>

<div className="user-card">
  <img src={researcher} alt="Researcher analysing soil" />
  <div>
    <h3>Researchers</h3>
    <p>Analyse soil data, conduct research and develop better solutions.</p>
  </div>
</div>

<div className="user-card">
  <img src={advisor} alt="Agricultural advisor supporting farmer" />
  <div>
    <h3>Agricultural Advisors</h3>
    <p>Support farmers with accurate information and better decisions.</p>
  </div>
</div>
</div>
      </section>

      {/* Vision */}

      <section className="vision-card">

  <div className="vision-text">

    <h2>🌍 Our Vision</h2>

    <p>
      To transform agriculture in Ethiopia by making soil intelligence
      accessible to every farmer and building a more sustainable and
      food-secure future.
    </p>

  </div>

  <div className="vision-image">

    <img
      src={visionImage}
      alt="Our Vision"
    />

  </div>

</section>

{/* DEMO VIDEO */}

<section className="demo-section">

  <div className="demo-text">

    <p className="small-title">VIDEO GUIDE</p>

    <h2>Watch How TerraSoil Works</h2>

    <p>
      Learn how to register your field, perform soil tests,
      monitor soil health, and receive AI-powered recommendations.
      This short demonstration is designed to help first-time users
      confidently navigate the TerraSoil platform.
    </p>

    <div className="video-badges">

      <span>⏱ 2 Minutes</span>

      <span>🌍 English</span>

      <span>🇪🇹 Amharic</span>

    </div>

  </div>

  <div className="video-card">

    <div className="video-placeholder">

      <div className="play-button">

        ▶

      </div>

      <p>Demo Video Coming Soon</p>

    </div>

  </div>

</section>

    {/* READY TO START */}
<section className="about-cta">
  <div>
    <h2>Ready to Start?</h2>
    <p>
      Join farmers using TerraSoil to monitor soil health and improve productivity.
    </p>

    <button className="blue-btn" onClick={() => navigate("/signup")}>
      Create Account
    </button>
  </div>

  <img src={footerImage} alt="Growing plant in soil" />
</section>

{/* FOOTER */}
<footer className="about-footer">
  <div className="footer-brand">
    <div className="footer-logo">🌱</div>
    <h2>TerraSoil</h2>
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
    <p>info@terrasoil.com</p>
    <p>Hawassa, Ethiopia</p>
  </div>

  <div className="footer-image">
    <img src={footerImage} alt="Growing plant in soil" />
  </div>

  <div className="footer-bottom">
    © 2026 TerraSoil. All rights reserved.
  </div>
</footer>
</div>
  );
}
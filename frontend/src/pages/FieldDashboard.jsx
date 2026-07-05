import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FieldDashboard.css";
import selectedFieldImage from "../assets/images/selected-field.png";

// Field dashboard view for monitoring soil and crop performance
export default function FieldDashboard() {
  const navigate = useNavigate();
  const [showSoilTest, setShowSoilTest] = useState(false);
  const [testMethod, setTestMethod] = useState("");

  return (
    <div className="field-dashboard-page">
      <header className="field-topbar">
        <div className="topbar-brand">
          <div className="logo-icon">🌱</div>
          <h2>TerraSoil — Farmers Dashboard</h2>
        </div>

        <div className="topbar-actions">
          <div className="user-circle">F</div>
          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      <nav className="field-tabs">
        <button onClick={() => navigate("/farmer-dashboard")}>Dashboard</button>
        <button className="active">My Fields</button>
        <button>Household</button>
        <button>Recommendations</button>
      </nav>

      <main className="field-main">
        <section className="field-hero">

    <div className="field-hero-text">

        <p className="small-title">Field Dashboard</p>

        <h1>🌾 Maize Field</h1>

        <p>
            Monitor this field, perform soil tests, and keep track of its
            health over time.
        </p>

    </div>

    <div className="field-hero-image">

        <img
            src={selectedFieldImage}
            alt="Selected Farm Field"
        />

    </div>

</section>

    <section className="field-overview-card">
  <h2>📋 Field Overview</h2>

  <div className="field-overview-grid">
    <div className="overview-item">
      <span className="overview-icon">🌾</span>
      <div>
        <small>Field Name</small>
        <strong>Selected Field</strong>
      </div>
    </div>

    <div className="overview-item">
      <span className="overview-icon">🌽</span>
      <div>
        <small>Crop Type</small>
        <strong>Maize</strong>
      </div>
    </div>

    <div className="overview-item">
      <span className="overview-icon">📐</span>
      <div>
        <small>Total Area</small>
        <strong>2.5 ha</strong>
      </div>
    </div>

    <div className="overview-item">
      <span className="overview-icon">📍</span>
      <div>
        <small>Region</small>
        <strong>Hawassa</strong>
      </div>
    </div>

    <div className="overview-item">
      <span className="overview-icon">✅</span>
      <div>
        <small>Status</small>
        <strong>Active</strong>
      </div>
    </div>
  </div>
</section>

       <section className="soil-dashboard-grid">
  <div className="soil-health-card">
    <h2>🌱 Current Soil Health</h2>

    <div className="soil-status-box">
      <span className="soil-face">😊</span>
      <h3>Good</h3>
      <p>Last updated: 15 July 2026</p>
    </div>

    <div className="soil-metrics-grid">
      <div>
        <small>pH</small>
        <strong>6.8</strong>
      </div>

      <div>
        <small>Moisture</small>
        <strong>72%</strong>
      </div>

      <div>
        <small>Nitrogen (N)</small>
        <strong>Medium</strong>
      </div>

      <div>
        <small>Phosphorus (P)</small>
        <strong>High</strong>
      </div>

      <div>
        <small>Potassium (K)</small>
        <strong>Low</strong>
      </div>

      <div>
        <small>Overall Status</small>
        <strong>Good</strong>
      </div>
    </div>

    <button
      className="start-test-btn"
      onClick={() => setShowSoilTest(!showSoilTest)}
    >
      🌱 Start Soil Test
    </button>
  </div>
        {showSoilTest && (
          <section className="soil-test-panel">
            <h2>How would you like to test your soil?</h2>

            <div className="test-method-grid">
              <button
                className={testMethod === "scan" ? "method-card active-method" : "method-card"}
                onClick={() => setTestMethod("scan")}
              >
                <span>📷</span>
                <h3>Scan Soil</h3>
                <p>Take or upload a soil photo.</p>
              </button>

              <button
                className={testMethod === "manual" ? "method-card active-method" : "method-card"}
                onClick={() => setTestMethod("manual")}
              >
                <span>📝</span>
                <h3>Enter Manually</h3>
                <p>Use results from a soil kit or lab test.</p>
              </button>
            </div>

            {testMethod === "scan" && (
              <div className="scan-box">
                <h3>Upload Soil Image</h3>
                <input type="file" accept="image/*" />
                <p>AI analysis will be connected later.</p>
              </div>
            )}

            {testMethod === "manual" && (
              <div className="manual-form">
                <input type="number" placeholder="Soil pH" />
                <input type="number" placeholder="Moisture (%)" />
                <input type="number" placeholder="Nitrogen (N)" />
                <input type="number" placeholder="Phosphorus (P)" />
                <input type="number" placeholder="Potassium (K)" />
                <input type="number" placeholder="Temperature (°C)" />
                <button>Save Soil Test</button>
              </div>
            )}
          </section>
        )}
 <div className="recent-tests-card">
    <h2>🧪 Recent Soil Tests</h2>

    <div className="recent-test-item">
      <span className="date-icon">📅</span>
      <p>15 July 2026</p>
      <strong className="good">Good</strong>
    </div>

    <div className="recent-test-item">
      <span className="date-icon">📅</span>
      <p>08 July 2026</p>
      <strong className="fair">Fair</strong>
    </div>

    <div className="recent-test-item">
      <span className="date-icon">📅</span>
      <p>01 July 2026</p>
      <strong className="attention">Needs Attention</strong>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/FieldDashboard.css";
import selectedFieldImage from "../assets/images/selected-field.png";

const REQUIRED_TESTS = 14;
export default function FieldDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedField = location.state?.field;

  if (!selectedField) {
    return (
      <div className="field-dashboard-page">
        <main className="field-main">
          <section className="field-hero">
            <div className="field-hero-text">
              <h1>No Field Selected</h1>

              <p>
                Please go back to My Fields and select a registered field.
              </p>

              <button
                className="start-test-btn"
                onClick={() => navigate("/farmer-dashboard")}
              >
                Back to My Fields
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const soilTests =
    JSON.parse(localStorage.getItem(`soilTests_${selectedField.id}`)) || [];

  const latestTest = soilTests[0];

  const uniqueTests = new Set(
  soilTests.map((test) => test.testName).filter(Boolean)
);

const completedTests = Math.min(
  uniqueTests.size,
  REQUIRED_TESTS
);

const testProgressPercentage = Math.round(
  (completedTests / REQUIRED_TESTS) * 100
);

const remainingTests = REQUIRED_TESTS - completedTests;

  const isCompleteAnalysis =
    latestTest?.analysisType === "complete" &&
    typeof latestTest?.result === "object";

  const displayQuickResult = (test) => {
    if (!test) return "No result";

    if (typeof test.result === "object") {
      return "Complete Soil Analysis";
    }

    return test.result || "Recorded";
  };

  return (
    <div className="field-dashboard-page">
      <header className="field-topbar">
        <div className="topbar-brand">
          <div className="logo-icon">🌱</div>
          <h2>Farmily — Farmers Dashboard</h2>
        </div>

        <div className="topbar-actions">
          <div className="user-circle">F</div>

          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      <nav className="field-tabs">
        <button onClick={() => navigate("/farmer-dashboard")}>
          Dashboard
        </button>

        <button className="active">My Fields</button>

        <button onClick={() => navigate("/household-dashboard")}>
          Household
        </button>

        <button onClick={() => navigate("/recommendations")}>
          Recommendations
        </button>
      </nav>

      <main className="field-main">
        <section className="field-hero">
          <div className="field-hero-text">
            <p className="small-title">Field Dashboard</p>

            <h1>🌾 {selectedField.fieldName}</h1>

            <p>
              Monitor this field, perform soil tests, and keep track of its
              health over time.
            </p>
          </div>

          <div className="field-hero-image">
            <img src={selectedFieldImage} alt="Selected Farm Field" />
          </div>
        </section>
        <section className="field-test-progress-card">
  <div className="field-test-progress-heading">
    <div>
      <p className="small-title">SOIL TESTING PROGRESS</p>
      <h2>Field Test Completion</h2>

      <p>
        Track how many required soil tests have been completed for this
        field.
      </p>
    </div>

    <strong className="field-test-progress-percentage">
      {testProgressPercentage}%
    </strong>
  </div>

  <div className="field-dashboard-progress-track">
    <div
      className="field-dashboard-progress-fill"
      style={{
        width: `${Math.max(testProgressPercentage, 6)}%`,
      }}
    />
  </div>

  <div className="field-test-progress-footer">
    <p>
      <strong>{completedTests}</strong> of{" "}
      <strong>{REQUIRED_TESTS}</strong> required tests completed
    </p>

    {remainingTests === 0 ? (
      <span className="field-tests-complete">
        ✅ All required tests completed
      </span>
    ) : (
      <span>
        {remainingTests} test{remainingTests === 1 ? "" : "s"} remaining
      </span>
    )}
  </div>
</section>

        <section className="field-overview-card">
          <h2>📋 Field Overview</h2>

          <div className="field-overview-grid">
            <div className="overview-item">
              <span className="overview-icon">🌾</span>

              <div>
                <small>Field Name</small>
                <strong>{selectedField.fieldName}</strong>
              </div>
            </div>

            <div className="overview-item">
              <span className="overview-icon">🌽</span>

              <div>
                <small>Crop Type</small>
                <strong>{selectedField.cropType}</strong>
              </div>
            </div>

            <div className="overview-item">
              <span className="overview-icon">📐</span>

              <div>
                <small>Total Area</small>
                <strong>{selectedField.totalArea} ha</strong>
              </div>
            </div>

            <div className="overview-item">
              <span className="overview-icon">📍</span>

              <div>
                <small>Region</small>
                <strong>{selectedField.region}</strong>
              </div>
            </div>

<div className="overview-item">
  <span className="overview-icon">🌿</span>

  <div>
    <small>Land Use Type</small>
    <strong>{selectedField.landUseType || "Not recorded"}</strong>
  </div>
</div>

<div className="overview-item">
  <span className="overview-icon">💧</span>

  <div>
    <small>Water Availability</small>
    <strong>
      {selectedField.waterAvailability || "Not recorded"}
    </strong>
  </div>
</div>

<div className="overview-item">
  <span className="overview-icon">📏</span>

  <div>
    <small>Distance to Water Source</small>
    <strong>
      {selectedField.distanceToWaterSource
        ? `${selectedField.distanceToWaterSource} km`
        : "Not recorded"}
    </strong>
  </div>
</div>

            <div className="overview-item">
              <span className="overview-icon">✅</span>
              <div>
                <small>Status</small>
                <strong>{selectedField.status || "Active"}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="soil-dashboard-grid">
          <div className="soil-health-card">
            <h2>🌱 Current Soil Health</h2>

            {latestTest ? (
              <>
                <div className="soil-status-box">
                  <span className="soil-face">
                    {latestTest.status === "Needs Attention" ? "⚠️" : "🧪"}
                  </span>

                  <h3>{latestTest.status || "Recorded"}</h3>

                  <p>Last updated: {latestTest.date}</p>
                </div>

                <div className="soil-metrics-grid">
                  <div>
                    <small>Test Type</small>
                    <strong>{latestTest.testName}</strong>
                  </div>

                  <div>
                    <small>Result</small>
                    <strong>{displayQuickResult(latestTest)}</strong>
                  </div>

                  <div>
                    <small>Status</small>
                    <strong>{latestTest.status || "Recorded"}</strong>
                  </div>
                </div>

                {isCompleteAnalysis && (
                  <div className="analysis-summary">
                    <h3>Complete Analysis Summary</h3>

                    <div className="analysis-summary-grid">
                      <div>
                        <small>Soil Structure</small>
                        <strong>
                          {latestTest.result.structureQuality || "Not recorded"}
                        </strong>
                      </div>

                      <div>
                        <small>Root Development</small>
                        <strong>
                          {latestTest.result.rootDevelopment || "Not recorded"}
                        </strong>
                      </div>

                      <div>
                        <small>Soil Colour</small>
                        <strong>
                          {latestTest.result.soilColour || "Not recorded"}
                        </strong>
                      </div>

                      <div>
                        <small>Penetration Resistance</small>
                        <strong>
                          {latestTest.result.penetrationResistance ||
                            "Not recorded"}
                        </strong>
                      </div>

                      <div>
                        <small>Soil pH</small>
                        <strong>
                          {latestTest.result.phValue || "Not recorded"}
                        </strong>
                      </div>

                      <div>
                        <small>SOC Feel</small>
                        <strong>
                          {latestTest.result.socFeel || "Not recorded"}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="soil-status-box">
                <span className="soil-face">🧪</span>

                <h3>No Soil Test Yet</h3>

                <p>
                  Start a soil test to see this field’s soil health.
                </p>
              </div>
            )}

            <button
              className="start-test-btn"
              onClick={() =>
                navigate("/soil-test", {
                  state: {
                    field: selectedField,
                  },
                })
              }
            >
              🌱 Start Soil Test
            </button>
          </div>

          <div className="recent-tests-card">
            <h2>🧪 Recent Soil Tests</h2>

            {soilTests.length === 0 ? (
              <p className="empty-message">
                No soil test recorded for this field yet.
              </p>
            ) : (
              soilTests.map((test) => (
                <div className="recent-test-item" key={test.id}>
                  <span className="date-icon">📅</span>

                  <div className="recent-test-information">
                    <p>{test.testName}</p>
                    <small>{test.date}</small>
                  </div>

                  <strong
                    className={
                      test.status === "Needs Attention"
                        ? "attention"
                        : test.status === "Fair"
                          ? "fair"
                          : "good"
                    }
                  >
                    {test.status || "Recorded"}
                  </strong>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="satellite-section">
          <div className="satellite-card">
            <div className="satellite-card-header">
              <div>
                <p className="small-title">SATELLITE MONITORING</p>
                <h2>🛰️ Field Imagery & Vegetation Indices</h2>
              </div>
            </div>

            <div className="satellite-body">
              <div className="satellite-image-panel">
                <img src={selectedFieldImage} alt="Satellite view of the field" />
                <p className="satellite-caption">
                  Satellite image for {selectedField.fieldName}
                </p>
              </div>

              <div className="satellite-metrics-grid">
                <div className="satellite-metric">
                  <small>NDVI</small>
                  <strong>0.74</strong>
                  <span>Healthy vegetation</span>
                </div>
                <div className="satellite-metric">
                  <small>NDWI</small>
                  <strong>0.18</strong>
                  <span>Moderate moisture</span>
                </div>
                <div className="satellite-metric">
                  <small>EVI</small>
                  <strong>0.62</strong>
                  <span>Good canopy vigor</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
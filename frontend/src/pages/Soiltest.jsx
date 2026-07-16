import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Soiltest.css";

export default function Soiltest() {
  const [testType, setTestType] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const selectedField = location.state?.field;

  const tests = [
  "Soil pH",
  "Moisture",
  "Nitrogen (N)",
  "Phosphorus (P)",
  "Potassium (K)",
  "Organic Matter",
  "Temperature",
  "Soil Structure",
  "Root Development",
  "TSBF Test",
  "Soil Colour",
  "Penetration Resistance",
  "Beerkan Infiltration",
  "Slakes Test",
  "Slakes App Test",
  "SOC Observation",
  "SOC App Test",
  "Teabag Index",
  "Crop Yield Evaluation",
  "Gully Retreat",
];

  const createTestRoute = (testName) => {
    return testName
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("(", "")
      .replaceAll(")", "");
  };

  const goToTest = (testName) => {
    navigate(`/soil-test/${createTestRoute(testName)}`, {
      state: {
        field: selectedField,
      },
    });
  };

  const goToFullAnalysis = () => {
    navigate("/soil-test/full-analysis", {
      state: {
        field: selectedField,
      },
    });
  };

  return (
    <div className="soil-page">
      <header className="soil-header">
        <div className="soil-brand">
          <div className="soil-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Smart Soil Health Monitoring Platform</p>
          </div>
        </div>

        <div className="soil-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <button
            className="home-btn"
            onClick={() =>
              navigate("/field-dashboard", {
                state: {
                  field: selectedField,
                },
              })
            }
          >
            My Field
          </button>
        </div>
      </header>

      <div className="soil-container">
        <p className="small-title">SOIL TESTING</p>

        <h1>Test Your Soil</h1>

        {selectedField && (
          <p className="soil-description">
            You are testing soil for: <strong>{selectedField.fieldName}</strong>
          </p>
        )}

        <p className="soil-description">
          Select the type of soil assessment you want to perform. You can either
          carry out a quick test on one soil property or perform a complete soil
          analysis for your field.
        </p>

        {!selectedField && (
          <p className="form-error">
            No field selected. Please go back to My Fields and select a field
            before starting a soil test.
          </p>
        )}
<div className="test-choice-grid">
  <div
    className={
      testType === "single"
        ? "choice-card active"
        : "choice-card"
    }
    onClick={() => setTestType("single")}
  >
    <span>⚡</span>
    <h2>Single Test</h2>

    <p>
      Test a single soil property such as Soil pH, Moisture,
      Nitrogen or Potassium.
    </p>
  </div>

  <div
    className={
      testType === "full"
        ? "choice-card active"
        : "choice-card"
    }
    onClick={() => setTestType("full")}
  >
    <span>🧪</span>
    <h2>Complete Soil Analysis</h2>

    <p>
      Perform a complete soil assessment by entering all available
      soil measurements.
    </p>
  </div>

  <div
    className={
      testType === "compare"
        ? "choice-card active"
        : "choice-card"
    }
    onClick={() => setTestType("compare")}
  >
    <span>📊</span>
    <h2>Comparative Analysis</h2>

    <p>
      Compare two or more fields with another to review
      differences in soil characteristics and overall field
      performance.
    </p>
  </div>
</div>

<div className="selected-test-content">
  {testType === "single" && (
    <section className="test-option-section">
      <h2 className="section-title">Select a Soil Test</h2>

      <p className="section-description">
        Choose one soil property to test for the selected field.
      </p>

      <div className="test-grid">
        {tests.map((item) => (
          <div
            key={item}
            className="test-card"
            onClick={() => goToTest(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )}

  {testType === "full" && (
    <section className="test-option-section full-analysis-option">
      <div className="selected-option-heading">
        <h2>Complete Soil Analysis</h2>
        <p>
          Enter all available soil details to create a complete assessment
          for this field.
        </p>
      </div>
      <button className="continue-btn" onClick={goToFullAnalysis}>
        Start Complete Analysis →
      </button>
    </section>
  )}
        </div>
      </div>
    </div>
  );
}


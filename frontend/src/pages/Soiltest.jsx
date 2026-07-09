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
            <h2>TerraSoil</h2>
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
              testType === "single" ? "choice-card active" : "choice-card"
            }
            onClick={() => setTestType("single")}
          >
            <span>⚡</span>
            <h2>Quick Test</h2>
            <p>
              Test a single soil property such as Soil pH, Moisture, Nitrogen or
              Potassium.
            </p>
          </div>

          <div
            className={
              testType === "full" ? "choice-card active" : "choice-card"
            }
            onClick={() => setTestType("full")}
          >
            <span>🧪</span>
            <h2>Complete Soil Analysis</h2>
            <p>
              Perform a complete soil assessment by entering all available soil
              measurements.
            </p>
          </div>
        </div>

        {testType === "single" && (
          <>
            <h2 className="section-title">Select a Soil Test</h2>

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
          </>
        )}

        {testType === "full" && (
          <div className="next-section">
            <button className="continue-btn" onClick={goToFullAnalysis}>
              Start Complete Analysis →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
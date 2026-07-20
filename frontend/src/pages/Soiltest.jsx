import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Soiltest.css";

export default function Soiltest() {
  const [testType, setTestType] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const selectedField = location.state?.field;

  const tests = [
    {
      title: "Infiltration Test",
      summary: "Check how quickly water enters the soil surface.",
      focus: "Water movement",
    },
    {
      title: "Penetration Resistance Test",
      summary: "Measure how easy the soil is to penetrate.",
      focus: "Root comfort",
    },
    {
      title: "Root Development Test",
      summary: "Observe root depth and spread for soil structure clues.",
      focus: "Rooting health",
    },
    {
      title: "Soil Fauna Test",
      summary: "Look for visible earthworms and other soil organisms.",
      focus: "Soil life",
    },
    {
      title: "Visual Evaluation of Soil Structure (VESS)",
      summary: "Inspect aggregates, pores and compaction by eye.",
      focus: "Structure",
    },
    {
      title: "Soil Smell Test",
      summary: "Use the aroma of freshly exposed soil as a clue.",
      focus: "Biological activity",
    },
    {
      title: "Soil Colour Test",
      summary: "Compare surface colour for organic matter clues.",
      focus: "Soil colour",
    },
    {
      title: "Slake Test",
      summary: "See how stable soil aggregates are when wet.",
      focus: "Aggregate stability",
    },
  ];

  const createTestRoute = (testName) => {
    return testName
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("(", "")
      .replaceAll(")", "");
  };

  const goToTest = (testName) => {
    if (!selectedField) {
      return;
    }

    navigate(`/soil-test/${createTestRoute(testName)}`, {
      state: {
        field: selectedField,
      },
    });
  };

  const goToFullAnalysis = () => {
    if (!selectedField) {
      return;
    }

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
            You are testing soil for:{" "}
            <strong>
              {selectedField.fieldName || selectedField.name}
            </strong>
          </p>
        )}

        <p className="soil-description">
          Select the type of soil assessment you want to perform. You can
          complete one soil health test or carry out all the recommended tests
          as a complete soil analysis.
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
              Perform one recommended soil health test for the selected field.
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
              Complete all recommended soil health tests to create a broader
              assessment of the selected field.
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
              Compare soil test results from two or more registered fields.
            </p>
          </div>
        </div>

        <div className="selected-test-content">
          {testType === "single" && (
            <section className="test-option-section">
              <h2 className="section-title">Select a Soil Test</h2>

              <p className="section-description">
                Choose one soil health test to perform for the selected field.
              </p>

              <div className="test-grid">
                {tests.map((item) => (
                  <button
                    type="button"
                    key={item.title}
                    className="test-card"
                    onClick={() => goToTest(item.title)}
                    disabled={!selectedField}
                  >
                    <div className="test-card-body">
                      <span className="test-card-badge">{item.focus}</span>
                      <strong>{item.title}</strong>
                      <p>{item.summary}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}

          {testType === "full" && (
            <section className="test-option-section full-analysis-option">
              <div className="selected-option-heading">
                <h2>Complete Soil Analysis</h2>

                <p>
                  Follow the instructions for all eight recommended soil health
                  tests and record the result of each test.
                </p>
              </div>

              <button
                className="continue-btn"
                onClick={goToFullAnalysis}
                disabled={!selectedField}
              >
                Start Complete Analysis →
              </button>
            </section>
          )}

          {testType === "compare" && (
            <section className="test-option-section full-analysis-option">
              <div className="selected-option-heading">
                <h2>Comparative Analysis</h2>

                <p>
                  Comparative analysis will allow farmers to review soil health
                  differences between their registered fields.
                </p>
              </div>

              <button className="continue-btn" disabled>
                Coming Soon
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
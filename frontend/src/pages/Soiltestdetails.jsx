import { useState } from "react";
import {useParams,useNavigate,useLocation,} from "react-router-dom";
import "../styles/Soiltestdetails.css";

const soilTests = [
  {
    route: "infiltration-test",
    testId: "INFIL_001",
    title: "Infiltration Test",
    icon: "💧",
    category: "Physical",
    indicator: "Water infiltration",
    highlight:
      "Assesses how well water moves into and through the soil. Healthy soils usually absorb water more quickly while still storing sufficient water for crop growth.",
    equipment: [
      "Food can or plastic cylinder",
      "Water",
      "Timer or watch",
    ],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Remove plants or debris from the soil surface where the cylinder will be placed.",
      "Place the cylinder on the soil block and press it slightly into the soil.",
      "Pour water into the cylinder to the top and start the timer immediately.",
      "Observe the infiltration time.",
      "Repeat for each soil block using the same volume of water and the same cylinder.",
    ],
    results: [
      {
        level: "Low",
        label: "Slow",
        interpretation:
          "Water infiltrates slowly, indicating compaction or poor soil structure. There may be a greater risk of runoff and erosion.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation: "The soil has an intermediate infiltration rate.",
      },
      {
        level: "High",
        label: "Rapid/Readily absorbs",
        interpretation:
          "A better soil structure and pore network allows rainfall to enter and be stored.",
      },
    ],
  },

  {
    route: "penetration-resistance-test",
    testId: "PEN_001",
    title: "Penetration Resistance Test",
    icon: "📏",
    category: "Physical",
    indicator: "Soil compaction and structure",
    highlight:
      "Assesses the physical condition of the soil, particularly soil structure and soil compaction. The easier and deeper the stick penetrates, the healthier the soil is likely to be.",
    equipment: [
      "Screwdriver",
      "Stiff stick",
      "Metal rod",
    ],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Insert a screwdriver, stiff stick or metal rod vertically into each soil block using approximately the same force.",
      "Compare how easily and deeply the tool penetrates before resistance is encountered.",
      "Repeat the test for all soil blocks using the same force and order.",
    ],
    results: [
      {
        level: "Low",
        label: "Hard",
        interpretation:
          "The soil is more compacted with fewer pores, which can restrict roots and water movement.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "The soil has an intermediate level of compaction and structure.",
      },
      {
        level: "High",
        label: "Easy",
        interpretation:
          "The soil has a better structure and pore network that supports roots and water movement.",
      },
    ],
  },

  {
    route: "root-development-test",
    testId: "ROOT_DEV_001",
    title: "Root Development Test",
    icon: "🌱",
    category: "Biological",
    indicator: "Rooting system",
    highlight:
      "Indicates soil structure and stability, but also gives insights into nutrient and water availability in the soil.",
    equipment: ["Spade"],
    samplingTime: "Immediately after harvest, before ploughing",
    timePerSample: "Approximately 5 minutes",
    instructions: [
      "Select sampling areas, extract soil blocks and place them side-by-side for comparison.",
      "Gently break the soil clods apart so the roots can be observed.",
      "Assess root length, number, density and diversity.",
    ],
    results: [
      {
        level: "Low",
        label: "Few, shallow",
        interpretation:
          "Root restriction could be caused by physical, chemical or biological factors, or a combination of these factors.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "The soil properties could potentially be improved further.",
      },
      {
        level: "High",
        label: "Many, deep",
        interpretation:
          "Good root development may indicate good soil structure, organic matter and biological activity.",
      },
    ],
  },

  {
    route: "soil-fauna-test",
    testId: "FAUNA_001",
    title: "Soil Fauna Test",
    icon: "🪱",
    category: "Biological",
    indicator: "Visible soil organisms",
    highlight:
      "Counts visible soil animals and insects as an indication of biological health.",
    equipment: [
      "Prepared soil blocks",
      "Spade, if required",
    ],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Examine each soil block carefully.",
      "Identify the different visible soil organism types.",
      "Count the individuals belonging to each type.",
      "Compare the observations across the soil blocks.",
    ],
    results: [
      {
        level: "Low",
        label: "Scarce/Few, low diversity",
        interpretation: "This indicates limited biological activity.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "This indicates an intermediate level of biological activity.",
      },
      {
        level: "High",
        label: "Many, diverse",
        interpretation:
          "The soil provides good conditions for soil life and biological activity.",
      },
    ],
  },

  {
    route: "visual-evaluation-of-soil-structure-vess",
    testId: "VESS_001",
    title: "Visual Evaluation of Soil Structure (VESS)",
    icon: "🧱",
    category: "Physical",
    indicator: "Soil structure",
    highlight:
      "Assesses soil structure by examining aggregates, pores, root channels and compaction.",
    equipment: ["Prepared soil blocks"],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Gently break apart each soil block by hand.",
      "Observe the aggregate size, ease of break-up, pores, root channels and compaction.",
      "Compare the observations across the soil blocks.",
    ],
    results: [
      {
        level: "Low",
        label: "Hard, cloddy",
        interpretation:
          "The soil contains large hard clods and fewer pores.",
      },
      {
        level: "Medium",
        label: "Mixed",
        interpretation:
          "The soil has an intermediate structural condition.",
      },
      {
        level: "High",
        label: "Crumbly, porous",
        interpretation:
          "The soil is well structured with a connected pore system.",
      },
    ],
  },

  {
    route: "soil-smell-test",
    testId: "SMELL_001",
    title: "Soil Smell Test",
    icon: "👃",
    category: "Biological",
    indicator: "Biological activity",
    highlight:
      "Uses smell to judge biological activity and soil condition. Healthy soils usually have a fresh, earthy smell.",
    equipment: ["Prepared soil blocks"],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Break open each soil block to expose a fresh surface.",
      "Smell the freshly exposed soil aggregates immediately.",
      "Compare the smell among the soil blocks.",
    ],
    results: [
      {
        level: "Low",
        label: "Unpleasant",
        interpretation:
          "An unpleasant smell may indicate poor aeration or other soil problems.",
      },
      {
        level: "Medium",
        label: "Weak",
        interpretation:
          "This indicates an intermediate level of biological activity.",
      },
      {
        level: "High",
        label: "Fresh earthy",
        interpretation:
          "This indicates active biological processes with sufficient air in the soil.",
      },
    ],
  },

  {
    route: "soil-colour-test",
    testId: "COLOUR_001",
    title: "Soil Colour Test",
    icon: "🎨",
    category: "Physical",
    indicator: "Colour and organic matter indication",
    highlight:
      "Compares soil colour to gain an understanding of organic matter content and drainage conditions.",
    equipment: ["Prepared soil blocks"],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Observe the freshly exposed surfaces of the soil blocks.",
      "Compare the darkness, brightness and any unusual colours.",
    ],
    results: [
      {
        level: "Low",
        label: "Pale",
        interpretation:
          "Pale soil is often associated with lower organic matter content.",
      },
      {
        level: "Medium",
        label: "Intermediate",
        interpretation:
          "The soil colour indicates an intermediate condition.",
      },
      {
        level: "High",
        label: "Darker (same soil type)",
        interpretation:
          "Darker soil of the same soil type is often associated with greater organic matter content.",
      },
    ],
  },

  {
    route: "slake-test",
    testId: "SLAKE_001",
    title: "Slake Test",
    icon: "🫧",
    category: "Physical",
    indicator: "Aggregate stability",
    highlight:
      "Assesses the stability of soil aggregates when exposed to water and indicates resistance to erosion.",
    equipment: [
      "Plastic bottle bottoms or transparent containers",
      "Water",
      "Soil aggregates",
    ],
    samplingTime: "",
    timePerSample: "",
    instructions: [
      "Collect similar-sized aggregates from each soil block.",
      "Place one aggregate into a water-filled container.",
      "Observe its breakdown and stability over several minutes.",
      "Compare its behaviour with aggregates from the other soil blocks.",
    ],
    results: [
      {
        level: "Low",
        label: "Unstable/Breaks apart",
        interpretation:
          "The soil aggregates are more susceptible to erosion.",
      },
      {
        level: "Medium",
        label: "Partial stability",
        interpretation:
          "The soil has an intermediate level of aggregate stability.",
      },
      {
        level: "High",
        label: "Stable",
        interpretation:
          "The soil has stronger structure and greater resistance to erosion.",
      },
    ],
  },
];

export default function Soiltestdetails() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedField = location.state?.field;

  const [started, setStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [fullResults, setFullResults] = useState({});
  const [fullAnalysisStep, setFullAnalysisStep] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isFullAnalysis = testId === "full-analysis";

  const currentTest = isFullAnalysis
    ? soilTests[fullAnalysisStep]
    : soilTests.find((test) => test.route === testId) || soilTests[0];

  const selectedResult = currentTest.results.find(
    (item) => item.level === selectedLevel
  );

  const currentFullAnswer = fullResults[currentTest.testId];
  const activeResult = isFullAnalysis ? currentFullAnswer : selectedResult;

  const isLastFullStep =
    isFullAnalysis && fullAnalysisStep === soilTests.length - 1;

  const fieldName =
    selectedField?.fieldName ||
    selectedField?.name ||
    "your selected field";

  const saveTestToLocalStorage = (newTest) => {
    const storageKey = `soilTests_${selectedField.id}`;

    const existingTests =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    const updatedTests = [newTest, ...existingTests];

    localStorage.setItem(storageKey, JSON.stringify(updatedTests));
  };

  const handleSingleSubmit = () => {
    if (!selectedField) {
      setError("No field selected. Please go back and select a field first.");
      return;
    }

    if (!selectedResult) {
      setError("Please select the result that best matches your observation.");
      return;
    }

    const newTest = {
      id: Date.now(),
      fieldId: selectedField.id,
      testId: currentTest.testId,
      testName: currentTest.title,
      category: currentTest.category,
      indicator: currentTest.indicator,
      analysisType: "single",
      result: {
        level: selectedResult.level,
        label: selectedResult.label,
        interpretation: selectedResult.interpretation,
      },
      status: "Recorded",
      date: new Date().toLocaleDateString(),
    };

    saveTestToLocalStorage(newTest);

    setError("");
    setSuccess(true);
  };

  const handleFullResultSelection = (resultOption) => {
    setFullResults((previousResults) => ({
      ...previousResults,
      [currentTest.testId]: {
        testId: currentTest.testId,
        testName: currentTest.title,
        category: currentTest.category,
        indicator: currentTest.indicator,
        level: resultOption.level,
        label: resultOption.label,
        interpretation: resultOption.interpretation,
      },
    }));

    setError("");
  };

  const saveFullAnalysis = () => {
    if (!selectedField) {
      setError("No field selected. Please go back and select a field first.");
      return;
    }

    const completedResults = Object.values(fullResults);

    if (completedResults.length === 0) {
      setError("Please complete at least one test before saving.");
      return;
    }

    const newTest = {
      id: Date.now(),
      fieldId: selectedField.id,
      testName: "Complete Soil Analysis",
      analysisType: "complete",
      result: completedResults,
      completedTests: completedResults.length,
      totalTests: soilTests.length,
      status: "Recorded",
      date: new Date().toLocaleDateString(),
    };

    saveTestToLocalStorage(newTest);

    setError("");
    setSuccess(true);
  };

  const handleFullAnalysisAdvance = () => {
    if (!currentFullAnswer) {
      setError(
        "Please select a result for this test or use Skip to continue."
      );
      return;
    }

    setError("");

    if (isLastFullStep) {
      saveFullAnalysis();
    } else {
      setFullAnalysisStep((previousStep) => previousStep + 1);
    }
  };

  const handleFullAnalysisSkip = () => {
    setError("");

    if (isLastFullStep) {
      saveFullAnalysis();
    } else {
      setFullAnalysisStep((previousStep) => previousStep + 1);
    }
  };

  const handlePreviousTest = () => {
    if (fullAnalysisStep === 0) {
      return;
    }
    setError("");
    setFullAnalysisStep((previousStep) => previousStep - 1);
  };

  const getResultClass = (level) => {
    return `result-option result-${level.toLowerCase()}`;
  };

  const getIndicatorState = () => {
    if (!activeResult) {
      return {
        label: "Awaiting observation",
        score: 0,
        note: "Choose the result that best fits what you saw in the field.",
        tone: "pending",
      };
    }

    const scoreByLevel = {
      Low: 35,
      Medium: 60,
      High: 85,
    };

    return {
      label: `${activeResult.level} • ${activeResult.label}`,
      score: scoreByLevel[activeResult.level] || 50,
      note: activeResult.interpretation,
      tone: activeResult.level.toLowerCase(),
    };
  };

  const indicatorState = getIndicatorState();
  return (
    <div className="test-details-page">
      <header className="test-details-header">
        <div className="test-brand">
          <div className="test-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Soil Test Guide</p>
          </div>
        </div>

        <div className="test-nav">
          <button onClick={() => navigate(-1)}>← Back</button>

          <button
            onClick={() =>
              navigate("/field-dashboard", {
                state: {
                  field: selectedField,
                },
              })
            }>
            My Field
          </button>
        </div>
      </header>

      <main className="test-details-container">
        {!success && (
          <>
            {isFullAnalysis && (
              <section className="step-progress">
                <div className="step-progress-bar">
                  <div
                    className="step-progress-fill"
                    style={{
                      width: `${
                        ((fullAnalysisStep + 1) / soilTests.length) * 100
                      }%`,
                    }} />
                </div>

                <p className="step-progress-text">
                  Test {fullAnalysisStep + 1} of {soilTests.length}
                </p>
              </section>
            )}

            <section className="test-intro-card">
              <div>
                <p className="small-title">
                  {currentTest.category.toUpperCase()} SOIL TEST
                </p>

                <h1>
                  {currentTest.icon} {currentTest.title}
                </h1>

                <p>{currentTest.highlight}</p>

                <p>
                  <strong>Indicator:</strong> {currentTest.indicator}
                </p>

                {currentTest.samplingTime && (
                  <p>
                    <strong>Best sampling time:</strong>{" "}
                    {currentTest.samplingTime}
                  </p>
                )}

                {currentTest.timePerSample && (
                  <p>
                    <strong>Estimated time:</strong>{" "}
                    {currentTest.timePerSample}
                  </p>
                )}
              </div>

              <div className="range-box">
                <h3>Equipment Required</h3>

                <ul>
                  {currentTest.equipment.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {!started && (
                  <button
                    className="submit-result-btn"
                    onClick={() => setStarted(true)} >
                    {isFullAnalysis
                      ? "Begin Complete Analysis"
                      : "Start This Test"}
                  </button>
                )}
              </div>
            </section>
          </>
        )}

        {started && !success && (
          <section
            className={
              isFullAnalysis
                ? "test-content-grid full-analysis-layout"
                : "test-content-grid"
            }>
            <div className="instruction-card">
              <h2>Step-by-Step Instructions</h2>

              <ol>
                {currentTest.instructions.map((step, index) => (
                  <li key={`${currentTest.testId}-${index}`}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="result-card">
              <h2>Record Your Observation</h2>

              <p>
                Select the option that best matches what you observed during
                the test.
              </p>

              <div className="result-options">
                {currentTest.results.map((resultOption) => {
                  const isSelected = isFullAnalysis
                    ? currentFullAnswer?.level === resultOption.level
                    : selectedLevel === resultOption.level;

                  return (
                    <button
                      type="button"
                      key={resultOption.level}
                      className={
                        isSelected
                          ? `${getResultClass(
                              resultOption.level
                            )} selected`
                          : getResultClass(resultOption.level)
                      }
                      onClick={() => {
                        if (isFullAnalysis) {
                          handleFullResultSelection(resultOption);
                        } else {
                          setSelectedLevel(resultOption.level);
                          setError("");
                        }
                      }} >
                      <span className="result-pill">{resultOption.level}</span>
                      <strong>{resultOption.label}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="result-indicator">
                <div className="result-indicator-head">
                  <span>Current indicator</span>
                  <strong>{indicatorState.label}</strong>
                </div>

                <div className="indicator-track">
                  <div
                    className={`indicator-fill ${indicatorState.tone}`}
                    style={{ width: `${indicatorState.score}%` }}
                  />
                </div>

                <p>{indicatorState.note}</p>
              </div>

              {!isFullAnalysis && selectedResult && (
                <div className="result-interpretation">
                  <h3>Your Result</h3>
                  <p>
                    <strong>{selectedResult.label}</strong>
                  </p>
                  <p>{selectedResult.interpretation}</p>
                </div>
              )}

              {isFullAnalysis && currentFullAnswer && (
                <div className="result-interpretation">
                  <h3>Result Interpretation</h3>
                  <p>
                    <strong>{currentFullAnswer.label}</strong>
                  </p>
                  <p>{currentFullAnswer.interpretation}</p>
                </div>
              )}

              <label className="upload-result">
                📷 Upload Test Photo Optional
                <input type="file" accept="image/*" />
              </label>

              {error && <p className="form-error">{error}</p>}

              {isFullAnalysis ? (
                <div className="success-actions">
                  {fullAnalysisStep > 0 && (
                    <button
                      type="button"
                      className="submit-result-btn"
                      onClick={handlePreviousTest}>
                      ← Previous
                    </button>
                  )}

                  <button
                    type="button"
                    className="submit-result-btn"
                    onClick={handleFullAnalysisAdvance}>
                    {isLastFullStep
                      ? "Finish Complete Analysis"
                      : "Next Test →"}
                  </button>

                  <button
                    type="button"
                    className="submit-result-btn"
                    onClick={handleFullAnalysisSkip} >
                    Skip
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="submit-result-btn"
                  onClick={handleSingleSubmit}>
                  Save Test Result
                </button>
              )}
            </div>
          </section>
        )}

        {success && (
          <section className="success-card">
            <div className="success-icon">✓</div>

            <h2>
              {isFullAnalysis
                ? "Complete Soil Analysis Saved"
                : `${currentTest.title} Saved Successfully`}
            </h2>

            <p>
              Your soil test result has been recorded for{" "}
              <strong>{fieldName}</strong>.
            </p>

            {isFullAnalysis ? (
              <div className="result-interpretation">
                <h3>Analysis Summary</h3>
                <p>
                  You completed {Object.keys(fullResults).length} of{" "}
                  {soilTests.length} recommended soil health tests.
                </p>
              </div>
            ) : (
              selectedResult && (
                <div className="result-interpretation">
                  <h3>{selectedResult.label}</h3>
                  <p>{selectedResult.interpretation}</p>
                </div>
              )
            )}

            <div className="success-actions">
              <button
                onClick={() =>
                  navigate("/field-dashboard", {
                    state: {
                      field: selectedField,
                    },
                  })
                }>
                Back to My Field
              </button>

              <button
                onClick={() =>
                  navigate("/soil-test", {
                    state: {
                      field: selectedField,
                    },
                  })
                }>
                Perform Another Test
              </button>

              <button
                onClick={() =>
                  navigate("/recommendations", {
                    state: {
                      field: selectedField,
                    },
                  })
                }>
                View Recommendations
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
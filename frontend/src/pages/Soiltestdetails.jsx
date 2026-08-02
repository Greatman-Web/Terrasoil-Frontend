//import necessary modules and components
import { useState } from "react";
import {useParams,useNavigate,useLocation,} from "react-router-dom";
import "../styles/Soiltestdetails.css";
//import images for soil test instructions
import colour01 from "../assets/soiltestinstructions/colour_01.png";
import colour02 from "../assets/soiltestinstructions/colour_02.png";
import colour03 from "../assets/soiltestinstructions/colour_03.png";
import fauna01 from "../assets/soiltestinstructions/fauna_01.png";
import fauna02 from "../assets/soiltestinstructions/fauna_02.png";
import fauna03 from "../assets/soiltestinstructions/fauna_03.png";
import infil01 from "../assets/soiltestinstructions/infil_01.png";
import infil02 from "../assets/soiltestinstructions/infil_02.png";
import infil03 from "../assets/soiltestinstructions/infil_03.png";
import pen01 from "../assets/soiltestinstructions/pen_01.png";
import pen02 from "../assets/soiltestinstructions/pen_02.png";
import root01 from "../assets/soiltestinstructions/root_01.png";
import root02 from "../assets/soiltestinstructions/root_02.png";
import slake01 from "../assets/soiltestinstructions/slake_01.png";
import slake02 from "../assets/soiltestinstructions/slake_02.png";
import smell01 from "../assets/soiltestinstructions/smell_01.png";
import smell02 from "../assets/soiltestinstructions/smell_02.png";
import vess01 from "../assets/soiltestinstructions/vess_01.png";
import vess02 from "../assets/soiltestinstructions/vess_02.png";

// The 8 soil tests available in the application, along with their details.
const soilTests = [
  {
    route: "infiltration-test",
    testId: "INFIL_001",
    title: "Infiltration Test",
    icon: "💧",
    category: "Physical",
    indicator: "Water infiltration",
    highlight:
      "This test provides indications of the soil's ability to absorb and store water, as well as to supply plants with water and other nutrients.",
    equipment: ["Top half of plastic bottle including bottle cap"],
    samplingTime: "When the soil is dry.",
    timePerSample: "Approximately 10 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the blocks of soil side-by-side, facing upward, to allow direct comparison.",
      "Remove any flora or debris, taking great care to avoid cracking the soil block.",
      "Carefully press the bottle cap into the surface to prepare the hole for the bottle.",
      "Remove the bottle cap and push the top half of the plastic bottle upside down into the soil surface. Pour water into the cut end and compare the time it takes for the water to infiltrate into the soil.",
    ],
    results: [
      {
        level: "Low",
        label: "Slow",
        interpretation:
          "Water enters the soil slowly, increasing the risk of puddles, runoff, and erosion. Crops may suffer from waterlogging in wet periods or lack of water in dry periods.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "The soil can store a reasonable amount of water for crops but may struggle during heavy rainfall.",
      },
      {
        level: "High",
        label: "Fast",
        interpretation:
          "Water enters the soil quickly, reducing the risk of flooding and erosion. This usually indicates good soil structure and sufficient organic matter for healthy crop growth.",
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
      "This test assesses the physical condition of the soil, particularly soil structure and soil compaction.",
    equipment: ["Spade", "Screwdriver, stiff stick or metal rod"],
    samplingTime: "Immediately after harvest, before ploughing.",
    timePerSample: "Approximately 10 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the blocks of soil side-by-side to allow direct comparison.",
      "Using approximately the same amount of force, push the stick several times into the extracted soil block.",
      "Observe how easily and how deeply you can push the stick into the soil block.",
    ],
    results: [
      {
        level: "Low",
        label: "Hard",
        interpretation:
          "Hard soils contain fewer small holes, making it more difficult for roots, air, water, and helpful animals and insects to move through the soil. This restricts plant growth.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "The soil structure is not ideal, whether due to a lack of organic matter, poor root development, or insufficient water infiltration.",
      },
      {
        level: "High",
        label: "Easy",
        interpretation:
          "Healthy soils generally have a well-developed soil structure, created by roots and earthworms, which form numerous small holes that promote plant growth.",
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
      "This test indicates the soil structure and stability. It also gives insights into nutrient and water availability in the soil.",
    equipment: ["Spade"],
    samplingTime: "Immediately after harvest, before ploughing.",
    timePerSample: "Approximately 5 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the blocks of soil side-by-side to allow direct comparison.",
      "Using a spade, gently break the clods apart so the roots can be observed.",
      "Assess the root system by looking at the length, number, density, and diversity of the roots.",
    ],
    results: [
      {
        level: "Low",
        label: "Few, shallow",
        interpretation:
          "Roots are limited, reducing the plants' ability to access water and nutrients and therefore increasing vulnerability to drought stress, potentially leading to lower yields.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "Roots are moderately developed, allowing access to water and nutrients. Plant growth is generally supported, although soil conditions may still restrict the full use of available resources.",
      },
      {
        level: "High",
        label: "Many, deep",
        interpretation:
          "Root exploration is extensive, indicating that plants can effectively utilize water and nutrients. This supports greater resilience to drought stress and can contribute to higher and more stable productivity.",
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
      "This test indicates the abundance and diversity of soil fauna, which supports nutrient cycling, organic matter decomposition, and the formation of pores that improve air and water movement through the soil.",
    equipment: ["Spade"],
    samplingTime: "Immediately after harvest, before ploughing.",
    timePerSample: "Approximately 10 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the blocks of soil side-by-side to allow direct comparison.",
      "Using a spade, take a soil sample to the required measurements.",
      "Gently break up clods and soil aggregates with your fingers to extract all animals contained in the soil sample.",
      "Count the number of unique animals and the number of individuals of each animal.",
    ],
    results: [
      {
        level: "Low",
        label: "Few",
        interpretation:
          "Soil fauna activity is limited, reducing the breakdown and incorporation of organic matter into the soil. This can limit nutrient cycling, soil structure development, and water infiltration, potentially affecting crop productivity.",
      },
      {
        level: "Medium",
        label: "Moderate",
        interpretation:
          "Soil fauna activity supports some organic matter breakdown and nutrient cycling. Soil functions are generally maintained, although there may still be opportunities to improve soil biological activity and the benefits it provides to crop growth.",
      },
      {
        level: "High",
        label: "Many",
        interpretation:
          "Soil fauna activity is high, promoting the breakdown and incorporation of organic matter, nutrient cycling, and soil structure development. This can improve the soil's ability to supply water and nutrients to crops and support higher and more stable productivity.",
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
      "This test assesses the soil structure, which affects root growth, the movement of water and air, and biological activity, all of which ultimately affect crop production.",
    equipment: ["Spade"],
    samplingTime:
      "During the dry season, when the soil is moist but not wet.",
    timePerSample: "Approximately 10 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the blocks of soil side-by-side to allow direct comparison.",
      "Break open each soil block to observe visible pores, root channels, and earthworm channels.",
      "Select a soil aggregate and first try to break it up using only your fingers. If this is not possible, try using one hand or both hands.",
    ],
    results: [
      {
        level: "Low",
        label: "Compact",
        interpretation:
          "Compacted soil restricts root growth and reduces the movement of water and air through the soil. This can limit crop growth, increase runoff, and reduce resilience to drought and heavy rainfall.",
      },
      {
        level: "Medium",
        label: "Intact",
        interpretation:
          "The soil structure supports some movement of roots, water, and air, but is not optimal. Crop growth is maintained, although improving soil structure could enhance productivity.",
      },
      {
        level: "High",
        label: "Friable",
        interpretation:
          "A friable soil allows roots, water, and air to move easily through the soil. This supports crop growth, improves water infiltration and storage, and improves resilience to weather extremes.",
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
      "This test uses smell to judge the biological condition of the soil. It indicates the activity of helpful soil organisms, whether the soil contains enough air for them to thrive, and how well the organic matter is breaking down.",
    equipment: ["Spade"],
    samplingTime: "During the dry season.",
    timePerSample: "Approximately 5 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the soil blocks side-by-side to allow direct comparison.",
      "Break open each soil block to expose a fresh surface that has not been exposed to the air.",
      "Take a few aggregates from the freshly exposed soil of the block and smell them immediately.",
    ],
    results: [
      {
        level: "Low",
        label: "Unpleasant",
        interpretation:
          "An unpleasant smell may indicate slow organic matter breakdown or poor nutrient cycling, which can limit the soil's ability to support healthy plant growth.",
      },
      {
        level: "Medium",
        label: "Weak",
        interpretation:
          "A weak soil smell suggests that there are few beneficial organisms present, which normally maintain soil functions, although this may not be sufficient to fully promote plant growth.",
      },
      {
        level: "High",
        label: "Fresh earthy",
        interpretation:
          "A fresh earthy smell indicates many helpful living things that break down crop residues, roots, and manure. This supports nutrient cycling, soil health, and plant growth.",
      },
    ],
  },

  {
    route: "soil-colour-test",
    testId: "COLOUR_001",
    title: "Soil Colour Test",
    icon: "🎨",
    category: "Physical",
    indicator: "Colour / organic matter indication",
    highlight:
      "This test allows us to estimate the organic matter content in the soil based on its colour, which is also affected by how well it drains.",
    equipment: ["Spade"],
    samplingTime: "During the dry season.",
    timePerSample: "Approximately 5 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Put the soil blocks side-by-side to allow direct comparison.",
      "Break open each soil block to expose a fresh surface that has not been exposed to the air.",
      "Take a few aggregates from the freshly exposed soil of the block and observe the colour.",
      "Compare the colour of all soil aggregates.",
    ],
    results: [
      {
        level: "Low",
        label: "Pale",
        interpretation:
          "A pale soil colour may indicate poor drainage and low organic matter levels. This can reduce the availability of nutrients, hinder the breakdown of organic matter, and limit root and crop growth.",
      },
      {
        level: "Medium",
        label: "Intermediate",
        interpretation:
          "An intermediate soil colour, neither dark nor pale, suggests moderate organic matter levels. The soil can generally support crop growth, although there may be opportunities to improve nutrient retention and water-holding capacity.",
      },
      {
        level: "High",
        label: "Dark",
        interpretation:
          "A darker soil colour often indicates higher organic matter levels. This can improve nutrient supply, water retention, and soil structure, helping to sustain healthy crop growth.",
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
      "This test indicates the stability of soil aggregates when exposed to water. It provides an indication of how well the soil can resist breakdown during rainfall and its susceptibility to erosion.",
    equipment: ["Spade", "Bottom part of a cut-up plastic bottle"],
    samplingTime: "During the dry season.",
    timePerSample: "Approximately 10 minutes",
    instructions: [
      "Select sampling areas, for example the most productive and least productive fields on the farm, and extract a block of soil using a spade. Take out the soil aggregate and put the soil aggregates side-by-side to allow direct comparison.",
      "Collect soil aggregates of similar size. Fill the bottom part of a cut-up plastic bottle with water to a depth that allows the sample to be completely under water.",
      "Put the soil aggregates into the water and start the timer. The plastic bottle can be shaken gently to speed up the breakdown of the aggregates.",
    ],
    results: [
      {
        level: "Low",
        label: "Unstable",
        interpretation:
          "The soil is more vulnerable to erosion and surface crusting. Water infiltration and storage are limited, which can reduce water availability for crops and increase the risk of runoff and soil loss.",
      },
      {
        level: "Medium",
        label: "Partially stable",
        interpretation:
          "The soil provides moderate resistance to erosion and allows some water infiltration and storage. While soil functions are generally maintained, opportunities may exist to improve resilience and water availability for crops.",
      },
      {
        level: "High",
        label: "Stable",
        interpretation:
          "The soil is resistant to erosion and supports efficient water infiltration and storage. This helps maintain water availability for crops, improves resilience to weather extremes, and supports stable productivity.",
      },
    ],
  },
];
// This object maps each soil test to its corresponding instruction images
const instructionImages = {
  INFIL_001: {
    1: infil01,
    2: infil02,
    3: infil03,
  },

  PEN_001: {
    1: pen01,
    2: pen02,
  },

  ROOT_DEV_001: {
    1: root01,
    2: root02,
  },

  FAUNA_001: {
    1: fauna01,
    2: fauna02,
    3: fauna03,
  },

  VESS_001: {
    1: vess01,
    2: vess02,
  },

  SMELL_001: {
    1: smell01,
    2: smell02,
  },

  COLOUR_001: {
    1: colour01,
    2: colour02,
    3: colour03,
  },

  SLAKE_001: {
    1: slake01,
    2: slake02,
  },
};
// This function creates a route for the selected soil test.
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
  // This section defines the available soil tests and their details.
  const currentTest = isFullAnalysis
    ? soilTests[fullAnalysisStep]
    : soilTests.find((test) => test.route === testId) || soilTests[0];

  const selectedResult = currentTest.results.find(
    (item) => item.level === selectedLevel
  );
  // This section retrieves the current result for the full analysis.
  const currentFullAnswer = fullResults[currentTest.testId];
  const activeResult = isFullAnalysis ? currentFullAnswer : selectedResult;
  // This section checks if the current step is the last step in the full analysis.
  const isLastFullStep =
    isFullAnalysis && fullAnalysisStep === soilTests.length - 1;
  // This section retrieves the name of the selected field.
  const fieldName =
    selectedField?.fieldName ||
    selectedField?.name ||
    "your selected field";

  const saveTestToLocalStorage = (newTest) => {
    const storageKey = `soilTests_${selectedField.id}`;
// This section retrieves existing tests from local storage and updates them with the new test.
    const existingTests =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    const updatedTests = [newTest, ...existingTests];

    localStorage.setItem(storageKey, JSON.stringify(updatedTests));
  };
  // This function handles the submission of a single soil test result.
  const handleSingleSubmit = () => {
    if (!selectedField) {
      setError("No field selected. Please go back and select a field first.");
      return;
    }

    if (!selectedResult) {
      setError("Please select the result that best matches your observation.");
      return;
    }
    // This section creates a new test object with the selected result and saves it to local storage.
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
  // This function handles the selection of a result option for the full analysis.
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
    // This section creates a new test object for the complete soil analysis and saves it to local storage.
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
 // This function handles skipping a test in the full analysis.
  const handleFullAnalysisSkip = () => {
    setError("");

    if (isLastFullStep) {
      saveFullAnalysis();
    } else {
      setFullAnalysisStep((previousStep) => previousStep + 1);
    }
  };
  // This function handles going back to the previous test in the full analysis.
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
  // This function determines the state of the indicator based on the selected result.
  const getIndicatorState = () => {
    if (!activeResult) {
      return {
        label: "Awaiting observation",
        score: 0,
        note: "Choose the result that best fits what you saw in the field.",
        tone: "pending",
      };
    }
    // This object maps the result levels to corresponding scores.
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
                    }}
                  />
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
                    onClick={() => setStarted(true)}>
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

              <div className="instruction-list">
  {currentTest.instructions.map((step, index) => {
    // Retrieve the corresponding instruction image for the current step.
    const instructionImage =
      instructionImages[currentTest.testId]?.[index];

    const isPreparation = index === 0;

    return (
     <div
       key={`${currentTest.testId}-${index}`}
       className={
      isPreparation
      ? "instruction-item preparation-item"
      : "instruction-item"}>
        <div className="instruction-step-heading">
          {isPreparation ? (
            <span className="preparation-label">Preparation</span>
          ) : (
            <span className="step-label">
              Step {index}
            </span>
          )}
        </div>

        <p className="instruction-text">{step}</p>

        {instructionImage && (
          <img
            className="instruction-image"
            src={instructionImage}
            alt={`${currentTest.title} step ${index}`}
            loading="lazy"
          />
        )}
      </div>
    );
  })}
</div>
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
                      }}>
                      <span className="result-pill">{resultOption.level}</span>
                      <strong>{resultOption.label}</strong>

                      <p className="result-option-text">
                        {resultOption.interpretation}
                      </p>
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
                    onClick={handleFullAnalysisSkip}>
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
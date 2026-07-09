import { useState } from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import "../styles/Soiltestdetails.css";

export default function Soiltestdetails() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedField = location.state?.field;
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const testData = {
    "soil-ph": {
      title: "Soil pH Test",
      icon: "🌱",
      meaning: "Soil pH shows whether your soil is acidic, neutral, or alkaline.",
      range: "Ideal range: 6.0 - 7.0",
      matters: "Soil pH affects how well crops absorb nutrients from the soil.",
      placeholder: "Enter pH value",
      instructions: [
        "Collect a small soil sample from different parts of the field.",
        "Mix the soil with clean water as directed by your pH test kit.",
        "Dip the pH strip or use the pH meter.",
        "Wait for the result or colour change.",
        "Compare the result with the pH chart and enter the value.",
      ],
    },

    moisture: {
      title: "Moisture Test",
      icon: "💧",
      meaning: "Moisture shows how much water is available in the soil.",
      range: "Ideal range depends on crop and soil type.",
      matters: "Moisture helps farmers know when to irrigate or reduce watering.",
      placeholder: "Enter moisture percentage",
      instructions: [
        "Insert the moisture sensor into the soil.",
        "Make sure the sensor is deep enough around the crop root zone.",
        "Wait for the reading to stabilise.",
        "Record the moisture percentage shown.",
        "Upload a photo of the reading if available.",
      ],
    },

    "nitrogen-n": {
      title: "Nitrogen Test",
      icon: "🌿",
      meaning: "Nitrogen helps crops grow healthy green leaves.",
      range: "Low, Medium, or High",
      matters: "Low nitrogen can reduce crop growth and leaf colour.",
      placeholder: "Enter nitrogen result",
      instructions: [
        "Collect a soil sample from the selected field.",
        "Use the nitrogen test solution or capsule from your soil kit.",
        "Mix the soil sample with the testing solution.",
        "Wait for the colour result.",
        "Compare the colour with the nitrogen guide chart.",
      ],
    },

    "phosphorus-p": {
      title: "Phosphorus Test",
      icon: "🌾",
      meaning: "Phosphorus supports root growth and crop development.",
      range: "Low, Medium, or High",
      matters: "Phosphorus is important for strong roots and early crop growth.",
      placeholder: "Enter phosphorus result",
      instructions: [
        "Collect soil from the root area of the crop.",
        "Place the sample into the phosphorus test container.",
        "Add the phosphorus testing solution as instructed.",
        "Wait for the colour reaction.",
        "Compare the result with the guide chart and record it.",
      ],
    },

    "potassium-k": {
      title: "Potassium Test",
      icon: "🍃",
      meaning: "Potassium helps crops resist stress and improves crop quality.",
      range: "Low, Medium, or High",
      matters: "Potassium improves crop strength, quality, and resistance to drought.",
      placeholder: "Enter potassium result",
      instructions: [
        "Collect soil from different parts of the field.",
        "Add the soil sample to the potassium test container.",
        "Mix with the potassium testing solution.",
        "Allow the result to develop.",
        "Compare the colour or reading with the potassium chart.",
      ],
    },

    "organic-matter": {
      title: "Organic Matter Test",
      icon: "🌍",
      meaning: "Organic matter improves soil structure and fertility.",
      range: "Higher organic matter is generally better.",
      matters: "Organic matter helps soil hold water and nutrients.",
      placeholder: "Enter organic matter result",
      instructions: [
        "Collect soil from the top layer of the field.",
        "Remove stones, roots, and unwanted materials.",
        "Use the organic matter test kit or lab result.",
        "Check the organic matter level.",
        "Record the value or category shown.",
      ],
    },

    temperature: {
      title: "Temperature Test",
      icon: "🌡️",
      meaning: "Soil temperature affects seed germination and root activity.",
      range: "Ideal temperature depends on crop type.",
      matters: "Temperature helps farmers know the best time for planting.",
      placeholder: "Enter temperature value",
      instructions: [
        "Insert the soil thermometer into the field soil.",
        "Place it near the crop root zone.",
        "Wait until the reading becomes stable.",
        "Record the temperature value.",
        "Avoid testing under direct extreme heat if possible.",
      ],
    },

    "full-analysis": {
      title: "Complete Soil Analysis",
      icon: "🧪",
      meaning: "A complete soil analysis records all key soil properties together.",
      range:
        "Includes pH, moisture, nitrogen, phosphorus, potassium, organic matter, and temperature.",
      matters:
        "A complete analysis gives a broader understanding of the soil condition.",
      placeholder: "",
      instructions: [
        "Collect soil samples from different parts of the field.",
        "Use the complete soil testing kit or available lab result.",
        "Test each soil property one after another.",
        "Record all available values carefully.",
        "Upload a photo of the full test result if available.",
      ],
    },
  };

  const currentTest = testData[testId] || testData["soil-ph"];
  const isFullAnalysis = testId === "full-analysis";

  const handleSubmit = () => {
  if (!selectedField) {
    setError("No field selected. Please go back and select a field first.");
    return;
  }

  if (!isFullAnalysis && result.trim() === "") {
    setError("Please enter your test result before submitting.");
    return;
  }

  const newTest = {
    id: Date.now(),
    fieldId: selectedField.id,
    testName: currentTest.title,
    result: isFullAnalysis ? "Full analysis recorded" : result,
    status: "Good",
    date: new Date().toLocaleDateString(),
  };

  const existingTests =
    JSON.parse(localStorage.getItem(`soilTests_${selectedField.id}`)) || [];

  const updatedTests = [newTest, ...existingTests];

  localStorage.setItem(
    `soilTests_${selectedField.id}`,
    JSON.stringify(updatedTests)
  );

  setError("");
  setSuccess(true);
};
  return (
    <div className="test-details-page">
      <header className="test-details-header">
        <div className="test-brand">
          <div className="test-logo">🌱</div>
          <div>
            <h2>TerraSoil</h2>
            <p>Soil Test Guide</p>
          </div>
        </div>

        <div className="test-nav">
          <button onClick={() => navigate(-1)}>← Back</button>
          <button onClick={() => navigate("/field-dashboard")}>My Field</button>
        </div>
      </header>

      <main className="test-details-container">
        <section className="test-intro-card">
          <div>
            <p className="small-title">SOIL TEST GUIDANCE</p>
            <h1>
              {currentTest.icon} {currentTest.title}
            </h1>
            <p>{currentTest.meaning}</p>
            <p>{currentTest.matters}</p>
          </div>

          <div className="range-box">
            <h3>Recommended Guide</h3>
            <p>{currentTest.range}</p>

            {!started && (
              <button
                className="submit-result-btn"
                onClick={() => setStarted(true)}
              >
                Start This Test
              </button>
            )}
          </div>
        </section>

        {started && !success && (
          <section className="test-content-grid">
            <div className="instruction-card">
              <h2>Step-by-Step Instructions</h2>

              <ol>
                {currentTest.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="result-card">
              <h2>{isFullAnalysis ? "Enter Full Results" : "Enter Test Result"}</h2>

              {isFullAnalysis ? (
                <div className="full-analysis-form">
                  <input type="number" placeholder="Soil pH" />
                  <input type="number" placeholder="Moisture (%)" />
                  <input type="text" placeholder="Nitrogen (N)" />
                  <input type="text" placeholder="Phosphorus (P)" />
                  <input type="text" placeholder="Potassium (K)" />
                  <input type="text" placeholder="Organic Matter" />
                  <input type="number" placeholder="Temperature (°C)" />
                </div>
              ) : (
                <input
                  type="text"
                  placeholder={currentTest.placeholder}
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                />
              )}

              <label className="upload-result">
                📷 Upload Test Photo Optional
                <input type="file" accept="image/*" />
              </label>

              {error && <p className="form-error">{error}</p>}

              <button className="submit-result-btn" onClick={handleSubmit}>
                Submit Test Result
              </button>
            </div>
          </section>
        )}

        {success && (
          <section className="success-card">
            <h2>✅ {currentTest.title} Saved Successfully</h2>
            <p>Your soil test result has been recorded.</p>

            <div className="success-actions">
              <button
  onClick={() =>
    navigate("/field-dashboard", {
      state: { field: selectedField },
    })
  }
>
  Back to My Field
</button>

              <button onClick={() => navigate("/recommendations")}>
                View Recommendations
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
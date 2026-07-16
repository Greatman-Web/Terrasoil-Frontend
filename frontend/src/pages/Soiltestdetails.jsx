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


const [fullResults, setFullResults] = useState({
  structureQuality: "",
  aggregateSize: "",
  porosity: "",
  roots: "",
  vessScore: "",
  rootDevelopment: "",
  speciesCount: "",
  individualsCount: "",
  munsellHue: "",
  munsellValue: "",
  munsellChroma: "",
  soilColour: "",
  penetrationResistance: "",
  pourOne: "",
  pourTwo: "",
  pourThree: "",
  pourFour: "",
  pourFive: "",
  steadyStatePour: "",
  totalWater: "",
  waterPerBottle: "",
  ringDiameter: "",
  slakesTime: "",
  slakesStability: "",
  slakesAppTime: "",
  slakesAppLocation: "",
  slakesImageNumbers: "",
  slakesAppStability: "",
  phValue: "",
  socColour: "",
  socFeel: "",
  socSmell: "",
  socPhotoTaken: "",
  socPhotoLocation: "",
  socImageNumber: "",
  teabagType: "",
  massBefore: "",
  massAfter: "",
  daysInSoil: "",
  decomposition: "",
  cropArea: "",
  cropType: "",
  cropYield: "",
  gullyInitialDistance: "",
  numberOfPegs: "",
  daysAfterInstallation: "",
  gullyNewDistance: "",
});

const handleFullResultChange = (event) => {
  const { name, value } = event.target;

  setFullResults((previousResults) => ({
    ...previousResults,
    [name]: value,
  }));
};

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
    "soil-structure": {
  title: "Visual Evaluation of Soil Structure",
  icon: "🧱",
  meaning:
    "This test checks the condition of the soil structure, aggregates, pores and roots.",
  range:
    "Structure quality ranges from Friable to Very compact, with a score from 1 to 5.",
  matters:
    "Good soil structure supports water movement, air circulation and healthy root growth.",
  placeholder: "Enter structure score from 1 to 5",
  instructions: [
    "Collect a block of soil from the selected field.",
    "Carefully break the soil apart without crushing it.",
    "Observe the structure quality and aggregate size.",
    "Check the amount of pores and the position of roots.",
    "Give the soil a score between 1 and 5.",
  ],
},

"root-development": {
  title: "Root Development Test",
  icon: "🌱",
  meaning:
    "This test checks the amount and distribution of roots inside the soil.",
  range: "Low, Low Moderate, Moderate, High Moderate or High.",
  matters:
    "Healthy root development helps plants absorb water and nutrients effectively.",
  placeholder: "Enter root development category",
  instructions: [
    "Dig carefully around the root zone of the crop.",
    "Expose the roots without cutting them unnecessarily.",
    "Observe the number of roots and fine roots.",
    "Check whether the roots are restricted or spread freely.",
    "Record the closest root development category.",
  ],
},

"tsbf-test": {
  title: "TSBF Test",
  icon: "🪱",
  meaning:
    "The TSBF test checks the number and variety of visible soil organisms.",
  range:
    "Species count and individual count are recorded as Low, Medium or High.",
  matters:
    "A greater number and variety of soil organisms often indicates healthier biological activity.",
  placeholder: "Enter TSBF result",
  instructions: [
    "Mark a small sampling area in the field.",
    "Remove and inspect the soil carefully.",
    "Count the different visible soil species.",
    "Count the total number of individual organisms.",
    "Record both counts as Low, Medium or High.",
  ],
},

"soil-colour": {
  title: "Soil Colour Test",
  icon: "🎨",
  meaning:
    "Soil colour can provide information about organic matter, minerals and drainage.",
  range:
    "Dark brown/Black, Medium brown, Red, Yellowish brown or Grey/Mottled/Pale.",
  matters:
    "Dark soil may contain more organic matter, while grey or mottled soil may indicate drainage problems.",
  placeholder: "Enter or select soil colour",
  instructions: [
    "Collect a fresh soil sample.",
    "Remove stones, roots and crop residue.",
    "Observe the soil in natural daylight.",
    "Compare the colour with a Munsell chart if available.",
    "Record the Munsell code or the closest visual colour category.",
  ],
},

"penetration-resistance": {
  title: "Penetration Resistance Test",
  icon: "📏",
  meaning:
    "This test measures how easily a rod or tool can enter the soil.",
  range: "Good: at least 20 cm, Fair: 5–20 cm, Poor: less than 5 cm.",
  matters:
    "High resistance may indicate compacted soil that restricts roots and water movement.",
  placeholder: "Enter Good, Fair or Poor",
  instructions: [
    "Select a representative area of the field.",
    "Push the testing rod vertically into the soil.",
    "Measure how deeply it enters before strong resistance is felt.",
    "Repeat the test in several locations.",
    "Record the result as Good, Fair or Poor.",
  ],
},

"beerkan-infiltration": {
  title: "Beerkan Infiltration Test",
  icon: "💧",
  meaning:
    "This test measures how quickly water enters the soil.",
  range:
    "Record the time for each pour, steady-state pour number, total water used and ring diameter.",
  matters:
    "Good infiltration helps reduce runoff and allows water to reach plant roots.",
  placeholder: "Enter infiltration result",
  instructions: [
    "Place the infiltration ring firmly into the soil.",
    "Pour a measured amount of water into the ring.",
    "Record how long the water takes to infiltrate.",
    "Repeat the pour until the infiltration time becomes steady.",
    "Record the times, total water used and ring diameter.",
  ],
},

"slakes-test": {
  title: "Slakes Test",
  icon: "🫧",
  meaning:
    "The slakes test checks whether soil aggregates remain stable when placed in water.",
  range: "Poor or Good.",
  matters:
    "Stable soil aggregates resist erosion and help maintain soil structure.",
  placeholder: "Enter Poor or Good",
  instructions: [
    "Collect a dry soil aggregate.",
    "Place it gently into clean water.",
    "Observe it for approximately 5 to 10 minutes.",
    "Check whether it remains intact or falls apart.",
    "Record Good if it remains stable or Poor if it breaks apart.",
  ],
},

"slakes-app-test": {
  title: "Slakes App Test",
  icon: "📷",
  meaning:
    "This test records soil aggregate stability using photographs before and after water exposure.",
  range: "Poor or Good, with before-and-after photographs.",
  matters:
    "Photographs make it easier to compare aggregate stability over time.",
  placeholder: "Enter Poor or Good",
  instructions: [
    "Take a clear photograph of the dry soil aggregate.",
    "Place the aggregate in water.",
    "Wait approximately 10 minutes.",
    "Take another photograph after water exposure.",
    "Record the stability result and image numbers.",
  ],
},

"soc-observation": {
  title: "SOC Colour, Feel and Smell Test",
  icon: "🌍",
  meaning:
    "This test estimates soil organic carbon by observing soil colour, texture and smell.",
  range:
    "Colour, Feel and Smell are each recorded separately.",
  matters:
    "Organic carbon improves soil fertility, structure, moisture retention and biological activity.",
  placeholder: "Enter SOC observation",
  instructions: [
    "Collect a fresh topsoil sample.",
    "Observe whether the soil is dark, brown, red, yellowish or grey.",
    "Rub the soil between your fingers to assess how it feels.",
    "Smell the soil carefully.",
    "Record the colour, feel and smell categories.",
  ],
},

"soc-app-test": {
  title: "SOC App Test",
  icon: "📱",
  meaning:
    "This test records a soil photograph for future soil organic carbon analysis.",
  range: "Photo recorded inside the app or uploaded manually.",
  matters:
    "A consistent soil photograph can support future image-based SOC analysis.",
  placeholder: "Enter image reference",
  instructions: [
    "Prepare a clean soil sample.",
    "Place it under good, even lighting.",
    "Take a clear photograph without shadows.",
    "Use the app camera or upload an existing image.",
    "Record the image number or reference.",
  ],
},

"teabag-index": {
  title: "Teabag Index Test",
  icon: "🍵",
  meaning:
    "The teabag index measures how quickly organic material decomposes in the soil.",
  range:
    "Low, Medium or High decomposition based on mass loss.",
  matters:
    "Decomposition gives an indication of soil biological activity.",
  placeholder: "Enter decomposition result",
  instructions: [
    "Record the type of teabag being used.",
    "Measure and record its mass before burial.",
    "Bury the teabag in the soil for the required period.",
    "Remove, dry and measure its final mass.",
    "Record the number of days and decomposition category.",
  ],
},

"crop-yield-evaluation": {
  title: "Crop Yield Evaluation",
  icon: "🌾",
  meaning:
    "This test records the crop yield produced from a known field area.",
  range: "Area in hectares, crop type and yield in tonnes.",
  matters:
    "Yield information helps compare soil condition with farm productivity.",
  placeholder: "Enter crop yield result",
  instructions: [
    "Confirm the total area of the field.",
    "Record the crop grown on the field.",
    "Measure the total harvested crop.",
    "Convert the harvest quantity into tonnes if needed.",
    "Record the field area, crop type and yield.",
  ],
},

"gully-retreat": {
  title: "Gully Retreat Test",
  icon: "📍",
  meaning:
    "This test monitors how the position of a gully changes over time.",
  range:
    "Record peg distance, number of pegs, elapsed days and the new distance.",
  matters:
    "Monitoring gully movement helps farmers understand and manage soil erosion.",
  placeholder: "Enter gully measurement",
  instructions: [
    "Install fixed marker pegs near the gully.",
    "Measure the initial distance between each peg and the gully edge.",
    "Record the date and number of pegs.",
    "Return after the monitoring period.",
    "Measure and record the new distance to the gully edge.",
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

  if (isFullAnalysis) {
    const requiredFullFields = [
      fullResults.structureQuality,
      fullResults.rootDevelopment,
      fullResults.speciesCount,
      fullResults.individualsCount,
      fullResults.soilColour,
      fullResults.penetrationResistance,
      fullResults.slakesStability,
      fullResults.phValue,
      fullResults.socColour,
      fullResults.socFeel,
      fullResults.socSmell,
    ];

    const hasEmptyField = requiredFullFields.some(
      (field) => String(field).trim() === ""
    );

    if (hasEmptyField) {
      setError("Please complete the required full analysis fields.");
      return;
    }
  }

  const newTest = {
    id: Date.now(),
    fieldId: selectedField.id,
    testName: currentTest.title,
    analysisType: isFullAnalysis ? "complete" : "quick",
    result: isFullAnalysis ? fullResults : result,
    status: "Recorded",
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
            <h2>Farmily</h2>
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
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="result-card">
              <h2>{isFullAnalysis ? "Enter Full Results" : "Enter Test Result"}</h2>

             {isFullAnalysis ? (
  <div className="complete-analysis-form">

    {/* VESS */}

    <div className="analysis-group">
      <h3>1. Visual Evaluation of Soil Structure</h3>

      <div className="analysis-fields-grid">
        <select
          name="structureQuality"
          value={fullResults.structureQuality}
          onChange={handleFullResultChange}
        >
          <option value="">Structure Quality</option>
          <option value="Friable">Friable</option>
          <option value="Intact">Intact</option>
          <option value="Firm">Firm</option>
          <option value="Compact">Compact</option>
          <option value="Very compact">Very compact</option>
        </select>

        <select
          name="aggregateSize"
          value={fullResults.aggregateSize}
          onChange={handleFullResultChange}
        >
          <option value="">Aggregate Size</option>
          <option value="Up to 6 mm">Up to 6 mm</option>
          <option value="2 mm to 7 mm">2 mm to 7 mm</option>
          <option value="2 mm to 10 cm">2 mm to 10 cm</option>
          <option value="More than 10 cm">More than 10 cm</option>
          <option value="Mostly more than 10 cm">
            Mostly more than 10 cm
          </option>
        </select>

        <select
          name="porosity"
          value={fullResults.porosity}
          onChange={handleFullResultChange}
        >
          <option value="">Porosity</option>
          <option value="Highly porous">Highly porous</option>
          <option value="Mostly porous">Mostly porous</option>
          <option value="Macropores">Macropores</option>
          <option value="Few macropores">Few macropores</option>
          <option value="May be macropores">May be macropores</option>
        </select>

        <select
          name="roots"
          value={fullResults.roots}
          onChange={handleFullResultChange}
        >
          <option value="">Root Position</option>
          <option value="Throughout">Throughout</option>
          <option value="Within aggregates">Within aggregates</option>
          <option value="In macropores">In macropores</option>
          <option value="Few roots">Few roots</option>
        </select>

        <select
          name="vessScore"
          value={fullResults.vessScore}
          onChange={handleFullResultChange}
        >
          <option value="">VESS Score</option>
          <option value="1">1 — Very good</option>
          <option value="2">2 — Good</option>
          <option value="3">3 — Moderate</option>
          <option value="4">4 — Poor</option>
          <option value="5">5 — Very poor</option>
        </select>
      </div>
    </div>

    {/* ROOT DEVELOPMENT */}

    <div className="analysis-group">
      <h3>2. Root Development</h3>

      <select
        name="rootDevelopment"
        value={fullResults.rootDevelopment}
        onChange={handleFullResultChange}
      >
        <option value="">Select root development</option>
        <option value="Low">Low</option>
        <option value="Low Moderate">Low Moderate</option>
        <option value="Moderate">Moderate</option>
        <option value="High Moderate">High Moderate</option>
        <option value="High">High</option>
      </select>
    </div>

    {/* TSBF */}

    <div className="analysis-group">
      <h3>3. Simplified TSBF Test</h3>

      <div className="analysis-fields-grid">
        <select
          name="speciesCount"
          value={fullResults.speciesCount}
          onChange={handleFullResultChange}
        >
          <option value="">Species Count</option>
          <option value="Low">Low — 2 species or fewer</option>
          <option value="Medium">Medium — 3 to 6 species</option>
          <option value="High">High — More than 6 species</option>
        </select>

        <select
          name="individualsCount"
          value={fullResults.individualsCount}
          onChange={handleFullResultChange}
        >
          <option value="">Individuals Count</option>
          <option value="Low">Low — Fewer than 5</option>
          <option value="Medium">Medium — 5 to 10</option>
          <option value="High">High — More than 10</option>
        </select>
      </div>
    </div>

    {/* SOIL COLOUR */}

    <div className="analysis-group">
      <h3>4. Soil Colour</h3>

      <div className="analysis-fields-grid">
        <input
          type="text"
          name="munsellHue"
          placeholder="Munsell Hue (optional)"
          value={fullResults.munsellHue}
          onChange={handleFullResultChange}
        />

        <input
          type="text"
          name="munsellValue"
          placeholder="Munsell Value (optional)"
          value={fullResults.munsellValue}
          onChange={handleFullResultChange}
        />

        <input
          type="text"
          name="munsellChroma"
          placeholder="Munsell Chroma (optional)"
          value={fullResults.munsellChroma}
          onChange={handleFullResultChange}
        />

        <select
          name="soilColour"
          value={fullResults.soilColour}
          onChange={handleFullResultChange}
        >
          <option value="">Visual Soil Colour</option>
          <option value="Dark brown/Black">Dark brown / Black</option>
          <option value="Medium brown">Medium brown</option>
          <option value="Red">Red</option>
          <option value="Yellowish brown">Yellowish brown</option>
          <option value="Grey/Mottled/Pale">Grey / Mottled / Pale</option>
        </select>
      </div>
    </div>

    {/* PENETRATION */}

    <div className="analysis-group">
      <h3>5. Penetration Resistance</h3>

      <select
        name="penetrationResistance"
        value={fullResults.penetrationResistance}
        onChange={handleFullResultChange}
      >
        <option value="">Select penetratability</option>
        <option value="Good">Good — Easily reaches at least 20 cm</option>
        <option value="Fair">Fair — Reaches 5 to 20 cm</option>
        <option value="Poor">Poor — Reaches less than 5 cm</option>
      </select>
    </div>

    {/* BEERKAN */}

    <div className="analysis-group">
      <h3>6. Beerkan Infiltration Test</h3>

      <div className="analysis-fields-grid">
        {["One", "Two", "Three", "Four", "Five"].map((number, index) => (
          <input
            key={number}
            type="number"
            name={`pour${number}`}
            placeholder={`Pour ${index + 1} time (seconds)`}
            value={fullResults[`pour${number}`]}
            onChange={handleFullResultChange}
          />
        ))}

        <input
          type="number"
          name="steadyStatePour"
          placeholder="Steady state at pour number"
          value={fullResults.steadyStatePour}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="totalWater"
          placeholder="Total water used (ml)"
          value={fullResults.totalWater}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="waterPerBottle"
          placeholder="Water per bottle (ml)"
          value={fullResults.waterPerBottle}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="ringDiameter"
          placeholder="Ring diameter (cm)"
          value={fullResults.ringDiameter}
          onChange={handleFullResultChange}
        />
      </div>
    </div>

    {/* SLAKES */}

    <div className="analysis-group">
      <h3>7. Slakes Test</h3>

      <div className="analysis-fields-grid">
        <input
          type="number"
          name="slakesTime"
          placeholder="Observation time (minutes)"
          value={fullResults.slakesTime}
          onChange={handleFullResultChange}
        />

        <select
          name="slakesStability"
          value={fullResults.slakesStability}
          onChange={handleFullResultChange}
        >
          <option value="">Select stability</option>
          <option value="Poor">Poor — Falls apart, cloudy water</option>
          <option value="Good">Good — Remains intact, clear water</option>
        </select>
      </div>
    </div>

    {/* SLAKES APP */}

    <div className="analysis-group">
      <h3>8. Slakes App Test</h3>

      <div className="analysis-fields-grid">
        <input
          type="number"
          name="slakesAppTime"
          placeholder="Test time (minutes)"
          value={fullResults.slakesAppTime}
          onChange={handleFullResultChange}
        />

        <select
          name="slakesAppLocation"
          value={fullResults.slakesAppLocation}
          onChange={handleFullResultChange}
        >
          <option value="">Where were photos taken?</option>
          <option value="Inside app">Inside app</option>
          <option value="Outside app">Manually outside app</option>
        </select>

        <input
          type="text"
          name="slakesImageNumbers"
          placeholder="Image numbers"
          value={fullResults.slakesImageNumbers}
          onChange={handleFullResultChange}
        />

        <select
          name="slakesAppStability"
          value={fullResults.slakesAppStability}
          onChange={handleFullResultChange}
        >
          <option value="">Select stability</option>
          <option value="Poor">Poor</option>
          <option value="Good">Good</option>
        </select>
      </div>
    </div>

    {/* PH */}

    <div className="analysis-group">
      <h3>9. Soil pH</h3>

      <input
        type="number"
        step="0.1"
        name="phValue"
        placeholder="Enter pH value"
        value={fullResults.phValue}
        onChange={handleFullResultChange}
      />
    </div>

    {/* SOC OBSERVATION */}

    <div className="analysis-group">
      <h3>10. SOC Colour, Feel and Smell</h3>

      <div className="analysis-fields-grid">
        <select
          name="socColour"
          value={fullResults.socColour}
          onChange={handleFullResultChange}
        >
          <option value="">SOC Soil Colour</option>
          <option value="Dark brown/Black">Dark brown / Black</option>
          <option value="Medium brown">Medium brown</option>
          <option value="Red">Red</option>
          <option value="Yellowish brown">Yellowish brown</option>
          <option value="Grey/Mottled/Pale">Grey / Mottled / Pale</option>
        </select>

        <select
          name="socFeel"
          value={fullResults.socFeel}
          onChange={handleFullResultChange}
        >
          <option value="">Soil Feel</option>
          <option value="Sandy (gritty)">Sandy — Gritty</option>
          <option value="Silty (smooth)">Silty — Smooth</option>
          <option value="Clay (sticky)">Clay — Sticky</option>
          <option value="Loam (balance)">Loam — Balanced</option>
          <option value="Organic">Organic</option>
        </select>

        <select
          name="socSmell"
          value={fullResults.socSmell}
          onChange={handleFullResultChange}
        >
          <option value="">Soil Smell</option>
          <option value="Sweet/earthy">Sweet / Earthy</option>
          <option value="No smell">No smell</option>
          <option value="Sour/rotten egg">Sour / Rotten egg</option>
          <option value="Chemical smell">Chemical smell</option>
        </select>
      </div>
    </div>

    {/* SOC APP */}

    <div className="analysis-group">
      <h3>11. SOC App Test</h3>

      <div className="analysis-fields-grid">
        <select
          name="socPhotoTaken"
          value={fullResults.socPhotoTaken}
          onChange={handleFullResultChange}
        >
          <option value="">Was a photo taken?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          name="socPhotoLocation"
          value={fullResults.socPhotoLocation}
          onChange={handleFullResultChange}
        >
          <option value="">Photo location</option>
          <option value="Inside app">Inside app</option>
          <option value="Outside app">Manually outside app</option>
        </select>

        <input
          type="text"
          name="socImageNumber"
          placeholder="Image number"
          value={fullResults.socImageNumber}
          onChange={handleFullResultChange}
        />
      </div>
    </div>

    {/* TEABAG */}

    <div className="analysis-group">
      <h3>12. Teabag Index</h3>

      <div className="analysis-fields-grid">
        <input
          type="text"
          name="teabagType"
          placeholder="Teabag type"
          value={fullResults.teabagType}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          step="0.01"
          name="massBefore"
          placeholder="Mass before (g)"
          value={fullResults.massBefore}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          step="0.01"
          name="massAfter"
          placeholder="Mass after (g)"
          value={fullResults.massAfter}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="daysInSoil"
          placeholder="Days in soil"
          value={fullResults.daysInSoil}
          onChange={handleFullResultChange}
        />

        <select
          name="decomposition"
          value={fullResults.decomposition}
          onChange={handleFullResultChange}
        >
          <option value="">Decomposition</option>
          <option value="Low">Low — Almost original</option>
          <option value="Medium">Medium — Lost less than 50%</option>
          <option value="High">High — Lost at least 50%</option>
        </select>
      </div>
    </div>

    {/* CROP YIELD */}

    <div className="analysis-group">
      <h3>13. Crop Yield Evaluation</h3>

      <div className="analysis-fields-grid">
        <input
          type="number"
          step="0.01"
          name="cropArea"
          placeholder="Area (ha)"
          value={fullResults.cropArea}
          onChange={handleFullResultChange}
        />

        <input
          type="text"
          name="cropType"
          placeholder="Crop type"
          value={fullResults.cropType}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          step="0.01"
          name="cropYield"
          placeholder="Yield (tonnes)"
          value={fullResults.cropYield}
          onChange={handleFullResultChange}
        />
      </div>
    </div>

    {/* GULLY */}

    <div className="analysis-group">
      <h3>14. Gully Retreat</h3>

      <div className="analysis-fields-grid">
        <input
          type="number"
          step="0.01"
          name="gullyInitialDistance"
          placeholder="Initial distance to pegs (m)"
          value={fullResults.gullyInitialDistance}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="numberOfPegs"
          placeholder="Number of pegs"
          value={fullResults.numberOfPegs}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          name="daysAfterInstallation"
          placeholder="Days after installation"
          value={fullResults.daysAfterInstallation}
          onChange={handleFullResultChange}
        />

        <input
          type="number"
          step="0.01"
          name="gullyNewDistance"
          placeholder="New distance to pegs (m)"
          value={fullResults.gullyNewDistance}
          onChange={handleFullResultChange}
        />
      </div>
    </div>
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
            <p>Your soil test result has been recorded and interpreted successfully.</p>

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
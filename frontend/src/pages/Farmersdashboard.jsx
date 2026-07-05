import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Farmersdashboard.css";
import farmerWelcome from "../assets/images/farmer-welcome.png";

// Farmer dashboard for managing and registering fields
export default function Farmersdashboard() {
  const navigate = useNavigate();
  const routeLocation = useLocation();

  const username = routeLocation.state?.username || "Farmer";
  const isNewUser = routeLocation.state?.isNewUser || false;

  const [fields, setFields] = useState([]);

  const [fieldName, setFieldName] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [cropType, setCropType] = useState("");
  const [region, setRegion] = useState("");
  const [landOwnership, setLandOwnership] = useState("");
  const [irrigationType, setIrrigationType] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const handleRegisterField = (e) => {
    e.preventDefault();

    if (
      !fieldName ||
      !totalArea ||
      !cropType ||
      !region ||
      !landOwnership ||
      !irrigationType ||
      !coordinates
    )
      return;

    const newField = {
      id: Date.now(),
      fieldName,
      totalArea,
      cropType,
      region,
      landOwnership,
      irrigationType,
      coordinates,
    };

    setFields([...fields, newField]);

    setFieldName("");
    setTotalArea("");
    setCropType("");
    setRegion("");
    setLandOwnership("");
    setIrrigationType("");
    setCoordinates("");

    navigate("/field-dashboard");
  };

  return (
    <div className="farmer-dashboard-page">
      <header className="farmer-topbar">
        <div className="topbar-brand">
          <div className="logo-icon">🌱</div>
          <h2>TerraSoil — Farmer</h2>
        </div>

        <div className="topbar-actions">
          <div className="user-circle">{username.charAt(0).toUpperCase()}</div>

          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      <nav className="farmer-tabs">
        <button className="active">Dashboard</button>
        <button onClick={() => navigate("/field-dashboard")}>
          My Fields
        </button>
        <button>Household</button>
        <button>Recommendations</button>
      </nav>

      <main className="farmer-dashboard-main">
        <section className="welcome-card">

  <div className="welcome-content">

    <div className="welcome-text">

      <p className="small-title">Farmer Dashboard</p>

      <h1>
        {isNewUser
          ? `Welcome, ${username} 👋`
          : `Welcome back, ${username} 👋`}
      </h1>

      <p>
        Here's an overview of your farm. Register your fields to begin
        monitoring soil health and receive intelligent recommendations.
      </p>

    </div>

    <div className="welcome-image">

      <img
        src={farmerWelcome}
        alt="Farmers working on a farm"
      />

    </div>

  </div>

</section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Register New Field</h2>
            <p>
              Register your farm field by providing the details below. 
              Once registered, you'll be able to monitor soil health, 
              record field observations, track crop performance, 
              and receive smart recommendations tailored to your field.
            </p>
          </div>

          <form className="field-form" onSubmit={handleRegisterField}>
            <input
              type="text"
              placeholder="Field Name / Label"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Total Area (ha)"
              value={totalArea}
              onChange={(e) => setTotalArea(e.target.value)}
            />

            <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
              <option value="">Select Crop Type</option>
              <option value="Maize">Maize</option>
              <option value="Teff">Teff</option>
              <option value="Wheat">Wheat</option>
              <option value="Barley">Barley</option>
              <option value="Coffee">Coffee</option>
            </select>

            <input
              type="text"
              placeholder="Region / Barangay"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />

            <select
              value={landOwnership}
              onChange={(e) => setLandOwnership(e.target.value)}
            >
              <option value="">Land Ownership</option>
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
              <option value="Family Land">Family Land</option>
              <option value="Community Land">Community Land</option>
            </select>

            <select
              value={irrigationType}
              onChange={(e) => setIrrigationType(e.target.value)}
            >
              <option value="">Irrigation Type</option>
              <option value="Rain-fed">Rain-fed</option>
              <option value="Manual Irrigation">Manual Irrigation</option>
              <option value="Drip Irrigation">Drip Irrigation</option>
              <option value="Sprinkler">Sprinkler</option>
            </select>

            <input
              type="text"
              placeholder="Location Coordinates"
              value={coordinates}
              onChange={(e) => setCoordinates(e.target.value)}
            />

            <div className="map-placeholder">📍 Map Picker Placeholder</div>

            <button type="submit">Register Field</button>
          </form>
        </section>

        <section className="registered-fields">
          <h2>Registered Fields</h2>

          {fields.length === 0 ? (
            <p className="empty-message">
              No field registered yet. Register your first field above.
            </p>
          ) : (
            <div className="fields-grid">
              {fields.map((field) => (
                <div
                  className="field-card"
                  key={field.id}
                  onClick={() => navigate("/field-dashboard")}
                >
                  <h3>{field.fieldName}</h3>
                  <p>Crop: {field.cropType}</p>
                  <p>Area: {field.totalArea} ha</p>
                  <p>Region: {field.region}</p>
                  <button>Open Field Dashboard</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
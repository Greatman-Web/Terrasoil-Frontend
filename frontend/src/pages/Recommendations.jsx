import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Recommendations.css";

export default function Recommendations() {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0);

  const registeredFields =
    JSON.parse(localStorage.getItem("registeredFields")) || [];

  const householdData =
    JSON.parse(localStorage.getItem("farmilyHouseholdData")) || {};

  const householdCompleted = Object.values(householdData).some((value) => {
    if (typeof value === "object" && value !== null) {
      return Object.values(value).some(
        (item) => String(item || "").trim() !== ""
      );
    }

    return String(value || "").trim() !== "";
  });

  const totalSoilTests = registeredFields.reduce((total, field) => {
    const tests =
      JSON.parse(localStorage.getItem(`soilTests_${field.id}`)) || [];

    return total + tests.length;
  }, 0);

  const requirements = [
    {
      title: "Field Registered",
      completed: registeredFields.length > 0,
    },
    {
      title: "Household Information Added",
      completed: householdCompleted,
    },
    {
      title: "Soil Test Recorded",
      completed: totalSoilTests > 0,
    },
  ];

  const recommendationCategories = [
    {
      icon: "🌱",
      title: "Soil Management",
      description:
        "Recommendations about soil structure, soil fertility, organic matter and compaction will appear here.",
    },
    {
      icon: "💧",
      title: "Water Management",
      description:
        "Guidance about irrigation, water availability, infiltration and runoff will appear here.",
    },
    {
      icon: "🌾",
      title: "Crop Management",
      description:
        "Crop selection, crop performance, rotation and productivity guidance will appear here.",
    },
    {
      icon: "🏡",
      title: "Household & Farm Management",
      description:
        "Recommendations based on household resources, labour and farm management records will appear here.",
    },
  ];

  const handleRefresh = () => {
    setRefreshKey((currentKey) => currentKey + 1);
  };

  return (
    <div className="recommendations-page" key={refreshKey}>
      <header className="recommendations-header">
        <div className="recommendations-brand">
          <div className="recommendations-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Farm Recommendations</p>
          </div>
        </div>

        <div className="recommendation-actions">
          <button
            type="button"
            className="refresh-btn"
            onClick={handleRefresh}
          >
            ↻ Refresh
          </button>

          <button
            type="button"
            className="back-dashboard-btn"
            onClick={() => navigate("/farmer-dashboard")}
          >
            ← Dashboard
          </button>
        </div>
      </header>

      <main className="recommendations-container">
        <section className="recommendations-hero">
          <div>
            <p className="recommendations-small-title">
              FARM RECOMMENDATIONS
            </p>

            <h1>Recommendations Dashboard</h1>

            <p>
              This page provides a summary of the recommendation areas
              supported by Farmily. Recommendations will be displayed after
              the required farm information has been processed.
            </p>
          </div>
        </section>

        <section className="recommendations-overview">
          <div className="overview-card">
            <span>Registered Fields</span>
            <strong>{registeredFields.length}</strong>
          </div>

          <div className="overview-card">
            <span>Household Data</span>
            <strong>{householdCompleted ? "Added" : "Pending"}</strong>
          </div>

          <div className="overview-card">
            <span>Soil Tests</span>
            <strong>{totalSoilTests}</strong>
          </div>

          <div className="overview-card">
            <span>Recommendations</span>
            <strong>
              {registeredFields.length > 0 ? registeredFields.length : "Pending"}
            </strong>
          </div>
        </section>

        <section className="field-recommendation-section">
          <div className="section-heading">
            <p>FIELD-SPECIFIC RECOMMENDATIONS</p>
            <h2>Recommendations by Field</h2>
          </div>

          {registeredFields.length === 0 ? (
            <div className="field-empty-card">
              <p>No registered fields available.</p>
            </div>
          ) : (
            <div className="field-grid">
              {registeredFields.map((field) => {
                const soilTests =
                  JSON.parse(
                    localStorage.getItem(`soilTests_${field.id}`)
                  ) || [];

                const latestSoilTest =
                  soilTests.length > 0
                    ? soilTests[soilTests.length - 1]
                    : null;

                const fieldName =
                  field.field_name ||
                  field.fieldName ||
                  field.name ||
                  "Unnamed Field";

                const cropName =
                  field.crop_type ||
                  field.cropType ||
                  field.crop ||
                  "Not recorded";

                return (
                  <article className="field-card" key={field.id}>
                    <div className="field-card-header">
                      <div>
                        <h3>{fieldName}</h3>
                        <p>
                          <strong>Crop:</strong> {cropName}
                        </p>
                      </div>

                      <span
                        className={
                          latestSoilTest
                            ? "field-status ready"
                            : "field-status pending"
                        }
                      >
                        {latestSoilTest ? "Ready" : "Pending"}
                      </span>
                    </div>

                    <p>
                      <strong>Soil Test:</strong>{" "}
                      {latestSoilTest ? "Available" : "Not Recorded"}
                    </p>

                    <div className="field-recommendations">
                      {latestSoilTest ? (
                        <>
                          <div className="field-recommendation-item">
                            ✓ Recommendations for this field will use its
                            latest soil test.
                          </div>

                          <div className="field-recommendation-item">
                            ✓ Household resources will be considered when
                            deciding the most practical farm action.
                          </div>
                        </>
                      ) : (
                        <div className="field-recommendation-item pending">
                          ○ Record a soil test for this field to receive
                          recommendations.
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="view-field-btn"
                      onClick={() =>
                        navigate("/field-dashboard", {
                          state: {
                            field,
                            fieldId: field.id,
                          },
                        })
                      }
                    >
                      View Field
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="recommendation-section">
          <div className="section-heading">
            <p>RECOMMENDATION AREAS</p>
            <h2>Farm Management Guidance</h2>
          </div>

          <div className="recommendation-grid">
            {recommendationCategories.map((category) => (
              <article
                className="recommendation-card"
                key={category.title}
              >
                <div className="recommendation-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>
                <p>{category.description}</p>

                <span className="pending-label">Pending</span>
              </article>
            ))}
          </div>
        </section>

        <section className="requirements-card">
          <div className="requirements-heading">
            <div>
              <p>RECOMMENDATION STATUS</p>
              <h2>Information Checklist</h2>
            </div>

            <span className="status-badge">
              {requirements.every((item) => item.completed)
                ? "Available"
                : "Not Available Yet"}
            </span>
          </div>

          <div className="requirements-list">
            {requirements.map((requirement) => (
              <div
                className="requirement-item"
                key={requirement.title}
              >
                <span
                  className={
                    requirement.completed
                      ? "requirement-icon completed"
                      : "requirement-icon pending"
                  }
                >
                  {requirement.completed ? "✓" : "○"}
                </span>

                <span>{requirement.title}</span>

                <strong>
                  {requirement.completed ? "Completed" : "Pending"}
                </strong>
              </div>
            ))}
          </div>

          <p className="requirements-message">
            Farm recommendations will appear here after the recommendation
            service is connected to the recorded field, household and soil
            test information.
          </p>
        </section>
      </main>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import "../styles/Recommendations.css";

export default function Recommendations() {
  const navigate = useNavigate();

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

  return (
    <div className="recommendations-page">
      <header className="recommendations-header">
        <div className="recommendations-brand">
          <div className="recommendations-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Farm Recommendations</p>
          </div>
        </div>

        <button
          className="back-dashboard-btn"
          onClick={() => navigate("/farmer-dashboard")}
        >
          ← Dashboard
        </button>
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
            <strong>Pending</strong>
          </div>
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

            <span className="status-badge">Not Available Yet</span>
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
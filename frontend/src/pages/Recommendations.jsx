//import all necessary modules and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Recommendations.css";
// Recommendations page content and sections
export default function Recommendations() {
  const navigate = useNavigate();
  // Controls the state of whether recommendations have been refreshed or not
  const [recommendationsRefreshed, setRecommendationsRefreshed] =
    useState(false);

  const handleRefresh = () => {
    setRecommendationsRefreshed(true);
  };
  // This section renders the recommendations page with field-specific recommendations. 
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

        <div className="recommendation-actions">
          <button
            type="button"
            className="refresh-btn"
            onClick={handleRefresh}>
            {recommendationsRefreshed
              ? "✅ Refreshed"
              : "↻ Refresh"}
          </button>

          <button
            type="button"
            className="back-dashboard-btn"
            onClick={() => navigate("/farmer-dashboard")}>
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
              Review practical soil and crop management guidance for each
              demonstration field.
            </p>
          </div>
        </section>
       
        <section className="field-recommendation-section">
          <div className="section-heading">
            <p>FIELD-SPECIFIC RECOMMENDATIONS</p>
            <h2>Recommendations by Field</h2>
          </div>

          <div className="field-grid">
            <article className="field-card">
              <div className="field-card-header">
                <div>
                  <h3>Enset</h3>
                  <div className="field-details-grid">
                    <p>
                      <strong>Crop:</strong> Enset
                    </p>
                    <p>
                      <strong>Field size:</strong> 1 hectare
                    </p>
                    <p>
                      <strong>Location:</strong> Hawassa
                    </p>
                    <p>
                      <strong>Assessment:</strong> Complete
                    </p>
                  </div>
                </div>
              </div>

              <div className="static-recommendation">
                <section className="recommendation-summary">
                  <div className="recommendation-summary-item soil-health-item">
                    <div className="soil-health-label">
                      <span>Soil health</span>
                      <strong>Good</strong>
                    </div>
                    <div className="soil-health-score">
                      <div
                        className="field-score-ring small"
                        style={{
                          "--field-score": 82,
                          "--score-colour": "#65da41",
                        }}
                        aria-label="Field score 82%">
                        <div className="field-score-ring-inner">
                          <strong>82%</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="recommendation-summary-item">
                    <span>Estimated harvest</span>
                    <strong>3.0-8.0 tonnes per hectare</strong>
                  </div>
                </section>

                <section className="recommendation-message primary">
                  <h4>🌱 Recommendation</h4>
                  <p>
                    Continue applying <strong>organic manure</strong> before each planting
                    season and maintain crop rotation to preserve soil
                    fertility and support a stable harvest.
                  </p>
                </section>
              </div>

              <button
                type="button"
                className="view-field-btn"
                onClick={() => navigate("/field-dashboard")}>
                View Field
              </button>
            </article>

           
            <article className="field-card">
              <div className="field-card-header">
                <div>
                  <h3>Wheat</h3>

                  <div className="field-details-grid">
                    <p>
                      <strong>Crop:</strong> Wheat
                    </p>

                    <p>
                      <strong>Field size:</strong> 1 hectare
                    </p>

                    <p>
                      <strong>Location:</strong> Hawassa
                    </p>

                    <p>
                      <strong>Assessment:</strong> Complete
                    </p>
                  </div>
                </div>

              </div>

              <div className="static-recommendation">
                <section className="recommendation-summary">
                  <div className="recommendation-summary-item soil-health-item">
                    <div className="soil-health-label">
                      <span>Soil health</span>
                      <strong>Low</strong>
                    </div>
                    <div className="soil-health-score">
                      <div
                        className="field-score-ring small"
                        style={{
                          "--field-score": 42,
                          "--score-colour": "#c84a3f",
                        }}
                        aria-label="Field score 42%">
                        <div className="field-score-ring-inner">
                          <strong>42%</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="recommendation-summary-item">
                    <span>Estimated harvest</span>
                    <strong>2.0-2.4 tonnes per hectare</strong>
                  </div>
                </section>

                {!recommendationsRefreshed ? (
                  <section className="recommendation-message">
                    <h4>🌱 Recommendation</h4>

                    <p>If you apply <strong>organic manure</strong>, you can improve soil health and support crop growth.</p>
                  </section>
                ) : (
                  <>
                    <section className="household-resource-card">
                      <div className="resource-icon">🐄</div>

                      <div>
                        <span>HOUSEHOLD INFORMATION UPDATE: </span>
                        <h4>5 cattle</h4>

                        <p>
                         Manure produced from these cattle is applied to Field "Enset". 
                         <strong>No more manure available </strong>
                        </p>
                      </div>
                    </section>

                    <section className="recommendation-message primary">
                      <h4>🌱 Recommendation</h4>

                      <p>
                       To increase availability of <strong>organic matter</strong> on your farm, 
                       produce vermicompost from Korch leaves, 
                       which you can then apply to this field 
                       to improve soil health and support crop growth. 
                      </p>
                    </section>

                    <section className="refreshed-summary-cards">
                      <div className="refreshed-summary-card">
                        <div className="summary-card-label">
                          <span>Soil health</span>
                          <strong>Medium</strong>
                        </div>
                        <div className="summary-card-score">
                          <div
                            className="field-score-ring small"
                            style={{
                              "--field-score": 60,
                              "--score-colour": "#dbdf22",
                            }}
                            aria-label="Field score 60%">
                            <div className="field-score-ring-inner">
                              <strong>60%</strong>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="refreshed-summary-card">
                        <div className="summary-card-label">
                          <span>Estimated harvest</span>
                          <strong>Improvement: 33% or more. 3.0 - 3.4 tonnes per hectare</strong>
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </div>

              <button
                type="button"
                className="view-field-btn"
                onClick={() => navigate("/field-dashboard")}>
                View Field
              </button>
            </article>
          </div>
        </section>

        {/*
        <section className="recommendation-section">
          Farm Management Guidance remains commented out.
        </section>
        */}

        {/*
        <section className="requirements-card">
          Information Checklist remains commented out.
        </section>
        */}
      </main>
    </div>
  );
}
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

                <div className="field-score-progress score-good">
                  <div
                    className="field-score-ring"
                    style={{
                      "--field-score": 82,
                      "--score-colour": "#68a520",
                    }}
                    aria-label="Field score 82 out of 100">
                    <div className="field-score-ring-inner">
                      <strong>82</strong>
                      <span>out of 100</span>
                    </div>
                  </div>

                  <p>Good</p>
                </div>
              </div>

              <div className="static-recommendation">
                <section className="recommendation-summary">
                  <div className="recommendation-summary-item">
                    <span>Soil health</span>
                    <strong>Good</strong>
                  </div>

                  <div className="recommendation-summary-item">
                    <span>Estimated harvest</span>
                    <strong>3.0-8.0 tonnes from one hectare</strong>
                  </div>
                </section>

                <section className="recommendation-message primary">
                  <h4>🌱 Recommendation</h4>

                  <p>
                    This field is in good condition and is responding well
                    to the current soil management practices.
                  </p>

                  <p>
                    Continue applying organic manure before each planting
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

                <div className="field-score-progress score-poor">
                  <div
                    className="field-score-ring"
                    style={{
                      "--field-score": 42,
                      "--score-colour": "#c84a3f",
                    }}
                    aria-label="Field score 42 out of 100">
                    <div className="field-score-ring-inner">
                      <strong>42</strong>
                      <span>out of 100</span>
                    </div>
                  </div>

                  <p>Low</p>
                </div>
              </div>

              <div className="static-recommendation">
                <section className="recommendation-summary">
                  <div className="recommendation-summary-item">
                    <span>Soil health</span>
                    <strong>Low</strong>
                  </div>

                  <div className="recommendation-summary-item">
                    <span>Estimated harvest</span>
                    <strong>2.0-2.4 tonnes from one hectare</strong>
                  </div>
                </section>

                {!recommendationsRefreshed ? (
                  <section className="recommendation-message">
                    <h4>🌱 Recommendation</h4>

                    <p>
                      This field currently shows low soil health because
                      only limited organic material has been added to the
                      soil.
                    </p>

                    <p>
                      Apply more organic manure to improve soil fertility
                      and support stronger crop growth. This could increase
                      the harvest to about{" "}
                      <strong>3.4 tonnes from one hectare of land</strong>,
                      approximately{" "}
                      <strong>33% more than the current harvest</strong>.
                    </p>
                  </section>
                ) : (
                  <>
                    <section className="household-resource-card">
                      <div className="resource-icon">🐄</div>

                      <div>
                        <span>Household resource available</span>
                        <h4>5 cattle</h4>

                        <p>
                          Manure from these cattle can be composted and
                          applied to this field as a low cost organic
                          fertilizer.
                        </p>
                      </div>
                    </section>

                    <section className="recommendation-message primary">
                      <h4>🌱 Primary recommendation</h4>

                      <p>
                        Apply composted manure from your own cattle to this
                        field. This could increase the harvest to about{" "}
                        <strong>2.9-3.0 tonnes from one hectare of land</strong>,
                        approximately{" "}
                        <strong>15% more than the current harvest</strong>.
                      </p>
                    </section>

                    <section className="recommendation-message secondary">
                      <h4>🌾 Additional recommendation</h4>

                      <p>
                        For greater improvement, combine the composted
                        cattle manure with additional organic manure. This
                        could increase the harvest to about{" "}
                        <strong>3.4-6.0 tonnes from one hectare of land</strong>,
                        approximately{" "}
                        <strong>33% more than the current harvest</strong>.
                      </p>
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
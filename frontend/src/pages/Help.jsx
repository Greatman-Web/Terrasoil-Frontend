//importing necessary libraries and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Help.css";
// Help page content and sections
export default function Help() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState("about");
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };
  return (
    <div className="help-page">
      {/* HEADER */}
      <header className="help-header">
        <div className="help-brand">
          <div className="help-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Help & Support</p>
          </div>
        </div>

        <button
          className="help-back-btn"
          onClick={() => navigate(-1)}>
          ← Back
        </button>
      </header>

      <main className="help-container">
        {/* INTRO */}
        <section className="help-hero">
          <p className="help-small-title">FARMILY HELP</p>

          <h1>How can we help?</h1>

          <p>
            Find information about getting started, registering fields,
            soil testing, household information, recommendations,
            data use, and support.
          </p>
        </section>

        {/* ABOUT FARMILY */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("about")}>
            <span>🌱 About Farmily</span>
            <span>{openSection === "about" ? "−" : "+"}</span>
          </button>

          {openSection === "about" && (
            <div className="help-section-content">
              <p>
                Farmily is an advanced agricultural application that
                uses current research and AI models to help farmers,
                researchers, and advisors track field data and receive
                tailored farming strategy recommendations.
              </p>

              <p>
                The system is developed and maintained by a research team
                led by PhD student Dominik Bittner and Professor Jo Smith
                at the University of Aberdeen.
              </p>

              <h3>Benefits for Farmers</h3>

              <p>
                Farmily gives farmers access to environmental data through
                simple soil tests and automatically collected remote-sensing
                information.
              </p>

              <p>
                The AI models analyse this data to provide personalised farm
                management recommendations that can help improve crop yields
                while supporting soil sustainability.
              </p>
            </div>
          )}
        </section>

        {/* GETTING STARTED */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("getting-started")}>
            <span>🚀 Getting Started</span>
            <span>
              {openSection === "getting-started" ? "−" : "+"}
            </span>
          </button>

          {openSection === "getting-started" && (
            <div className="help-section-content">
              <h3>Register</h3>

              <p>
                Create an account using your phone number and password.
                After registration, you will automatically be logged in to
                the system.
              </p>

              <button
                className="help-action-btn"
                onClick={() => navigate("/signup")}>
                Create Account
              </button>

              <h3>Log in</h3>

              <p>
                To log in, enter the phone number, password, and user role
                used during registration.
              </p>

              <button
                className="help-secondary-btn"
                onClick={() => navigate("/login")}>
                Go to Login
              </button>

              <h3>Change Language</h3>

              <p>
                Farmily currently supports English and Amharic. You can
                change the language using the language button available
                across the application.
              </p>
            </div>
          )}
        </section>

        {/* CREATE A FIELD */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("field")}>
            <span>📍 Create a Field</span>
            <span>{openSection === "field" ? "−" : "+"}</span>
          </button>

          {openSection === "field" && (
            <div className="help-section-content">
              <ol className="help-steps">
                <li>
                  Log in and go to the Dashboard tab.
                </li>

                <li>
                  In Field Identification, enter the field name and draw a
                  polygon on the interactive map around the field area.
                  The area in hectares will be calculated automatically.
                </li>

                <li>
                  You may optionally add soil characteristics, crop
                  information, terrain, and climate details.
                </li>

                <li>
                  Where available, use the refresh button to fetch
                  information from the satellite data source.
                </li>

                <li>
                  Click <strong>Register Field</strong>.
                </li>
              </ol>
            </div>
          )}
        </section>

        {/* INDICATOR EXPLANATIONS */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("indicators")}>
            <span>📊 Indicator Explanations</span>
            <span>
              {openSection === "indicators" ? "−" : "+"}
            </span>
          </button>

          {openSection === "indicators" && (
            <div className="help-section-content">
              <div className="indicator-help-grid">
                <div className="indicator-help-card">
                  <h4>Soil Depth</h4>
                  <p>
                    How deep your soil goes before reaching rock or hard
                    ground. Deeper soil gives roots more space and can hold
                    more water and nutrients.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Clay Content</h4>
                  <p>
                    The percentage of very fine particles in the soil.
                    Clay holds water and nutrients well, but too much can
                    make soil heavy and difficult to work.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Silt Content</h4>
                  <p>
                    The percentage of medium-sized particles in the soil.
                    Silty soil is usually smooth, fertile, and able to hold
                    moisture well.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Sand Content</h4>
                  <p>
                    The percentage of large, coarse particles in the soil.
                    Sandy soil drains quickly but does not hold water or
                    nutrients for long.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Soil Carbon</h4>
                  <p>
                    The amount of organic matter stored in the soil.
                    Higher soil carbon generally indicates healthier and
                    more fertile soil.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Bulk Density</h4>
                  <p>
                    How tightly packed the soil is. Loose soil allows roots,
                    air, and water to move more easily, while compacted soil
                    can restrict crop growth.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Soil pH</h4>
                  <p>
                    A measure of how acidic or alkaline the soil is, on a
                    scale from 0 to 14. Most crops grow best between pH
                    5.5 and 7.5.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Mean NDVI</h4>
                  <p>
                    A satellite-based measurement of how green and healthy
                    the vegetation in the field appears.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Elevation</h4>
                  <p>
                    How high the field is above sea level. Elevation can
                    affect temperature and the suitability of different crops.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Slope</h4>
                  <p>
                    How steep the field is. Steeper fields may lose more
                    water and soil through runoff and erosion.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Mean Monthly Rainfall</h4>
                  <p>
                    The average amount of rain received each month, which
                    helps determine crop suitability and watering needs.
                  </p>
                </div>

                <div className="indicator-help-card">
                  <h4>Mean Monthly Temperature</h4>
                  <p>
                    The average monthly temperature of the field location,
                    which influences crop growth and planting periods.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SOIL TEST */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("soil-test")}>
            <span>🧪 Make a Soil Test</span>
            <span>{openSection === "soil-test" ? "−" : "+"}</span>
          </button>

          {openSection === "soil-test" && (
            <div className="help-section-content">
              <ol className="help-steps">
                <li>
                  Select a registered field in the My Fields section and
                  open the Field Dashboard.
                </li>

                <li>
                  In the Current Soil Health card, click
                  <strong> Start Soil Test</strong>.
                </li>

                <li>
                  Choose a single test, complete soil analysis, or
                  comparative analysis.
                </li>

                <li>
                  Follow the instructions and select the observation that
                  best describes your soil.
                </li>

                <li>
                  Completed soil-test sessions will appear in the Recent
                  Soil Tests section.
                </li>
              </ol>
            </div>
          )}
        </section>

        {/* HOUSEHOLD DATA */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("household")}>
            <span>🏡 Update Household Information</span>
            <span>{openSection === "household" ? "−" : "+"}</span>
          </button>

          {openSection === "household" && (
            <div className="help-section-content">
              <ol className="help-steps">
                <li>
                  Go to the Household tab.
                </li>

                <li>
                  Update your personal details in the Personal Information
                  section.
                </li>

                <li>
                  Add information about demographics, finance, livestock,
                  water, and energy.
                </li>

                <li>
                  Save each section after entering the required information.
                </li>
              </ol>

              <p className="help-note">
                Household information helps Farmily provide farming
                recommendations that are better suited to your conditions
                and available resources.
              </p>
            </div>
          )}
        </section>

        {/* RECOMMENDATIONS */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("recommendations")}>
            <span>💡 Check Recommendations</span>
            <span>
              {openSection === "recommendations" ? "−" : "+"}
            </span>
          </button>

          {openSection === "recommendations" && (
            <div className="help-section-content">
              <ol className="help-steps">
                <li>
                  Go to the Recommendations tab.
                </li>

                <li>
                  Review the soil health, estimated yield, and recommended
                  actions for your fields.
                </li>

                <li>
                  Recommendations may also show estimated improvements after
                  following the suggested actions.
                </li>

                <li>
                  If household information changes, such as livestock
                  numbers, click the <strong>Refresh</strong> button to view
                  updated recommendations.
                </li>
              </ol>
            </div>
          )}
        </section>

        {/* DATA AND PRIVACY */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("privacy")}>
            <span>🔒 Why We Collect This Data</span>
            <span>{openSection === "privacy" ? "−" : "+"}</span>
          </button>

          {openSection === "privacy" && (
            <div className="help-section-content">
              <p>
                Farmily collects information about fields, households, and
                personal details to provide more accurate farming
                recommendations.
              </p>

              <p>
                The information also supports agricultural research at the
                University of Aberdeen and helps the development team improve
                the system.
              </p>

              <p>
                Your data will not be sold or disclosed to third parties.
                Only authorised researchers and developers with appropriate
                access permissions can view the data.
              </p>

              <p>
                You may request further information about how your data is
                used or request its deletion.
              </p>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="help-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("faq")}>
            <span>❓ Frequently Asked Questions</span>
            <span>{openSection === "faq" ? "−" : "+"}</span>
          </button>

          {openSection === "faq" && (
            <div className="help-section-content">
              <div className="faq-item">
                <h4>How do I reset my password?</h4>
                <p>
                  Use the password reset page and enter your registered
                  phone number to confirm your identity.
                </p>
              </div>

              <div className="faq-item">
                <h4>Can I use the app without the internet?</h4>
                <p>
                  The system currently requires an internet connection.
                  The development team is working towards allowing some
                  features to work offline.
                </p>
              </div>

              <div className="faq-item">
                <h4>Is my data secure?</h4>
                <p>
                  Data is stored on a trusted cloud database with security
                  protections. Only selected research and development team
                  members can access it.
                </p>
              </div>

              <div className="faq-item">
                <h4>What device should I use?</h4>
                <p>
                  A desktop browser or Android browser is recommended.
                  iOS users may experience login issues depending on browser
                  privacy settings.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* SUPPORT */}
        <section className="help-section support-section">
          <button
            className="help-section-header"
            onClick={() => toggleSection("support")}>
            <span>📩 Support & Contact</span>
            <span>{openSection === "support" ? "−" : "+"}</span>
          </button>

          {openSection === "support" && (
            <div className="help-section-content">
              <p>
                If you encounter bugs, problems, or inaccurate translations,
                please contact:
              </p>

              <div className="support-contact">
                <strong>Dominik Bittner</strong>
                <a href="mailto:d.bittner.24@abdn.ac.uk">
                  d.bittner.24@abdn.ac.uk
                </a>
              </div>

              <div className="support-contact">
                <strong>Professor Jo Smith</strong>
                <a href="mailto:jo.smith@abdn.ac.uk">
                  jo.smith@abdn.ac.uk
                </a>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
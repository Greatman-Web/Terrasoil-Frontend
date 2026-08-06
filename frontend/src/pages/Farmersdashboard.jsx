// Importing necessary modules and assets for the Farmers Dashboard page
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Farmersdashboard.css";
import farmerWelcome from "../assets/images/farmer-welcome.png";

// Defining the number of required soil tests for a field
const REQUIRED_TESTS = 8;
// Defining the structure and fields for each section of the field information form
const fieldInformationSections = [
  {
    id: "fieldIdentification",
    title: "Field Identification",
    description: "Register the basic details and location of the field.",
    fields: [
    {
      name: "field_name",
      label: "Field Name",
      type: "text",
      placeholder: "Enter field name",
    },
    {
      name: "field_area",
      label: "Field Area (ha)",
      type: "number",
      placeholder: "Enter field area",
      autoGenerate: true,
    },
    /*
    {
      name: "corner_1_latitude",
      label: "Corner 1 Latitude",
      type: "number",
      placeholder: "Enter latitude",
    },
    */
    /*
    {
      name: "corner_1_longitude",
      label: "Corner 1 Longitude",
      type: "number",
      placeholder: "Enter longitude",
    },
    */
    /*
    {
      name: "corner_2_latitude",
      label: "Corner 2 Latitude",
      type: "number",
      placeholder: "Enter latitude",
    },
    */
    /*
    {
      name: "corner_2_longitude",
      label: "Corner 2 Longitude",
      type: "number",
      placeholder: "Enter longitude",
    },
    */
    /*
    {
      name: "corner_3_latitude",
      label: "Corner 3 Latitude",
      type: "number",
      placeholder: "Enter latitude",
    },
    */
    /*
    {
      name: "corner_3_longitude",
      label: "Corner 3 Longitude",
      type: "number",
      placeholder: "Enter longitude",
    },
    */
    /*
    {
      name: "corner_4_latitude",
      label: "Corner 4 Latitude",
      type: "number",
      placeholder: "Enter latitude",
    },
    */
    /*
    {
      name: "corner_4_longitude",
      label: "Corner 4 Longitude",
      type: "number",
      placeholder: "Enter longitude",
    },
    */
    {
      name: "distance_to_homestead",
      label: "Distance to Homestead (m)",
      type: "number",
      placeholder: "Enter distance to homestead",
      autoGenerate: true,
    },
    ],
  },

  {
    id: "soilCharacteristics",
    title: "Soil Characteristics",
    description: "Record the physical and chemical properties of the soil.",
    fields: [
      {
        name: "soil_depth",
        label: "Soil Depth (cm)",
        type: "number",
        placeholder: "Enter soil depth",
        autoGenerate: true,
      },
      {
        name: "clay_content",
        label: "Clay Content (%)",
        type: "number",
        placeholder: "Enter clay content",
        autoGenerate: true,
      },
      {
        name: "silt_content",
        label: "Silt Content (%)",
        type: "number",
        placeholder: "Enter silt content",
        autoGenerate: true,
      },
      {
        name: "sand_content",
        label: "Sand Content (%)",
        type: "number",
        placeholder: "Enter sand content",
        autoGenerate: true,
      },
      {
        name: "soil_carbon",
        label: "Soil Carbon (%)",
        type: "number",
        placeholder: "Enter soil carbon",
        autoGenerate: true,
      },
      {
        name: "bulk_density",
        label: "Bulk Density (g/cm³)",
        type: "number",
        placeholder: "Enter bulk density",
        autoGenerate: true,
      },
      {
        name: "soil_ph",
        label: "Soil pH" ,
        type: "number",
        placeholder: "Enter soil pH",
        autoGenerate: true,
      },
      /*
      {
        name: "soil_salinity",
        label: "Soil Salinity",
        type: "number",
        placeholder: "Enter soil salinity",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "soil_texture_class",
        label: "Soil Texture Class",
        type: "select",
        options: [
          "Clay",
          "Sandy",
          "Silty",
          "Loam",
          "Sandy Loam",
          "Clay Loam",
          "Silty Loam",
        ],
      },
      */
      /*
      {
        name: "drainage_class",
        label: "Drainage Class",
        type: "select",
        options: [
          "Very Poor",
          "Poor",
          "Moderate",
          "Good",
          "Very Good",
        ],
      },
      */
      /*
      {
        name: "coarse_fragment_pct",
        label: "Coarse Fragment (%)",
        type: "number",
        placeholder: "Enter coarse fragment percentage",
      },
      */
      /*
      {
        name: "cec",
        label: "Cation Exchange Capacity (CEC)",
        type: "number",
        placeholder: "Enter CEC",
      },
      */
      /*
      {
        name: "available_water_capacity",
        label: "Available Water Capacity",
        type: "number",
        placeholder: "Enter available water capacity",
      },
      */
      /*
      {
        name: "rooting_depth_restriction",
        label: "Rooting Depth Restriction",
        type: "text",
        placeholder: "Enter rooting depth restriction",
      },
      */
    ],
  },

  {
    id: "cropInformation",
    title: "Crop Information",
    description: "Record crop production and vegetation information.",
    fields: [
      /*
      {
        name: "crop_season",
        label: "Crop Season",
        type: "text",
        placeholder: "Enter crop season",
      },
      */
      /*
      {
        name: "crop_type",
        label: "Crop Type",
        type: "text",
        placeholder: "Enter crop type",
      },
      */
      /*
      {
        name: "crop_variety",
        label: "Crop Variety",
        type: "text",
        placeholder: "Enter crop variety",
      },
      */
      /*
      {
        name: "sowing_month",
        label: "Sowing Month",
        type: "month",
      },
      */
      /*
      {
        name: "harvest_month",
        label: "Harvest Month",
        type: "month",
      },
      */
      /*
      {
        name: "typical_yield",
        label: "Typical Yield",
        type: "number",
        placeholder: "Enter typical yield",
      },
      */
      /*
      {
        name: "actual_yield",
        label: "Actual Yield",
        type: "number",
        placeholder: "Enter actual yield",
      },
      */
      /*
      {
        name: "crop_residue_production",
        label: "Crop Residue Production",
        type: "number",
        placeholder: "Enter crop residue production",
      },
      */
      /*
      {
        name: "residue_removed_pct",
        label: "Residue Removed (%)",
        type: "number",
        placeholder: "Enter residue removed percentage",
      },
      */
      {
        name: "mean_ndvi",
        label: "Mean NDVI",
        type: "number",
        placeholder: "Enter mean NDVI",
        autoGenerate: true,
      },
      /*
      {
        name: "max_ndvi",
        label: "Maximum NDVI",
        type: "number",
        placeholder: "Enter maximum NDVI",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "mean_evi",
        label: "Mean EVI",
        type: "number",
        placeholder: "Enter mean EVI",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "mean_savi",
        label: "Mean SAVI",
        type: "number",
        placeholder: "Enter mean SAVI",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "vegetation_cover_pct",
        label: "Vegetation Cover (%)",
        type: "number",
        placeholder: "Enter vegetation cover percentage",
      },
      */
      /*
      {
        name: "biomass_estimate",
        label: "Biomass Estimate",
        type: "number",
        placeholder: "Enter biomass estimate",
      },
      */
      /*
      {
        name: "crop_vigour_score",
        label: "Crop Vigour Score",
        type: "number",
        placeholder: "Enter crop vigour score",
      },
      */
      /*
      {
        name: "crop_growth_stage",
        label: "Crop Growth Stage",
        type: "text",
        placeholder: "Enter crop growth stage",
      },
      */
      /*
      {
        name: "crop_stress_index",
        label: "Crop Stress Index",
        type: "number",
        placeholder: "Enter crop stress index",
      },
      */
    ],
  },

  /*
  {
    id: "fertiliserApplications",
    title: "Fertiliser Applications",
    description: "Record mineral fertiliser applications made to the field.",
    fields: [
      {
        name: "fertiliser_type",
        label: "Fertiliser Type",
        type: "text",
        placeholder: "Enter fertiliser type",
      },
      {
        name: "application_month",
        label: "Application Month",
        type: "month",
      },
      {
        name: "nitrogen_applied",
        label: "Nitrogen Applied",
        type: "number",
        placeholder: "Enter nitrogen applied",
      },
      {
        name: "phosphorus_applied",
        label: "Phosphorus Applied",
        type: "number",
        placeholder: "Enter phosphorus applied",
      },
      {
        name: "potassium_applied",
        label: "Potassium Applied",
        type: "number",
        placeholder: "Enter potassium applied",
      },
      {
        name: "application_method",
        label: "Application Method",
        type: "select",
        options: [
          "Broadcasting",
          "Band Placement",
          "Side Dressing",
          "Foliar Application",
          "Fertigation",
          "Manual Application",
        ],
      },
      {
        name: "application_cost",
        label: "Application Cost",
        type: "number",
        placeholder: "Enter application cost",
      },
    ],
  },
  */

  /*
  {
    id: "organicResourceApplications",
    title: "Organic Resource Applications",
    description: "Record manure, compost and other organic resources applied.",
    fields: [
      {
        name: "fertiliser_type",
        label: "Organic Resource Type",
        type: "text",
        placeholder: "Enter organic resource type",
      },
      {
        name: "application_month",
        label: "Application Month",
        type: "month",
      },
      {
        name: "nitrogen_applied",
        label: "Nitrogen Applied",
        type: "number",
        placeholder: "Enter nitrogen applied",
      },
      {
        name: "phosphorus_applied",
        label: "Phosphorus Applied",
        type: "number",
        placeholder: "Enter phosphorus applied",
      },
      {
        name: "potassium_applied",
        label: "Potassium Applied",
        type: "number",
        placeholder: "Enter potassium applied",
      },
      {
        name: "application_method",
        label: "Application Method",
        type: "select",
        options: [
          "Surface Application",
          "Incorporated into Soil",
          "Compost Placement",
          "Mulching",
          "Manual Application",
        ],
      },
      {
        name: "application_cost",
        label: "Application Cost",
        type: "number",
        placeholder: "Enter application cost",
      },
    ],
  },
  */

  /*
  {
    id: "irrigation",
    title: "Irrigation",
    description: "Record water sources, irrigation activities and costs.",
    fields: [
      {
        name: "irrigation_source",
        label: "Irrigation Source",
        type: "select",
        options: [
          "River",
          "Borehole",
          "Well",
          "Reservoir",
          "Rainwater",
          "Canal",
          "Other",
        ],
      },
      {
        name: "irrigation_method",
        label: "Irrigation Method",
        type: "select",
        options: [
          "Manual",
          "Drip",
          "Sprinkler",
          "Surface",
          "Flood",
          "Furrow",
        ],
      },
      {
        name: "irrigation_month",
        label: "Irrigation Month",
        type: "month",
      },
      {
        name: "irrigation_volume",
        label: "Irrigation Volume",
        type: "number",
        placeholder: "Enter irrigation volume",
      },
      {
        name: "irrigation_days",
        label: "Irrigation Days",
        type: "number",
        placeholder: "Enter number of irrigation days",
      },
      {
        name: "irrigation_cost",
        label: "Irrigation Cost",
        type: "number",
        placeholder: "Enter irrigation cost",
      },
      {
        name: "irrigation_labour",
        label: "Irrigation Labour",
        type: "number",
        placeholder: "Enter irrigation labour",
      },
      {
        name: "pumping_required",
        label: "Pumping Required",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "pump_type",
        label: "Pump Type",
        type: "text",
        placeholder: "Enter pump type",
      },
      {
        name: "water_source_distance",
        label: "Water Source Distance",
        type: "number",
        placeholder: "Enter water source distance",
      },
      {
        name: "estimated_crop_water_requirement",
        label: "Estimated Crop Water Requirement",
        type: "number",
        placeholder: "Enter crop water requirement",
      },
      {
        name: "rainfall_deficit",
        label: "Rainfall Deficit",
        type: "number",
        placeholder: "Enter rainfall deficit",
      },
      {
        name: "evapotranspiration",
        label: "Evapotranspiration",
        type: "number",
        placeholder: "Enter evapotranspiration",
      },
    ],
  },
  */

  /*
  {
    id: "fieldManagement",
    title: "Field Management",
    description: "Record tillage, conservation and residue-management practices.",
    fields: [
      {
        name: "tillage_type",
        label: "Tillage Type",
        type: "select",
        options: [
          "No Tillage",
          "Minimum Tillage",
          "Conventional Tillage",
          "Deep Tillage",
          "Strip Tillage",
          "Other",
        ],
      },
      {
        name: "terrace_presence",
        label: "Terrace Presence",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "contour_bunds",
        label: "Contour Bunds",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "mulching",
        label: "Mulching",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "residue_retention",
        label: "Residue Retention",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "cover_crop",
        label: "Cover Crop",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "agroforestry",
        label: "Agroforestry",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "grazing_after_harvest",
        label: "Grazing After Harvest",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "residue_burning",
        label: "Residue Burning",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  */

  {
    id: "terrain",
    title: "Terrain",
    description: "Record terrain characteristics of the field.",
    fields: [
      {
        name: "elevation",
        label: "Elevation (m)",
        type: "number",
        placeholder: "Enter elevation",
        autoGenerate: true,
      },
      {
        name: "slope",
        label: "Slope (%)",
        type: "number",
        placeholder: "Enter slope",
        autoGenerate: true,
      },
      /*
      {
        name: "aspect",
        label: "Aspect",
        type: "number",
        placeholder: "Enter aspect",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "curvature",
        label: "Curvature",
        type: "number",
        placeholder: "Enter curvature",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "topographic_wetness_index",
        label: "Topographic Wetness Index",
        type: "number",
        placeholder: "Enter topographic wetness index",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "flow_accumulation",
        label: "Flow Accumulation",
        type: "number",
        placeholder: "Enter flow accumulation",
        autoGenerate: true,
      },
      */
    ],
  },

  {
    id: "climate",
    title: "Climate",
    description: "Record rainfall and temperature information for the field.",
    fields: [
      /*
      {
        name: "annual_rainfall",
        label: "Annual Rainfall",
        type: "number",
        placeholder: "Enter annual rainfall",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "wet_season_rainfall",
        label: "Wet Season Rainfall",
        type: "number",
        placeholder: "Enter wet season rainfall",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "dry_season_rainfall",
        label: "Dry Season Rainfall",
        type: "number",
        placeholder: "Enter dry season rainfall",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "mean_temperature",
        label: "Mean Temperature",
        type: "number",
        placeholder: "Enter mean temperature",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "maximum_temperature",
        label: "Maximum Temperature",
        type: "number",
        placeholder: "Enter maximum temperature",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "minimum_temperature",
        label: "Minimum Temperature",
        type: "number",
        placeholder: "Enter minimum temperature",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "growing_degree_days",
        label: "Growing Degree Days",
        type: "number",
        placeholder: "Enter growing degree days",
        autoGenerate: true,
      },
      */
      /*
      {
        name: "rainfall_anomaly_index",
        label: "Rainfall Anomaly Index",
        type: "number",
        placeholder: "Enter rainfall anomaly index",
        autoGenerate: true,
      },
      */
      {
        name: "mean_monthly_rainfall",
        label: "Mean Monthly Rainfall (mm/month)",
        type: "number",
        placeholder: "Generated mean monthly rainfall",
        autoGenerate: true,
      },
      {
        name: "mean_monthly_temperature",
        label: "Mean Monthly Temperature (°C)",
        type: "number",
        placeholder: "Generated mean monthly temperature",
        autoGenerate: true,
      },
    ],
  },

  /*
  {
    id: "soilHealthAndGeneratedLayers",
    title: "Soil Health & Generated Layers",
    description: "Display generated soil-health and environmental indicators for the field.",
    fields: [
      {
        name: "estimated_soc_stock",
        label: "Estimated SOC Stock",
        type: "number",
        placeholder: "Generated estimated SOC stock",
        autoGenerate: true,
      },
      {
        name: "estimated_soc_percent",
        label: "Estimated SOC (%)",
        type: "number",
        placeholder: "Generated estimated SOC percentage",
        autoGenerate: true,
      },
      {
        name: "water_holding_capacity",
        label: "Water Holding Capacity",
        type: "number",
        placeholder: "Generated water holding capacity",
        autoGenerate: true,
      },
    ],
  },
  */
];

// Defining a set of generated values for specific fields to be used when auto-generating field data
const GENERATED_FIELD_VALUES = {
  field_name: "Generated Field",
  field_area: 1.5,
  distance_to_homestead: 0.8,
  soil_depth: 30,
  clay_content: 28,
  silt_content: 32,
  sand_content: 40,
  soil_carbon: 1.9,
  bulk_density: 1.25,
  soil_ph: 6.5,
  mean_ndvi: 0.72,
  elevation: 1650,
  slope: 5.5,
  mean_monthly_rainfall: 110,
  mean_monthly_temperature: 22.5,
};

// Function to create an empty structure for additional field data based on the defined sections and fields
const createEmptyAdditionalFieldData = () => {
  return fieldInformationSections.reduce((sectionData, section) => {
    sectionData[section.id] = section.fields.reduce((fieldData, field) => {
      fieldData[field.name] = "";
      return fieldData;
    }, {});

    return sectionData;
  }, {});
};

// The main Farmersdashboard component that manages the state and behavior of the farmer's dashboard page
export default function Farmersdashboard() {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const username = routeLocation.state?.username || "Farmer";
  const isNewUser = routeLocation.state?.isNewUser || false;
  const [language, setLanguage] = useState("en");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [fields, setFields] = useState(() => {
    const savedFields = localStorage.getItem("registeredFields");
    return savedFields ? JSON.parse(savedFields) : [];
  });
  const [error, setError] = useState("");
  const [openFieldSection, setOpenFieldSection] = useState("fieldIdentification");
  const [additionalFieldData, setAdditionalFieldData] = useState(createEmptyAdditionalFieldData);
  const handleAdditionalFieldChange = (sectionId, fieldName, value) => {
    setAdditionalFieldData((previousData) => ({
      ...previousData,
      [sectionId]: {
        ...previousData[sectionId],
        [fieldName]: value,
      },
    }));
  };
// Function to navigate to the field dashboard page for a specific field
  const generateFieldValue = (field) => {
    if (Object.prototype.hasOwnProperty.call(GENERATED_FIELD_VALUES, field.name)) {
      return GENERATED_FIELD_VALUES[field.name];
    }

    if (field.type === "select") {
      return field.options?.[0] || "";
    }

    if (field.type === "month") {
      return new Date().toISOString().slice(0, 7);
    }

    if (field.type === "number") {
      return 1;
    }

    return `Generated ${field.label}`;
  };
// Function to handle the generation of a specific field's value
  const handleGenerateField = (sectionId, field) => {
    handleAdditionalFieldChange(
      sectionId,
      field.name,
      generateFieldValue(field)
    );
  };

  const handleGenerateSection = (section) => {
    const generatedSectionData = section.fields.reduce(
      (generatedData, field) => ({
        ...generatedData,
        [field.name]: generateFieldValue(field),
      }),
      {}
    );

    setAdditionalFieldData((previousData) => ({
      ...previousData,
      [section.id]: {
        ...previousData[section.id],
        ...generatedSectionData,
      },
    }));
  };
  // Function to toggle the visibility of a specific field section in the form
  const toggleFieldSection = (sectionId) => {
    setOpenFieldSection((currentSection) =>
      currentSection === sectionId ? "" : sectionId
    );
  };
  const handleRegisterField = (event) => {
    event.preventDefault();

  const fieldIdentification =
    additionalFieldData.fieldIdentification || {};

  const cropInformation =
    additionalFieldData.cropInformation || {};

  const registeredFieldName =
    fieldIdentification.field_name?.trim() || "";

  const registeredFieldArea = Number(
    fieldIdentification.field_area
  );

  if (!registeredFieldName) {
    setError("Please enter the field name.");
    setOpenFieldSection("fieldIdentification");
    return;
  }

  if (
    !Number.isFinite(registeredFieldArea) ||
    registeredFieldArea <= 0
  ) {
    setError("Please enter a valid field area greater than zero.");
    setOpenFieldSection("fieldIdentification");
    return;
  }

  // New field object to be added to the list of registered fields
  const newField = {
    id: Date.now(),

    fieldName: registeredFieldName,
    totalArea: registeredFieldArea,
    cropType: cropInformation.crop_type || "Not specified",

    fieldInformation: additionalFieldData,

    status: "Active",
  };

 // Updating the state and local storage with the new field
  setFields((previousFields) => {
    const updatedFields = [...previousFields, newField];

    localStorage.setItem(
      "registeredFields",
      JSON.stringify(updatedFields)
    );

    return updatedFields;
  });

  setError("");
  setOpenFieldSection("");
  setAdditionalFieldData(createEmptyAdditionalFieldData());
};
  
// Function to calculate the progress of soil tests for a specific field
  const getFieldProgress = (fieldId) => {
    const soilTests = JSON.parse(
      localStorage.getItem(`soilTests_${fieldId}`) || "[]"
    );

    const completedTests = soilTests.length;

    const percentage = Math.round(
      (completedTests / REQUIRED_TESTS) * 100
    );

    return {
      completedTests,
      percentage: Math.min(percentage, 100),
    };
  };
// It navigates to the field dashboard page for a specific field
  const openFieldDashboard = (field) => {
    navigate("/field-dashboard", {
      state: {
        field,
      },
    });
  };

  // Function to handle the deletion of a specific field.
  const handleDeleteField = (fieldId, event) => {
    event.stopPropagation();
    const confirmed = window.confirm(
      "Are you sure you want to delete this field and its saved soil test data?"
    );

    if (!confirmed) {
      return;
    }
// Updating the state and local storage to remove the deleted field
    setFields((prevFields) => {
      const updatedFields = prevFields.filter((field) => field.id !== fieldId);
      localStorage.setItem("registeredFields", JSON.stringify(updatedFields));
      return updatedFields;
    });

    localStorage.removeItem(`soilTests_${fieldId}`);
  };

  // The Farmers Dashboard page with header, navigation tabs, welcome card, and field registration form
  return (
    <div className="farmer-dashboard-page">
      <header className="farmer-topbar">
        <div className="topbar-brand">
          <div className="logo-icon">🌱</div>
          <h2>Farmily — Farmers Dashboard</h2>
        </div>

        <div className="topbar-actions">
          <div className="language-toggle" aria-label="Language selector">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setShowLanguageMenu((current) => !current)}
              aria-label="Language selector">
              {language === "en" ? "🇬🇧" : "🇪🇹"}
            </button>

            {showLanguageMenu && (
              <div className="language-menu">
                <button
                  type="button"
                  className={`lang-option ${language === "en" ? "active" : ""}`}
                  onClick={() => {
                    setLanguage("en");
                    setShowLanguageMenu(false);
                  }}>
                  🇬🇧 English
                </button>
                <button
                  type="button"
                  className={`lang-option ${language === "et" ? "active" : ""}`}
                  onClick={() => {
                    setLanguage("et");
                    setShowLanguageMenu(false);
                  }}>
                  🇪🇹 Amharic
                </button>
              </div>
            )}
          </div>

          <div className="user-circle">{username.charAt(0).toUpperCase()}</div>

          <button className="logout-btn" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      <nav className="farmer-tabs">
        <button className="active">Dashboard</button>

        <button
          onClick={() =>
            document
              .querySelector(".registered-fields")
              ?.scrollIntoView({ behavior: "smooth" })
          }>
          My Fields
        </button>

        <button onClick={() => navigate("/household-dashboard")}>
          Household
        </button>

        <button
           type="button"
           onClick={() => navigate("/recommendations")}>
           Recommendations
         </button>
      </nav>
      {/* Main content area of the farmer's dashboard page*/}
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
              <img src={farmerWelcome} alt="Farmers working on a farm" />
            </div>
          </div>
        </section>
          
        <section className="dashboard-section">
          <div className="section-header">
            <h2>Register New Field</h2>

            <p>
              Register your farm field by providing the details below. Once
              registered, you'll be able to monitor soil health, record field
              observations, track crop performance, and receive smart
              recommendations tailored to your field.
            </p>
          </div>
          {/* Field registration form with accordion sections for different field information categories */}
          <form className="field-form" onSubmit={handleRegisterField}>
            <div className="field-information-accordion">
              {fieldInformationSections.map((section) => {
                const isOpen = openFieldSection === section.id;

                return (
                  <div
                    className={
                      isOpen
                        ? "field-category active"
                        : "field-category"
                    }
                    key={section.id} >
                    <div className="field-category-header">
                      <button
                        type="button"
                        className="field-category-title-button"
                        onClick={() => toggleFieldSection(section.id)}
                        aria-expanded={isOpen}>
                        <div>
                          <h4>{section.title}</h4>
                          <p>{section.description}</p>
                        </div>
                      </button>
                      {/* Render the auto-generate button and toggle button for the section */}
                      <div className="field-category-actions">
                        <button
                          type="button"
                          className="auto-generate-section-btn"
                          title={`Automatically populate all ${section.title} fields`}
                          aria-label={`Automatically populate all ${section.title} fields`}
                          onClick={() => handleGenerateSection(section)}>
                          ↻
                        </button>

                        <button
                          type="button"
                          className="field-category-arrow"
                          onClick={() => toggleFieldSection(section.id)}
                          aria-label={`${isOpen ? "Close" : "Open"} ${section.title}`}
                          aria-expanded={isOpen}
                        >
                          {isOpen ? "−" : "+"}
                        </button>
                      </div>
                    </div>
                     {/* Render the fields for the section if it is open */}
                    {isOpen && (
                      <div className="field-category-content">
                        {section.fields.map((field) => {
                          const fieldValue =
                            additionalFieldData[section.id]?.[field.name] || "";
                          return (
                            <div
                              className="detailed-field-group"
                              key={`${section.id}-${field.name}`}>
                              <label htmlFor={`${section.id}-${field.name}`}>{field.label}</label>

                              <div
                                className={
                                  field.autoGenerate
                                    ? "detailed-input-wrapper has-generator"
                                    : "detailed-input-wrapper"
                                }>
                                {field.type === "select" ? (
                                  <select
                                    id={`${section.id}-${field.name}`}
                                    value={fieldValue}
                                    onChange={(event) =>
                                      handleAdditionalFieldChange(
                                        section.id,
                                        field.name,
                                        event.target.value
                                      )
                                    }>
                                    <option value="">
                                      Select {field.label}
                                    </option>
                                    {/* Render options for select fields */}
                                    {field.options.map((option) => (
                                      <option value={option} key={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                ) : (
                                  <input
                                    id={`${section.id}-${field.name}`}
                                    type={field.type}
                                    min={
                                      field.type === "number"
                                        ? "0"
                                        : undefined
                                    }
                                    step={
                                      field.type === "number"
                                        ? "any"
                                        : undefined
                                    }
                                    placeholder={field.placeholder || ""}
                                    value={fieldValue}
                                    onChange={(event) =>
                                      handleAdditionalFieldChange(
                                        section.id,
                                        field.name,
                                        event.target.value
                                      )
                                    }
                                  />
                                )}
                               {/* Display the auto-generate button for fields that support it */}
                                {field.autoGenerate && (
                                  <button
                                    type="button"
                                    className="auto-generate-field-btn"
                                    title="Generate value from the system"
                                    aria-label={`Generate ${field.label}`}
                                    onClick={() =>
                                      handleGenerateField(section.id, field)
                                    }>
                                    ↻
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}

                        {section.id === "fieldIdentification" && (
                          <div className="field-map-container">
                            <label>Field Boundary Map</label>

                            <div className="map-placeholder">
                              📍 Map Picker Placeholder
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            

            {error ? <p className="form-error">{error}</p> : null}

            <button type="submit">Register Field</button>
          </form>
        </section>

        <section className="registered-fields">
          <h2>My Fields</h2>

          {fields.length === 0 ? (
            <p className="empty-message">
              No field registered yet. Register your first field above.
            </p>
          ) : (
            <div className="fields-grid">
              {fields.map((field) => {
                const progress = getFieldProgress(field.id);

                return (
                  <div className="field-card" key={field.id}>
                    <h3>{field.fieldName}</h3>
                      <p>Crop: {field.cropType}</p>
                      <p>Area: {field.totalArea} ha</p>
                      <p>Status: {field.status}</p>
                    <div className="field-progress-section">
                      <div className="field-progress-header">
                        <span>Soil Test Progress</span>
                        <strong>{progress.percentage}%</strong>
                      </div>

                      <div className="field-test-progress-track">
                        <div
                          className="field-test-progress-fill"
                          style={{
                            width: `${Math.max(progress.percentage, 4)}%`,
                          }}
                        />
                      </div>

                      <small>
                        {progress.completedTests} of {REQUIRED_TESTS} soil tests
                        completed
                      </small>
                    </div>

                    <div className="field-card-actions">
                      <button onClick={() => openFieldDashboard(field)}>
                        Open Field Dashboard
                      </button>

                      <button
                        className="delete-field-btn"
                        onClick={(event) =>
                          handleDeleteField(field.id, event)
                        }>
                        Delete Field
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
//Importing the neccessary modules
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HouseholdSummary.css";

function createReadableLabel(variableName) {
  return variableName
    .replaceAll("_pct", " percentage")
    .replaceAll("_day", " per day")
    .replaceAll("_year", " per year")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function hasValue(value) {
  if (typeof value === "boolean") {
    return value === true;
  }

  return value !== "" && value !== null && value !== undefined;
}

const SUMMARY_CATEGORIES = [
  {
    id: "demographics",
    title: "Demographics",
    icon: "👨‍👩‍👧‍👦",
    fields: [
      "household_size",
      "adult_males",
      "adult_females",
      "male_children",
      "female_children",
      "elderly_members",
      "education_level_head",
    ],
  },
  {
    id: "labour",
    title: "Labour",
    icon: "👷",
    fields: [
      "labour_available_days_year",
      "hired_labour_days_year",
      "off_farm_labour_days_year",
      "water_collection_hours_day",
      "fuel_collection_hours_day",
      "livestock_management_hours_day",
      "crop_management_hours_day",
      "labour_cost_day",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    icon: "💰",
    fields: [
      "annual_income_total",
      "annual_income_crop",
      "annual_income_livestock",
      "annual_income_offfarm",
      "annual_expenditure_total",
      "food_expenditure",
      "farm_input_expenditure",
      "savings_available",
    ],
  },
  {
    id: "purchases-sales",
    title: "Purchases and Sales",
    icon: "🛒",
    fields: [
      "purchase_season",
      "purchase_product",
      "purchase_amount",
      "purchase_unit",
      "purchase_price",
      "sale_season",
      "sale_product",
      "sale_amount",
      "sale_unit",
      "sale_price",
    ],
  },
  {
    id: "livestock",
    title: "Livestock",
    icon: "🐄",
    fields: [
      "cattle_count",
      "dairy_cattle_count",
      "oxen_count",
      "goats_count",
      "sheep_count",
      "poultry_count",
      "pigs_count",
      "donkeys_count",
      "horses_count",
      "camels_count",
      "beehive_count",
      "milk_production_day",
      "egg_production_year",
      "livestock_sales_year",
      "manure_production_year",
      "livestock_feed_strategy",
    ],
  },
  {
    id: "organic-resources",
    title: "Organic Resources",
    icon: "♻️",
    fields: [
      "manure_to_fields_pct",
      "manure_to_compost_pct",
      "manure_used_as_fuel_pct",
      "manure_sold_pct",
      "residue_retained_soil_pct",
      "residue_feed_pct",
      "residue_fuel_pct",
      "residue_sold_pct",
      "compost_produced_year",
      "compost_applied_year",
      "organic_inputs_imported",
      "organic_inputs_exported",
    ],
  },
  {
    id: "water",
    title: "Water",
    icon: "💧",
    fields: [
      "water_source_type",
      "drought_water_source_type",
      "water_available_day",
      "distance_to_water_source",
      "travel_time_water",
      "queue_time_water",
      "water_collection_trips_day",
      "water_volume_trip",
      "dry_season_water_availability",
      "wet_season_water_availability",
      "livestock_water_requirement_day",
    ],
  },
  {
    id: "irrigation",
    title: "Irrigation",
    icon: "🚿",
    fields: [
      "irrigation_available",
      "irrigation_source",
      "irrigation_area",
      "max_irrigation_volume",
      "irrigation_cost_year",
      "irrigation_labour_hours",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    icon: "⚡",
    fields: [
      "wood_bundle_weight",
      "wood_collection_time_bundle",
      "wood_collection_trips_week",
      "firewood_used_year",
      "charcoal_used_year",
      "crop_residue_used_fuel",
      "dung_used_fuel",
      "kerosene_used_year",
      "fuel_purchase_cost_year",
    ],
  },
  {
    id: "market-access",
    title: "Market Access",
    icon: "🏪",
    fields: ["distance_to_market", "travel_time_market"],
  },
  {
    id: "objectives",
    title: "Farm Objectives",
    icon: "🎯",
    fields: [
      "objective_maximise_yield",
      "objective_increase_income",
      "objective_reduce_labour",
    ],
  },
];

export default function HouseholdSummary() {
  const navigate = useNavigate();

  const personalInfo = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("farmilyFarmerPersonalInfo") || "{}"
      );
    } catch {
      return {};
    }
  }, []);

  const householdData = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("farmilyHouseholdData") || "{}"
      );
    } catch {
      return {};
    }
  }, []);

  const fields = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("registeredFields") || "[]"
      );
    } catch {
      return [];
    }
  }, []);

  const financeBalance =
    Number(householdData.annual_income_total || 0) -
    Number(householdData.annual_expenditure_total || 0);

  const personalDetails = [
    {
      label: "Full Name",
      value: [
        personalInfo.firstName,
        personalInfo.middleName,
        personalInfo.lastName,
      ]
        .filter(Boolean)
        .join(" "),
    },
    {
      label: "Phone Number",
      value: personalInfo.phoneNumber,
    },
    {
      label: "Email Address",
      value: personalInfo.email,
    },
    {
      label: "Gender",
      value: personalInfo.gender,
    },
    {
      label: "Date of Birth",
      value: personalInfo.dateOfBirth,
    },
    {
      label: "Region",
      value: personalInfo.region,
    },
    {
      label: "District / Woreda",
      value: personalInfo.district,
    },
    {
      label: "Village / Kebele",
      value: personalInfo.village,
    },
    {
      label: "Residential Address",
      value: personalInfo.address,
    },
  ].filter((item) => hasValue(item.value));

  const categorySummaries = SUMMARY_CATEGORIES.map((category) => {
    const values = category.fields
      .map((fieldName) => ({
        name: fieldName,
        label: createReadableLabel(fieldName),
        value: householdData[fieldName],
      }))
      .filter((item) => hasValue(item.value));

    return {
      ...category,
      values,
    };
  }).filter((category) => category.values.length > 0);

  return (
    <div className="household-summary-page"> 

        <section className="summary-overview-grid">
          <article className="summary-stat-card">
            <span>🌾</span>
            <small>Registered Fields</small>
            <strong>{fields.length}</strong>
          </article>

          <article className="summary-stat-card">
            <span>👨‍👩‍👧‍👦</span>
            <small>Household Size</small>
            <strong>{householdData.household_size || 0}</strong>
          </article>

          <article className="summary-stat-card">
            <span>💰</span>
            <small>Estimated Balance</small>
            <strong>ETB {financeBalance.toLocaleString()}</strong>
          </article>

          <article className="summary-stat-card">
            <span>💧</span>
            <small>Water Source</small>
            <strong>
              {householdData.water_source_type || "Not recorded"}
            </strong>
          </article>
        </section>

        <section className="summary-content-grid">
          <article className="summary-section-card">
            <div className="summary-section-heading">
              <span>👨‍🌾</span>

              <div>
                <h2>Farmer's Personal Information</h2>
                <p>Farmer’s profile and contact information</p>
              </div>
            </div>

            {personalDetails.length === 0 ? (
              <p className="summary-empty">
                No information has been saved.
              </p>
            ) : (
              <div className="summary-details-grid">
                {personalDetails.map((item) => (
                  <div className="summary-detail-item" key={item.label}>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            )}
          </article>

          {categorySummaries.map((category) => (
            <article
              className="summary-section-card"
              key={category.id}
            >
              <div className="summary-section-heading">
                <span>{category.icon}</span>

                <div>
                  <h2>{category.title}</h2>
                  <p>
                    {category.values.length} recorded item
                    {category.values.length === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              <div className="summary-details-grid">
                {category.values.map((item) => (
                  <div
                    className="summary-detail-item"
                    key={item.name}
                  >
                    <small>{item.label}</small>

                    <strong>
                      {typeof item.value === "boolean"
                        ? item.value
                          ? "Yes"
                          : "No"
                        : item.value}
                    </strong>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <article className="summary-section-card full-width-summary">
            <div className="summary-section-heading">
              <span>🌾</span>

              <div>
                <h2>Registered Fields</h2>
                <p>Fields currently linked to this farm household</p>
              </div>
            </div>

            {fields.length === 0 ? (
              <p className="summary-empty">
                No fields have been registered.
              </p>
            ) : (
              <div className="summary-fields-grid">
                {fields.map((field) => (
                  <article
                    className="summary-field-card"
                    key={field.id}
                  >
                    <h3>{field.fieldName}</h3>
                    <p>Crop: {field.cropType}</p>
                    <p>Area: {field.totalArea} ha</p>
                    <p>Region: {field.region}</p>
                    <p>Status: {field.status || "Active"}</p>

                    <button
                      type="button"
                      onClick={() =>
                        navigate("/field-dashboard", {
                          state: {
                            field,
                          },
                        })
                      }
                    >
                      Open Field
                    </button>
                  </article>
                ))}
              </div>
            )}
          </article>
        </section>

        <section className="summary-next-step-card">
          <div>
            <p className="small-title">NEXT STEP</p>
            <h2>Farm Recommendations</h2>

            <p>
              Farmily will use the farmer profile, household resources,
              registered fields and soil-test results to support recommendations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/recommendations")}
          >
            Continue to Recommendations →
          </button>
        </section>
      </div>
  );
}
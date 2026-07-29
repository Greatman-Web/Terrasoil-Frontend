import { useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HouseholdDashboard.css";
import HouseholdSummary from "./HouseholdSummary"; 

const REQUIRED_TESTS = 8;

const HOUSEHOLD_DICTIONARY = [
  {
    id: "demographics",
    title: "Demographics",
    icon: "👨‍👩‍👧‍👦",
    description: "Household members and education",
    fields: [
      {
        name: "household_size",
        dataType: "INTEGER",
        min: 1,
        max: 50,
        required: true,
      },
      /*
{
        name: "adult_males",
        dataType: "INTEGER",
        min: 0,
        max: 20,
        required: true,
      },
*/
      /*
{
        name: "adult_females",
        dataType: "INTEGER",
        min: 0,
        max: 20,
        required: true,
      },
*/
      /*
{
        name: "male_children",
        dataType: "INTEGER",
        min: 0,
        max: 20,
        required: false,
      },
*/
      /*
{
        name: "female_children",
        dataType: "INTEGER",
        min: 0,
        max: 20,
        required: false,
      },
*/
      /*
{
        name: "elderly_members",
        dataType: "INTEGER",
        min: 0,
        max: 20,
        required: false,
      },
*/
      /*
{
        name: "education_level_head",
        dataType: "ENUM",
        unit: "-",
        min: null,
        max: null,
        required: false,
      }
*/
    ],
  },
  /*
{
    id: "labour",
    title: "Labour",
    icon: "👷",
    description: "Available labour, working time and labour costs",
    fields: [
      {
        name: "labour_available_days_year",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "average_awake_hours_day",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "hired_labour_days_year",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "off_farm_labour_days_year",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "water_collection_hours_day",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "fuel_collection_hours_day",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "livestock_management_hours_day",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "crop_management_hours_day",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      },
      {
        name: "male_adult_water_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_adult_fuel_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_adult_livestock_management_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_adult_crop_management_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "female_adult_water_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "female_adult_fuel_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "female_adult_livestock_management_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "female_adult_crop_management_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_child_water_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_child_fuel_collection_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_child_livestock_management_hours",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "male_child_crop_management_hours",
        dataType: "FLOAT",      
        min: null,
        max: null,
        required: false,       
      },
      {
        name: "female_child_water_collection_hours",
        dataType: "FLOAT",
        
        min: null,
        max: null,
        required: false,
        
      },
      {
        name: "female_child_fuel_collection_hours",
        dataType: "FLOAT",
       
        min: null,
        max: null,
        required: false,
       
      },
      {
        name: "female_child_livestock_management_hours",
        dataType: "FLOAT",
       
        min: null,
        max: null,
        required: false,
      
      },
      {
        name: "female_child_crop_management_hours",
        dataType: "FLOAT",
        
        min: null,
        max: null,
        required: false,
        
      },
      {
        name: "household_tasks_hours_day",
        dataType: "FLOAT",
        
        min: 0,
        max: 5000,
        required: false,
        
      },
      {
        name: "offfarm_work_hours_day",
        dataType: "FLOAT",
        
        min: 0,
        max: 5000,
        required: false,
       
      },
      {
        name: "labour_cost_day",
        dataType: "FLOAT",
        min: 0,
        max: 5000,
        required: false,
      }
    ],
  },
*/
  {
    id: "finance",
    title: "Finance",
    icon: "💰",
    description: "Income, expenditure and savings",
    fields: [
      {
        name: "annual_income_total",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
       
      },
      /*
{
        name: "annual_income_crop",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "annual_income_livestock",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "annual_income_offfarm",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "annual_expenditure_total",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "food_expenditure",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "farm_input_expenditure",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      },
*/
      /*
{
        name: "savings_available",
        dataType: "FLOAT",
        unit: "ETB",
        min: 0,
        max: 999999999,
        required: false,
      }
*/
    ],
  },
  /*
{
    id: "purchases-sales",
    title: "Purchases & Sales",
    icon: "🛒",
    description: "Products purchased and sold",
    fields: [
      {
        name: "purchase_season",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "purchase_product",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "purchase_amount",
        dataType: "FLOAT",
        unit: "ETB",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "purchase_unit",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "purchase_price",
        dataType: "FLOAT",
        unit: "ETB",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "sale_season",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "sale_product",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "sale_amount",
        dataType: "FLOAT",
        unit: "ETB",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "sale_unit",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "sale_price",
        dataType: "FLOAT",
        unit: "ETB",
        min: null,
        max: null,
        required: false,
      }
    ],
  },
*/
  {
    id: "livestock",
    title: "Livestock",
    icon: "🐄",
    description: "Animal numbers, production and feeding",
    fields: [
      {
        name: "cattle_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "dairy_cattle_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "oxen_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "goats_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      /*
{
        name: "sheep_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "poultry_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "pigs_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "donkeys_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "horses_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "camels_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "beehive_count",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "milk_production_day",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "meat_sales_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "egg_production_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "livestock_sales_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "manure_production_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "manure_collected_pct",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "fodder_production_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "purchased_feed_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "grazing_land_area",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "communal_grazing_access",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "draft_animals",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "livestock_mortality_rate",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "feed_type_1",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_1_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_2",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_2_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_3",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_3_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_4",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_4_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_5",
        dataType: "VARCHAR",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "feed_type_5_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "purchased_feed_pct",
        dataType: "FLOAT",
        unit: "%",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "livestock_feed_strategy",
        dataType: "ENUM",
        unit: "-",
        min: null,
        max: null,
        required: false,
      }
*/
    ],
  },
  /*
{
    id: "organic-resources",
    title: "Organic Resources",
    icon: "♻️",
    description: "Manure, residues, compost and organic inputs",
    fields: [
      {
        name: "manure_to_fields_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "manure_to_compost_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "manure_used_as_fuel_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "manure_sold_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "residue_retained_soil_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "residue_feed_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "residue_fuel_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "residue_sold_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "residue_burned_pct",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "compost_produced_year",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "compost_applied_year",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "compost_sold_year",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "organic_inputs_imported",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      },
      {
        name: "organic_inputs_exported",
        dataType: "FLOAT",
        unit: "%",
        min: 0,
        max: 100000,
        required: true,
      }
    ],
  },
*/
  {
    id: "water",
    title: "Water",
    icon: "💧",
    description: "Water sources, access and availability",
    fields: [
      /*
{
        name: "water_source_type",
        dataType: "ENUM",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "drought_water_source_type",
        dataType: "ENUM",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "drought_water_travel_time",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "drought_water_queue_time",
        dataType: "FLOAT",
        min: null,
        max: null,
        required: false,
      },
*/
      {
        name: "water_available_day",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "distance_to_water_source",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      /*
{
        name: "travel_time_water",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "queue_time_water",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "water_collection_trips_day",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "water_volume_trip",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "dry_season_water_availability",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "wet_season_water_availability",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "livestock_water_requirement_day",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      }
*/
    ],
  },
  /*
{
    id: "irrigation",
    title: "Irrigation",
    icon: "🚿",
    description: "Irrigation access, area, volume and costs",
    fields: [
      {
        name: "irrigation_available",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "irrigation_source",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "irrigation_area",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
        description: "Irrigation variable",
      },
      {
        name: "max_irrigation_volume",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "irrigation_cost_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "irrigation_labour_hours",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      }
    ],
  },
*/
  {
    id: "energy",
    title: "Energy",
    icon: "⚡",
    description: "Fuelwood, charcoal and household energy use",
    fields: [
      /*
{
        name: "wood_bundle_weight",
        dataType: "FLOAT",
        unit: "tonnes",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "wood_collection_time_bundle",
        dataType: "FLOAT",
        unit: "hours",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "wood_collection_trips_week",
        dataType: "INTEGER",
        unit: "trips/week",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "wood_collection_travel_time",
        dataType: "FLOAT",
        unit: "hours",
        min: null,
        max: null,
        required: false,
      },
*/
      /*
{
        name: "wood_collection_gathering_time",
        dataType: "FLOAT",
        unit: "hours",
        min: null,
        max: null,
        required: false,
      },
*/
      {
        name: "firewood_used_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "charcoal_used_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "crop_residue_used_fuel",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "dung_used_fuel",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      /*
{
        name: "kerosene_used_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "fuel_collection_trips_week",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
*/
      /*
{
        name: "fuel_purchase_cost_year",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      }
*/
    ],
  },
  /*
{
    id: "market-access",
    title: "Market Access",
    icon: "🏪",
    description: "Distance and travel time to market",
    fields: [
      {
        name: "distance_to_market",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      },
      {
        name: "travel_time_market",
        dataType: "FLOAT",
        min: 0,
        max: 100000,
        required: false,
      }
    ],
  },
*/
  /*
{
    id: "objectives",
    title: "Objectives",
    icon: "🎯",
    description: "Farmer production and livelihood objectives",
    fields: [
      {
        name: "Maximise_yield",
        dataType: "BOOLEAN",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "Increase_income",
        dataType: "BOOLEAN",
        unit: "-",
        min: null,
        max: null,
        required: false,
      },
      {
        name: "Reduce_labour",
        dataType: "BOOLEAN",
        unit: "-",
        min: null,
        max: null,
        required: false,
      }
    ],
  }
*/
];

const ENUM_OPTIONS = {
  education_level_head: [
    "none",
    "primary",
    "secondary",
    "college",
    "university",
  ],
  water_source_type: [
    "rainwater",
    "river",
    "well",
    "borehole",
    "reservoir",
    "tap",
    "other",
  ],
  drought_water_source_type: [
    "rainwater",
    "river",
    "well",
    "borehole",
    "reservoir",
    "tap",
    "other",
  ],
  livestock_feed_strategy: [
    "grazing",
    "stall feeding",
    "mixed feeding",
    "purchased feed",
    "other",
  ],
};

const NUMBER_TYPES = new Set(["INTEGER", "FLOAT", "DECIMAL"]);

function createInitialHouseholdData(savedData = {}) {
  const initialData = {};

  HOUSEHOLD_DICTIONARY.forEach((category) => {
    category.fields.forEach((field) => {
      initialData[field.name] =
        savedData[field.name] ?? (field.dataType === "BOOLEAN" ? false : "");
    });
  });

  return initialData;
}

function createReadableLabel(variableName) {
  return variableName
    .replaceAll("_pct", " percentage")
    .replaceAll("_day", " per day")
    .replaceAll("_year", " per year")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getInputStep(dataType) {
  return dataType === "INTEGER" ? "1" : "any";
}

export default function HouseholdDashboard() {
  // =========================
  // NAVIGATION AND STATE SETUP
  // =========================
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("demographics");
  const [saveMessage, setSaveMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef(null);

  const [householdData, setHouseholdData] = useState(() => {
    try {
      const savedData = JSON.parse(
        localStorage.getItem("farmilyHouseholdData") || "{}"
      );

      return createInitialHouseholdData(savedData);
    } catch {
      return createInitialHouseholdData();
    }
  });
  

  // PERSONAL INFORMATION STATE AND AUMTOMATIC POPULATION FROM SIGNUP DATA
  const [personalInfo, setPersonalInfo] = useState(() => {
  try {
    const signupUser = JSON.parse(
      localStorage.getItem("terraSoilUser") || "{}"
    );

    const savedPersonalInfo = JSON.parse(
      localStorage.getItem("farmilyFarmerPersonalInfo") || "{}"
    );

    return {
      firstName:
        savedPersonalInfo.firstName ||
        signupUser.firstName ||
        "",

      middleName:
        savedPersonalInfo.middleName ||
        signupUser.middleName ||
        "",

      lastName:
        savedPersonalInfo.lastName ||
        signupUser.lastName ||
        "",

      phoneNumber:
        savedPersonalInfo.phoneNumber ||
        signupUser.phoneNumber ||
        "",

      gender: savedPersonalInfo.gender || "",
      dateOfBirth: savedPersonalInfo.dateOfBirth || "",
      region: savedPersonalInfo.region || "",
      village: savedPersonalInfo.village || "",
      address: savedPersonalInfo.address || "",
    };
  } catch {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
      region: "",
      village: "",
      address: "",
    };
  }
});

const [personalInfoSaved, setPersonalInfoSaved] = useState(false);

  const fields = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("registeredFields") || "[]");
    } catch {
      return [];
    }
  }, []);

  const fieldProgress = useMemo(
    () =>
      fields.map((field) => {
        let tests = [];

        try {
          tests = JSON.parse(
            localStorage.getItem(`soilTests_${field.id}`) || "[]"
          );
        } catch {
          tests = [];
        }

        const uniqueCompletedTests = new Set(
          tests.map((test) => test.testName).filter(Boolean)
        ).size;

        const completedTests = Math.min(
          uniqueCompletedTests,
          REQUIRED_TESTS
        );

        return {
          ...field,
          completedTests,
          percentage: Math.round(
            (completedTests / REQUIRED_TESTS) * 100
          ),
        };
      }),
    [fields]
  );

  const totalLivestock = [
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
  ].reduce(
    (total, variableName) =>
      total + Number(householdData[variableName] || 0),
    0
  );

  const financeBalance =
    Number(householdData.annual_income_total || 0) -
    Number(householdData.annual_expenditure_total || 0);

  const updateField = (name, value) => {
    setHouseholdData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setSaveMessage("");
  };

  const toggleSection = (sectionId) => {
    setActiveSection((currentSection) =>
      currentSection === sectionId ? "" : sectionId
    );

    setSaveMessage("");
  };

  const updatePersonalInfo = (fieldName, value) => {
  setPersonalInfo((currentInfo) => ({
    ...currentInfo,
    [fieldName]: value,
  }));

  setPersonalInfoSaved(false);
};

const savePersonalInfo = (event) => {
  event.preventDefault();

  const updatedPersonalInfo = {
    ...personalInfo,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    "farmilyFarmerPersonalInfo",
    JSON.stringify(updatedPersonalInfo)
  );

  setPersonalInfo(updatedPersonalInfo);
  setPersonalInfoSaved(true);
};

  const saveHouseholdData = (categoryTitle = "Household") => {
    localStorage.setItem(
      "farmilyHouseholdData",
      JSON.stringify(householdData)
    );

    setSaveMessage(
      `${categoryTitle} information saved successfully.`
    );
  };

  const handleViewSummary = () => {
  const nextValue = !showSummary;

  setShowSummary(nextValue);

  if (nextValue) {
    setTimeout(() => {
      summaryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }
};

  const renderField = (field) => {
    const label = createReadableLabel(field.name);
    const value = householdData[field.name];
    const options = ENUM_OPTIONS[field.name];

    if (field.dataType === "BOOLEAN") {
      return (
        <label className="household-checkbox-field" key={field.name}>
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(event) =>
              updateField(field.name, event.target.checked)
            }
          />

          <span>
            <strong>{label}</strong>
            <small>{field.description}</small>
          </span>
        </label>
      );
    }

    if (field.dataType === "ENUM" && options) {
      return (
        <label key={field.name}>
          {label}{field.required ? " *" : ""}

          <select
            value={value}
            required={field.required}
            onChange={(event) =>
              updateField(field.name, event.target.value)
            }
          >
            <option value="">Select an option</option>

            {options.map((option) => (
              <option value={option} key={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>

          <small className="field-help">
            {field.description}
          </small>
        </label>
      );
    }

    const isNumber = NUMBER_TYPES.has(field.dataType);

    
    return (
      <label key={field.name}>
        {label}{field.required ? " *" : ""}

        <div className="input-with-unit">
          <input
            type={isNumber ? "number" : "text"}
            step={isNumber ? getInputStep(field.dataType) : undefined}
            min={isNumber && field.min !== null ? field.min : undefined}
            max={isNumber && field.max !== null ? field.max : undefined}
            value={value}
            required={field.required}
            placeholder={field.description}
            onChange={(event) =>
              updateField(field.name, event.target.value)
            }
          />

          {field.unit && field.unit !== "-" && (
            <span className="input-unit">{field.unit}</span>
          )}
        </div>

      </label>
    );
  };

  return (
    <div className="household-page">
      {/* =========================
          PAGE HEADER
      ========================= */}
      <header className="household-header">
        <div className="household-brand">
          <div className="household-logo">🌱</div>

          <div>
            <h2>Farmily</h2>
            <p>Farm Household Management</p>
          </div>
        </div>

        <div className="household-header-actions">
          <button type="button" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <button type="button" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      {/* =========================
          MAIN NAVIGATION TABS
      ========================= */}
      <nav className="household-tabs">
        <button
          type="button"
          onClick={() => navigate("/farmer-dashboard")}
        >
          Dashboard
        </button>

        <button
          type="button"
          onClick={() => navigate("/farmer-dashboard")}
        >
          My Fields
        </button>

        <button type="button" className="active">
          Household
        </button>

        <button type="button">
          Recommendations
        </button>
      </nav>

      {/* =========================
          MAIN CONTENT AREA
      ========================= */}
      <main className="household-main">
        {/* =========================
            INTRODUCTION CARD
        ========================= */}
        <section className="household-intro-card">
          <p className="small-title">HOUSEHOLD MANAGEMENT</p>

          <h1>Farm Management Overview</h1>

          <p>
           <p> Welcome to the Household Dashboard. This module helps you organise and
              manage every aspect of your farming household, including demographics,
              labour, finances, livestock, water resources, market activities, and
              farm objectives. Keeping this information up to date enables better
              planning, informed decision making, and sustainable farm management.</p>
          </p>
        </section>

        {/* =========================
            SUMMARY STATISTICS
        ========================= */}
        <section className="household-summary-grid">
          <article className="summary-card">
            <span>🌾</span>
            <small>Registered Fields</small>
            <strong>{fields.length}</strong>
          </article>

          <article className="summary-card">
            <span>💰</span>
            <small>Current Balance</small>
            <strong>
              ETB {financeBalance.toLocaleString()}
            </strong>
          </article>

          <article className="summary-card">
            <span>👨‍👩‍👧‍👦</span>
            <small>Household Size</small>
            <strong>
              {householdData.household_size || "Not recorded"}
            </strong>
          </article>

          <article className="summary-card">
            <span>🐄</span>
            <small>Total Livestock</small>
            <strong>{totalLivestock}</strong>
          </article>

          <article className="summary-card">
            <span>💧</span>
            <small>Water Source</small>
            <strong>
              {householdData.water_source_type || "Not recorded"}
            </strong>
          </article>
        </section>

        {/* =========================
            FARMER PERSONAL INFORMATION FORM
        ========================= */}
        <section className="farmer-personal-card">
  <div className="personal-card-heading">
    <div>
      <p className="small-title">FARMER PROFILE</p>
      <h2>Personal Information</h2>

      <p>
        Enter your details
        before completing the household management sections.
      </p>
    </div>

    <span className="personal-card-icon">👨‍🌾</span>
  </div>

  <form className="personal-info-form" onSubmit={savePersonalInfo}>
    <label>
      First Name *
      <input
        type="text"
        required
        value={personalInfo.firstName || ""}
        onChange={(event) =>
          updatePersonalInfo("firstName", event.target.value)
        }
        placeholder="eg. John, Marie, Ahmed"
      />
    </label>

    <label>
      Middle Name
      <input
        type="text"
        value={personalInfo.middleName || ""}
        onChange={(event) =>
          updatePersonalInfo("middleName", event.target.value)
        }
        placeholder= "eg. Doe, Ali, Bekele"
      />
    </label>

    <label>
      Last Name *
      <input
        type="text"
        required
        value={personalInfo.lastName || ""}
        onChange={(event) =>
          updatePersonalInfo("lastName", event.target.value)
        }
        placeholder="eg. Tesfaye, Abebe, Bekele"
      />
    </label>

    <label>
      Phone Number *
      <input
        type="tel"
        required
        inputMode="numeric"
        pattern="[0-9+ ]+"
        value={personalInfo.phoneNumber || ""}
        onChange={(event) =>
          updatePersonalInfo("phoneNumber", event.target.value)
        }
        placeholder="eg. +251912345678" 
      />
    </label>


    <label>
      Gender
      <select
        value={personalInfo.gender || ""}
        onChange={(event) =>
          updatePersonalInfo("gender", event.target.value)
        }
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
    </label>

    <label>
      Date of Birth
      <input
        type="date"
        value={personalInfo.dateOfBirth || ""}
        onChange={(event) =>
          updatePersonalInfo("dateOfBirth", event.target.value)
        }
        placeholder="YYYY-MM-DD"
      />
    </label>

    <label>
      Region *
      <input
        type="text"
        required
        value={personalInfo.region || ""}
        onChange={(event) =>
          updatePersonalInfo("region", event.target.value)
        }
        placeholder="eg. Oromia, Amhara, Tigray"
      />
    </label>


    <label>
      Village
      <input
        type="text"
        value={personalInfo.village || ""}
        onChange={(event) =>
          updatePersonalInfo("village", event.target.value)
        }
        placeholder="Enter your village"
      />
    </label>

    <label className="personal-address-field">
      Residential Address
      <textarea
        rows="3"
        value={personalInfo.address || ""}
        onChange={(event) =>
          updatePersonalInfo("address", event.target.value)
        }
        placeholder="Enter your residential address"
      />
    </label>

    <div className="personal-form-actions">
      <button type="submit" className="section-save-btn">
        Save Personal Information
      </button>

      {personalInfoSaved && (
        <p className="personal-save-message">
          ✅ Personal information saved successfully.
        </p>
      )}
    </div>
  </form>
</section>

        {/* =========================
            HOUSEHOLD DATA ACCORDION SECTIONS
        ========================= */}
        <section className="household-accordion">
          {HOUSEHOLD_DICTIONARY.map((category) => (
            <article
              className="household-section"
              key={category.id}
            >
              <button
                type="button"
                className={
                  activeSection === category.id
                    ? "accordion-header active-accordion"
                    : "accordion-header"
                }
                onClick={() => toggleSection(category.id)}
              >
                <div className="accordion-title">
                  <span className="accordion-icon">
                    {category.icon}
                  </span>

                  <div>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>
                </div>

                <span className="accordion-arrow">
                  {activeSection === category.id ? "▲" : "▼"}
                </span>
              </button>

              {activeSection === category.id && (
                <div className="accordion-body">
                  <div className="management-form two-columns">
                    {category.fields.map(renderField)}
                  </div>

                  <button
                    type="button"
                    className="section-save-btn"
                    onClick={() => saveHouseholdData(category.title)}
                  >
                    Save {category.title}
                  </button>
                </div>
              )}
            </article>
          ))}

          {saveMessage && (
            <p className="household-save-message">
              ✅ {saveMessage}
            </p>
          )}
        </section>
        <button
          type="button"
          className="view-summary-btn"
          onClick={handleViewSummary}>
          {showSummary ? "Hide Summary ▲" : "📄 View Household Summary"}
        </button>
        {showSummary && (
        <div ref={summaryRef}>
       <HouseholdSummary />
       </div>)}
      </main>
    </div>
  );
}
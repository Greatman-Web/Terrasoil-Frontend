import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/variable.css";
import "./styles/global.css";

// Mount the React app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
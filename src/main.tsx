import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    {/* Remove the Strict Mode in production */}
    <App />
  </React.StrictMode>
);

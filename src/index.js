import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import Aboutme from "./components/aboutme/Aboutme";

import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="background">
      <Aboutme />
      <App />
    </div>
  </React.StrictMode>
);

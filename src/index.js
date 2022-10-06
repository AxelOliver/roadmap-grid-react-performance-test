import React from "react";
import ReactDOM from "react-dom/client";
import RoadmapCssHack from "./css-hack/Roadmap";
import RoadmapNoHack from "./no-css-hack/Roadmap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RoadmapCssHack />
  </React.StrictMode>
);

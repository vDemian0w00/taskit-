import MainNavigator from "@navigation/index";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavigator />
    </BrowserRouter>
  </React.StrictMode>
);

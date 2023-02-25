import React from "react";
import ReactDOM from "react-dom/client";
import MainNavigator from "@navigation/index";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AutoConnectProvider } from "@hooks/Contexts/AutoConnectProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AutoConnectProvider>
        <MainNavigator />
      </AutoConnectProvider>
    </BrowserRouter>
  </React.StrictMode>
);

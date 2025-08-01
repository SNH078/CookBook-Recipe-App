import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>
);



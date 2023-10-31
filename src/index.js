import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DrawerProvider } from "./components/context/drawer_context";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <DrawerProvider>
    <App />
  </DrawerProvider>
);

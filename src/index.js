import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DrawerProvider } from "./components/context/drawer_context";
import { SubjectProvider } from "./components/context/subject_context";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <SubjectProvider>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </SubjectProvider>
);

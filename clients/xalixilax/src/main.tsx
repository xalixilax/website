import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@xalixilax/design-system/src/styles/global.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

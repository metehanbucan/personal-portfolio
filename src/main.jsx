import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ProjectsProvider } from "./context/ProjectsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </LanguageProvider>
  </StrictMode>
);

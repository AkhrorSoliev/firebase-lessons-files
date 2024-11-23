import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// toaster
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster position="bottom-center" />
  </>
);

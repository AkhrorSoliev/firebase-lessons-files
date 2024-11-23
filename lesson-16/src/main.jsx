import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// toaster
import { Toaster } from "sonner";

// global context
import { GlobalContextProvider } from "./context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <Toaster position="bottom-center" />
  </>
);

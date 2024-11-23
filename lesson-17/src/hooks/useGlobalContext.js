// react
import { useContext } from "react";

// global context
import { GlobalContext } from "../context/globalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() must be in the GlobalContextProvider()"
    );
  }

  return context;
};

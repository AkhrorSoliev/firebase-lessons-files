// react
import { createContext, useEffect, useReducer } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, authReady: true };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

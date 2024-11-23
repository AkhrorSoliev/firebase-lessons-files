// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// toast
import { toast } from "sonner";

// custom hook
import { useGlobalContext } from "./useGlobalContext";

export const useSignup = () => {
  const { dispatch } = useGlobalContext();

  const signup = (displayname, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { signup };
};

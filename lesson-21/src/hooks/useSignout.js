import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// toast
import { toast } from "sonner";

export const useSignout = () => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return { signOutUser };
};

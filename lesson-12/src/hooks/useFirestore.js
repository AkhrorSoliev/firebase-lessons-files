// firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "transactions"), data)
      .then(() => toast.success("Successfully added"))
      .catch((error) => toast.error(error));
  };

  const deleteDocument = () => {};

  return { addDocument, deleteDocument };
};

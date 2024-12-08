// firebase
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "transactions"), data)
      .then(() => toast.success("Successfully added"))
      .catch((error) => toast.error(error));
  };

  const deleteDocument = (id) => {
    deleteDoc(doc(db, "transactions", id))
      .then(() => toast.success("Successfully deleted"))
      .catch((error) => toast.error(error));
  };

  return { addDocument, deleteDocument };
};

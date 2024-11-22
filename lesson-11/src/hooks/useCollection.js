// react imports
import { useState, useEffect } from "react";

// firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const dataFromCollection = [];
        querySnapshot.forEach((doc) => {
          dataFromCollection.push({ id: doc.id, ...doc.data() });
        });

        setData(dataFromCollection);
      }
    );

    return () => unsubscribe();
  }, []);

  return { data };
};

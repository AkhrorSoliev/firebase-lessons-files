// firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

// react imports
import { useState, useEffect } from "react";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
      }
    );

    return () => unsubscribe();
  }, []);

  return { data };
};

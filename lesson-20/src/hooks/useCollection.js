// react imports
import { useState, useEffect, useRef } from "react";

// firebase
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollection = (c, _q) => {
  const [data, setData] = useState(null);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);
    if (q) {
      ref = query(ref, where(...q));
    }

    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const dataFromCollection = [];
      querySnapshot.forEach((doc) => {
        dataFromCollection.push({ id: doc.id, ...doc.data() });
      });

      setData(dataFromCollection);
    });

    return () => unsubscribe();
  }, [c, q]);

  return { data };
};

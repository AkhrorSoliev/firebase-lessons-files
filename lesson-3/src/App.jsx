// react imports
import { useEffect, useState } from "react";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [transactions, setTransactions] = useState(null);
  useEffect(() => {
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(data);
    };

    getDocuments();
  }, []);

  return (
    <div>
      <h1>Firebase</h1>
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <li
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
                key={transaction.id}
              >
                <h4>{transaction.title} :</h4>
                <h4>${transaction.price}</h4>
                <button>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

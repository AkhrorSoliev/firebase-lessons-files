// react imports
import { useEffect, useState } from "react";

// firebase
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [transactions, setTransactions] = useState(null);

  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "transactions"), {
      title,
      price: Number(price),
    })
      .then(() => alert("Success"))
      .catch((error) => alert(error.message));
    e.target.reset();
    setTitle(null);
    setPrice(null);
  };

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
      <form onSubmit={hanldeSubmit}>
        <label>
          <span>Title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          <span>Price:</span>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button>add</button>
      </form>
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

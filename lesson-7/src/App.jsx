// react imports
import { useEffect, useState } from "react";

// custom hooks
import { useCollection } from "./hooks/useCollection";

// firebase
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const { data: transactions } = useCollection("transactions");

  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);

  // add new data
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

  // delete data
  const deleteDocument = (id) => {
    deleteDoc(doc(db, "transactions", id))
      .then(() => console.log("Success"))
      .catch((error) => alert(error.message));
  };

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
                <button onClick={() => deleteDocument(transaction.id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

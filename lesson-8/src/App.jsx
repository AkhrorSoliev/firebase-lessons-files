// react imports
import { useEffect, useState } from "react";

// custom hooks
import { useCollection } from "./hooks/useCollection";

// firebase
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

// components
import Transaction from "./components/Transaction";

function App() {
  const { data: transactions } = useCollection("transactions");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [editId, setEditId] = useState(null);

  // add doc
  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const transactionRef = doc(db, "transactions", editId);
      updateDoc(transactionRef, {
        title,
        price: Number(price),
      })
        .then(() => {
          setEditId(null);
          console.log("Successufully updated");
        })
        .catch((error) => console.log(error.message));
      return;
    }

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

  // edit doc
  const handleEdit = (transaction) => {
    setEditId(transaction.id);
    setTitle(transaction.title);
    setPrice(transaction.price);
  };

  // cencel checking
  useEffect(() => {
    if (!editId) {
      setTitle("");
      setPrice("");
    }
  }, [editId]);

  return (
    <div>
      <h1>Firebase</h1>
      <form onSubmit={hanldeSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Price:</span>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        {editId && <button>save changes</button>}
        {!editId && <button>add</button>}
      </form>
      <ul>
        {transactions &&
          transactions.map((transaction) => {
            return (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                editId={editId}
                handleEdit={handleEdit}
                cencelEditing={() => setEditId(null)}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default App;

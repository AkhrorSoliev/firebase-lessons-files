// firebase imports
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

function Transaction({ transaction, editId, handleEdit, cencelEditing }) {
  // delete data
  const deleteDocument = (id) => {
    deleteDoc(doc(db, "transactions", id))
      .then(() => console.log("Success"))
      .catch((error) => alert(error.message));
  };

  const isEditing = editId == transaction.id;

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <h4>{transaction.title} :</h4>
      <h4>${transaction.price}</h4>
      {isEditing ? (
        <button onClick={cencelEditing}>cancel</button>
      ) : (
        <button onClick={() => handleEdit(transaction)}>edit</button>
      )}
      <button onClick={() => deleteDocument(transaction.id)}>Delete</button>
    </li>
  );
}

export default Transaction;

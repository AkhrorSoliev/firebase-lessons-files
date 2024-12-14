// react imports
import { useState } from "react";

// styles
import styles from "./TransactionsList.module.css";

// react icons
import { FaTrash, FaEdit } from "react-icons/fa";

// custom hooks
import { useFirestore } from "../hooks/useFirestore";
import Modal from "./Modal";

function TransactionsList({ transactions }) {
  const { deleteDocument, updateDocument } = useFirestore();
  const [item, setItem] = useState(null);

  const changeItem = (title, price) => {
    updateDocument(
      item.id,
      {
        title,
        price,
      },
      setItem
    );
  };

  return (
    <div>
      {item && <Modal setItem={setItem} changeItem={changeItem} item={item} />}
      {transactions.map((transaction) => {
        const { id, title, price } = transaction;
        return (
          <div key={id} className={styles.card}>
            <h4>{title}</h4>
            <p>$ {price}</p>
            <span onClick={() => deleteDocument(id)} className={styles.trash}>
              <FaTrash />
            </span>
            <span onClick={() => setItem(transaction)} className={styles.edit}>
              <FaEdit />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;

// react imports
import { useState } from "react";

// styles
import styles from "./TransactionsList.module.css";

// react icons
import { FaTrash, FaEdit } from "react-icons/fa";

// custom hooks
import { useFirestore } from "../hooks/useFirestore";
import Modal from "./Modal";

// format time
import { formatDate } from "../utils";

function TransactionsList({ transactions }) {
  const { deleteDocument, updateDocument } = useFirestore();
  const [item, setItem] = useState(null);

  const changeItem = (title, price) => {
    updateDocument(
      item.id,
      {
        title,
        price,
        edited: true,
      },
      setItem
    );
  };

  return (
    <div>
      {item && <Modal setItem={setItem} changeItem={changeItem} item={item} />}
      {transactions.map((transaction) => {
        const { id, title, price, createdTime, edited, bgImage } = transaction;
        return (
          <div
            key={id}
            className={styles.card}
            style={{ backgroundImage: bgImage }}
          >
            <h4>{title}</h4>
            <p>$ {price}</p>
            <span onClick={() => deleteDocument(id)} className={styles.trash}>
              <FaTrash />
            </span>
            <span onClick={() => setItem(transaction)} className={styles.edit}>
              <FaEdit />
            </span>

            <small className={styles.time}>
              {edited && "edited ,"}{" "}
              {createdTime ? formatDate(createdTime) : "Loading..."}
            </small>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;

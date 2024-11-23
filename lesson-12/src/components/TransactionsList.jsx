// styles
import styles from "./TransactionsList.module.css";

// react icons
import { FaTrash } from "react-icons/fa";

function TransactionsList({ transactions }) {
  return (
    <div>
      {transactions.map((transaction) => {
        const { id, title, price } = transaction;
        return (
          <div key={id} className={styles.card}>
            <h4>{title}</h4>
            <p>$ {price}</p>
            <span className={styles.trash}>
              <FaTrash />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;

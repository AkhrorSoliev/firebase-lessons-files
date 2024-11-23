// styles
import styles from "./TransactionForm.module.css";

// react
import { useState } from "react";

// toast
import { toast } from "sonner";

// custom hooks
import { useFirestore } from "../hooks/useFirestore";

function TransactionForm() {
  const { addDocument } = useFirestore();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !price.trim()) {
      toast.error("Please, fill all fileds");
      return;
    }
    addDocument({
      title,
      price: Number(price),
    });

    setTitle("");
    setPrice("");
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <button>Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;

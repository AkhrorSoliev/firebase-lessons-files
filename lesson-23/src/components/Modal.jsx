// react imports
import { useState } from "react";

// style
import styles from "./Modal.module.css";

function Modal({ item, setItem, changeItem }) {
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeItem(title, price);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <h2>Change item:</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <span>Title:</span>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={title}
              />
            </label>
            <label>
              <span>Price:</span>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={price}
              />
            </label>

            <div className="button-wrappers">
              <button onClick={() => setItem(null)} type="button">
                Cancel
              </button>
              <button>Change</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;

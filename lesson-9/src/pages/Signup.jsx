// styles
import styles from "./Auth.module.css";

function Signup() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input type="text" placeholder="display name" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" placeholder="password" />
        </label>
        {false && (
          <button className={styles.disabeled} disabled>
            Loading...
          </button>
        )}
        {true && <button>Signup</button>}
      </form>
    </div>
  );
}

export default Signup;

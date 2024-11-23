// styles
import styles from "./Auth.module.css";

function Signup() {
  const loading = false;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>

        {!loading && <button>Signup</button>}
        {loading && (
          <button className={styles.disabled} disabled>
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}

export default Signup;

// styles
import styles from "./Auth.module.css";

function Login() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
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
        {true && <button>Login</button>}
      </form>
    </div>
  );
}

export default Login;

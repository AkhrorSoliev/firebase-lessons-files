// styles
import styles from "./Auth.module.css";

function Login() {
  const loading = false;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>

        {!loading && <button>Login</button>}
        {loading && (
          <button className={styles.disabled} disabled>
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;

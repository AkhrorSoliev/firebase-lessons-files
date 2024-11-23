// styles
import styles from "./Auth.module.css";

// react
import { useState } from "react";

// custom hooks
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);

    setPassword("");
    setEmail("");
  };

  let loading = false;
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
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

// styles
import styles from "./Auth.module.css";

// react
import { useState } from "react";

// custom hooks
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

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
        <div className="button-wrappers">
          <p>
            <Link to="/signup">If you don't have account</Link>
          </p>
          {!loading && <button>Login</button>}
          {loading && (
            <button className={styles.disabled} disabled>
              Loading...
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;

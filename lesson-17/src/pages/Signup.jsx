// styles
import styles from "./Auth.module.css";

// react
import { useState } from "react";

// custom hooks
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(displayName, email, password);

    setDisplayName("");
    setPassword("");
    setEmail("");
  };

  const loading = false;
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
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

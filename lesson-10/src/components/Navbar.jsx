// styles
import styles from "./Navbar.module.css";

// rrd imports
import { Link, NavLink } from "react-router";

function Navbar() {
  const user = false;
  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/">
          myMoney
        </Link>

        {user && (
          <div className={styles.avatar}>
            <span>Hello, Akhror</span>
            <img src="https://picsum.photos/400" alt="" />
            <button>Logout</button>
          </div>
        )}

        {!user && (
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;

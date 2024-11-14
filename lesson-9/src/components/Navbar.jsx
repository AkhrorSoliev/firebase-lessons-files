// styles
import styles from "./Navbar.module.css";

// rrd imports
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/">
          myMoney
        </Link>

        {false && (
          <div className={styles.avatar}>
            <img src="https://picsum.photos/400" alt="user avatar" />
            <button>Logout</button>
          </div>
        )}
        {true && (
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

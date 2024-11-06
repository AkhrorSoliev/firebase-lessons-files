// rrd imports
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          <img src="./firebase.svg" alt="logo icon" width={150} />
        </Link>

        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Singup</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

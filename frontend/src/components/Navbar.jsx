import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        <Link to="/" className="logo">
          ARMO<span>TEK</span>
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;
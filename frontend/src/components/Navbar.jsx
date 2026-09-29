import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          ARMO<span>TEK</span>
        </Link>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Quiénes somos</a>
          <a href="#catalogo">Catálogo</a>
        </div>

        <div className="nav-actions">
          <button className="nav-icon" aria-label="Buscar">
            <Search size={21} />
          </button>

          <Link to="/carrito" className="cart">
            <ShoppingCart size={22} />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
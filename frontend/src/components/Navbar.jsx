import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const chairCategories = [
  "Gerenciales",
  "Ejecutivas",
  "Secretariales",
  "Visita",
  "Banquetas",
  "Cajero",
  "Laboratorio",
  "Banquitos",
  "Comedor / Bar",
  "SUM",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        DELIVERY GRATIS EN LIMA POR COMPRAS A PARTIR DE S/.500
      </div>

      <header className="header">
        <div className="navbar-main">
          <Link to="/" className="logo" aria-label="Armotek, inicio">
            ARMOTEK
          </Link>
        </div>

        <nav className="main-menu" aria-label="Menú principal">
          <div
            className={`menu-item-with-dropdown${menuOpen ? " is-open" : ""}`}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <Link to="/sillas" className="top-menu-link">
              Sillas <ChevronDown size={16} />
            </Link>
            <button
              className="menu-dropdown-toggle"
              type="button"
              aria-label="Mostrar categorías de sillas"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <ChevronDown size={16} />
            </button>
            <div className="menu-dropdown">
              <Link to="/sillas" onClick={() => setMenuOpen(false)}>
                Todas las sillas
              </Link>
              {chairCategories.map((category) => (
                <Link
                  key={category}
                  to={`/sillas?categoria=${encodeURIComponent(category)}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link className="top-menu-link" to="/muebles">
            Muebles
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

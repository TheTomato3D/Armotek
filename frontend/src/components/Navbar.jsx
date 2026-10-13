import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      const header = document.querySelector(".header");

      if (section) {
        const headerHeight = header?.offsetHeight || 0;

        const sectionPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <header className="header">
      <nav className="navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={() => scrollToSection("inicio")}
        >
          ARMO<span>TEK</span>
        </Link>

        {/* LINKS DE ESCRITORIO */}
        <div className="nav-links">
          <Link
            to="/"
            onClick={() => scrollToSection("inicio")}
          >
            Inicio
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("nosotros")}
          >
            Quiénes somos
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("catalogo")}
          >
            Catálogo
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* MENÚ MÓVIL */}
        <div
          className={
            menuOpen
              ? "mobile-menu mobile-menu-open"
              : "mobile-menu"
          }
        >
          <Link
            to="/"
            onClick={() => scrollToSection("inicio")}
          >
            Inicio
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("nosotros")}
          >
            Quiénes somos
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("catalogo")}
          >
            Catálogo
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
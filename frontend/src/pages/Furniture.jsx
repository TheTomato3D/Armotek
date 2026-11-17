import { Link } from "react-router-dom";
import furnitureImage from "../assets/images/muebles.jpg";

function Furniture() {
  return (
    <section className="furniture-page">
      <div className="furniture-copy">
        <span className="catalog-label">CATÁLOGO ARMOTEK</span>
        <h1>Muebles de oficina</h1>
        <p>
          Estamos preparando esta sección. Escríbenos y te ayudamos a encontrar
          el mobiliario que necesitas.
        </p>
        <a
          className="furniture-contact-button"
          href="https://wa.me/51951155065?text=Hola%2C%20quisiera%20consultar%20por%20muebles%20de%20oficina."
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
        <Link className="furniture-back-link" to="/sillas">
          Ver catálogo de sillas
        </Link>
      </div>
      <img src={furnitureImage} alt="Muebles de oficina ARMOTEK" />
    </section>
  );
}

export default Furniture;

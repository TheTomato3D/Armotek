import { Link } from "react-router-dom";

import sillasImg from "../assets/images/sillas.jpg";
import mueblesImg from "../assets/images/muebles.jpg";
import ofertasImg from "../assets/images/ofertas.jpg";
import liquidacionImg from "../assets/images/liquidacion.jpg";

const categories = [
  {
    title: "Sillas",
    description: "Ergonomía y comodidad para cada espacio.",
    image: sillasImg,
    path: "/sillas",
  },
  {
    title: "Muebles",
    description: "Mobiliario funcional para oficina y hogar.",
    image: mueblesImg,
    path: "/muebles",
  },
  {
    title: "Ofertas",
    description: "Productos seleccionados a precios especiales.",
    image: ofertasImg,
    path: "/ofertas",
  },
  {
    title: "Liquidación",
    description: "Últimas unidades y oportunidades.",
    image: liquidacionImg,
    path: "/liquidacion",
  },
];

function Categories() {
  return (
    <section className="categories-section" id="catalogo">
      <div className="section-heading">
        <span>CATÁLOGO</span>
        <h2>Nuestras categorías</h2>
        <p>Encuentra el mobiliario ideal para cada espacio.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={category.path}
            className="category-card"
            key={category.title}
          >
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />

            <div className="category-overlay" />

            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              <div className="category-link">
                <span>Ver productos</span>
                <span className="category-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
import { useState } from "react";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import pissaImg from "../assets/images/products/silla-pissa.png";
import turiaImg from "../assets/images/products/silla-turia.png";
import vigoImg from "../assets/images/products/silla-vigo.webp";
import nordicImg from "../assets/images/products/silla-nordic.webp";

import volgaPoltronaImg from "../assets/images/products/silla-volga.webp";
import brewImg from "../assets/images/products/silla-brew.webp";
import pinkoImg from "../assets/images/products/silla-pinko.webp";
import movieImg from "../assets/images/products/silla-movie.webp";
import foldyImg from "../assets/images/products/silla-foldy.webp";
import fenixImg from "../assets/images/products/silla-fenix.jpg";
import butterflyImg from "../assets/images/products/silla-butterfly.jpeg";
import brendaImg from "../assets/images/products/silla-brenda.png";
import almaImg from "../assets/images/products/silla-alma.webp";
import volgaImg from "../assets/images/products/silla-volga-2.webp";
import amiaImg from "../assets/images/products/silla-amia.webp";
import hungriaImg from "../assets/images/products/silla-hungria.webp";
import belgicaImg from "../assets/images/products/silla-belgica.webp";

const categories = [
  "Todas",
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

const products = [
  {
    id: 1,
    name: "Silla Pissa Interlocutora",
    code: "SP-001",
    category: "Visita",
    image: pissaImg,
  },
  {
    id: 2,
    name: "Silla Turia Interlocutora",
    code: "ST-002",
    category: "Visita",
    image: turiaImg,
  },
  {
    id: 3,
    name: "Silla Vigo CB Universitaria",
    code: "SV-003",
    category: "SUM",
    image: vigoImg,
  },
  {
    id: 4,
    name: "Silla Nordic Interlocutora",
    code: "SN-004",
    category: "Visita",
    image: nordicImg,
  },
  {
  id: 5,
  name: "Poltrona Volga Interlocutora",
  code: "PV-005",
  category: "Visita",
  image: volgaPoltronaImg,
},
{
  id: 6,
  name: "Silla Brew Interlocutora",
  code: "SB-006",
  category: "Visita",
  image: brewImg,
},
{
  id: 7,
  name: "Silla Pinko Interlocutora",
  code: "SP-007",
  category: "Visita",
  image: pinkoImg,
},
{
  id: 8,
  name: "Silla Movie Plástica",
  code: "SM-008",
  category: "Visita",
  image: movieImg,
},
{
  id: 9,
  name: "Silla Foldy Universitaria",
  code: "SF-009",
  category: "SUM",
  image: foldyImg,
},
{
  id: 10,
  name: "Silla Fenix Interlocutora",
  code: "SF-010",
  category: "Visita",
  image: fenixImg,
},
{
  id: 11,
  name: "Silla Butterfly Plástica",
  code: "SB-011",
  category: "Visita",
  image: butterflyImg,
},
{
  id: 12,
  name: "Brenda - Silla Interlocutora",
  code: "SB-012",
  category: "Visita",
  image: brendaImg,
},
{
  id: 13,
  name: "Alma - Silla Interlocutora",
  code: "SA-013",
  category: "Visita",
  image: almaImg,
},
{
  id: 14,
  name: "Volga - Silla Interlocutora",
  code: "SV-014",
  category: "Visita",
  image: volgaImg,
},
{
  id: 15,
  name: "Amia - Silla Interlocutora",
  code: "SA-015",
  category: "Visita",
  image: amiaImg,
},
{
  id: 16,
  name: "Silla Gerencial Hungría",
  code: "SGH-016",
  category: "Gerenciales",
  image: hungriaImg,
},
{
  id: 17,
  name: "Silla Gerencial Bélgica",
  code: "SGB-017",
  category: "Gerenciales",
  image: belgicaImg,
},
];

function Chairs() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todas" ||
      product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-page">

      {/* ENCABEZADO */}

      <div className="catalog-header">
        <span className="catalog-label">CATÁLOGO ARMOTEK</span>

        <h1>Sillas</h1>

        <p>
          Encuentra la silla ideal para tu espacio de trabajo.
          Diseño, ergonomía y comodidad para cada necesidad.
        </p>
      </div>

      {/* CATEGORÍAS */}

      <div className="catalog-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* HERRAMIENTAS */}

      <div className="catalog-tools">

        <div className="catalog-results">
          <SlidersHorizontal size={18} />

          <span>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "producto"
              : "productos"}
          </span>
        </div>

        <div className="catalog-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Buscar silla..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {/* PRODUCTOS */}

      {filteredProducts.length > 0 ? (
        <div className="products-grid">

          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>

                <h2>{product.name}</h2>

                <p className="product-code">
                  Código: {product.code}
                </p>

                <Link
                  to={`/sillas/${product.id}`}
                  className="product-button"
                >
                  Ver producto
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>
          ))}

        </div>
      ) : (
        <div className="no-products">
          <h2>No encontramos productos</h2>

          <p>
            Prueba seleccionando otra categoría o realizando
            una búsqueda diferente.
          </p>
        </div>
      )}

    </section>
  );
}

export default Chairs;
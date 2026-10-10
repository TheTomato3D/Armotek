import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";

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

const products = [
  {
    id: 1,
    name: "Silla Pissa Interlocutora",
    category: "Visita",
    image: pissaImg,
    description:
      "Estructura cromada. Espaldar en malla. Asiento acolchado tapizado en tela de paño. Patas metal cromadas. Brazos fijos en PP.",
    specifications: [
      { label: "Profundidad", value: "49 cm" },
      { label: "Ancho", value: "49 cm" },
      { label: "Alto", value: "49 cm" },
      { label: "Altura del asiento", value: "45 cm" },
      { label: "Ancho del asiento", value: "47 cm" },
      { label: "Profundidad del asiento", value: "49 cm" },
      { label: "Altura del espaldar", value: "43 cm" },
      { label: "Ancho del espaldar", value: "46 cm" },
      { label: "Diámetro base", value: "47 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 2,
    name: "Silla Turia Interlocutora",
    category: "Visita",
    image: turiaImg,
    description:
      "Asiento y espaldar monopieza inyectada en polipropileno. Estructura en madera de 4 patas con deslizadores plásticos. En colores negro y blanco.",
    specifications: [
      { label: "Profundidad", value: "430 mm" },
      { label: "Ancho", value: "470 mm" },
      { label: "Alto", value: "795 mm" },
      { label: "Altura del asiento", value: "420 mm" },
      { label: "Ancho del asiento", value: "450 mm" },
      { label: "Profundidad del asiento", value: "430 mm" },
      { label: "Altura del espaldar", value: "390 mm" },
      { label: "Ancho del espaldar", value: "450 mm" },
      { label: "Diámetro base", value: "430 mm" },
      { label: "Peso máximo soportado", value: "80 kg" },
    ],
  },

  {
    id: 3,
    name: "Silla Vigo CB Universitaria",
    category: "SUM",
    image: vigoImg,
    description:
      "Espaldar con un marco perimetral en polipropileno, tapizado en malla. Asiento abatible en tela de malla color negro. Estructura cromada en tubo ovalado, apilable en forma horizontal. Brazos en polipropileno fijos. Tablero antipánico de escritura de 30 cm de ancho por 36 cm de largo, con portavasos.",
    specifications: [
      { label: "Profundidad", value: "45 cm" },
      { label: "Ancho", value: "44 cm" },
      { label: "Alto", value: "82 cm" },
      { label: "Altura del asiento", value: "45 cm" },
      { label: "Ancho del asiento", value: "44 cm" },
      { label: "Profundidad del asiento", value: "45 cm" },
      { label: "Altura del espaldar", value: "41 cm" },
      { label: "Ancho del espaldar", value: "44 cm" },
      { label: "Diámetro base", value: "44 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 4,
    name: "Silla Nordic Interlocutora",
    category: "Visita",
    image: nordicImg,
    description:
      "Monopieza inyectada en polipropileno con asiento interno acolchado tapizado en cuerina. En madera de 4 patas con refuerzos metálicos pintados en color negro y deslizadores plásticos. En color negro, blanco y gris.",
    specifications: [
      { label: "Profundidad", value: "460 mm" },
      { label: "Ancho", value: "430 mm" },
      { label: "Alto", value: "860 mm" },
      { label: "Altura del asiento", value: "430 mm" },
      { label: "Ancho del asiento", value: "380 mm" },
      { label: "Profundidad del asiento", value: "460 mm" },
      { label: "Altura del espaldar", value: "390 mm" },
      { label: "Ancho del espaldar", value: "430 mm" },
      { label: "Diámetro base", value: "380 mm" },
      { label: "Peso máximo soportado", value: "80 kg" },
    ],
  },

  {
    id: 5,
    name: "Poltrona Volga Interlocutora",
    category: "Visita",
    image: volgaPoltronaImg,
    description:
      "Asiento inyectado en polipropileno. Sujeción mediante tornillos inferiores. Estructura 4 patas metálicas en tubería cold rolled con textura en madera y tapones antideslizantes. En colores blanco y negro.",
    specifications: [
      { label: "Profundidad", value: "44 cm" },
      { label: "Ancho", value: "54.5 cm" },
      { label: "Alto", value: "79.5 cm" },
      { label: "Altura del asiento", value: "4 cm" },
      { label: "Ancho del asiento", value: "47 cm" },
      { label: "Profundidad del asiento", value: "44 cm" },
      { label: "Altura del espaldar", value: "44 cm" },
      { label: "Ancho del espaldar", value: "54.5 cm" },
      { label: "Diámetro base", value: "47 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 6,
    name: "Silla Brew Interlocutora",
    category: "Visita",
    image: brewImg,
    description:
      "Asiento y espaldar tapizado en tela de poliéster de color gris. Estructura metálica de color negro con patas en madera. Tapizada en tela de poliéster.",
    specifications: [
      { label: "Profundidad", value: "450 mm" },
      { label: "Ancho", value: "580 mm" },
      { label: "Alto", value: "760 mm" },
      { label: "Altura del asiento", value: "430 mm" },
      { label: "Ancho del asiento", value: "550 mm" },
      { label: "Profundidad del asiento", value: "450 mm" },
      { label: "Altura del espaldar", value: "430 mm" },
      { label: "Ancho del espaldar", value: "330 mm" },
      { label: "Diámetro base", value: "550 mm" },
      { label: "Peso máximo soportado", value: "80 kg" },
    ],
  },

  {
    id: 7,
    name: "Silla Pinko Interlocutora",
    category: "Visita",
    image: pinkoImg,
    description:
      "Estructura espaldar y asiento inyectados en PP. Espaldar en malla. Asiento acolchado tapizado en paño. Patas metálicas cromadas. Brazos fijos en PP. En colores negro, blanco y gris.",
    specifications: [
      { label: "Profundidad", value: "45 cm" },
      { label: "Ancho", value: "59.5 cm" },
      { label: "Alto", value: "84 cm" },
      { label: "Altura del asiento", value: "28 cm" },
      { label: "Ancho del asiento", value: "42 cm" },
      { label: "Profundidad del asiento", value: "45 cm" },
      { label: "Altura del espaldar", value: "39 cm" },
      { label: "Ancho del espaldar", value: "40 cm" },
      { label: "Diámetro base", value: "42 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 8,
    name: "Silla Movie Plástica",
    category: "Visita",
    image: movieImg,
    description:
      "Espaldar inyectado en PP con microperforaciones. Asiento inyectado en PP, con opción de entrega listo para tapizar o tapizado. Metálica cromada y metálica negra. Estructura metálica cold rolled negra en pintura electrostática. Patas tipo Italia con niveladores de superficie. Disponible en 2, 3 y 4 puestos. En colores negro y gris.",
    specifications: [
      { label: "Profundidad", value: "40.5 cm" },
      { label: "Ancho", value: "42 cm" },
      { label: "Alto", value: "830 mm" },
      { label: "Altura del asiento", value: "47 cm" },
      { label: "Ancho del asiento", value: "42 cm" },
      { label: "Profundidad del asiento", value: "40.5 cm" },
      { label: "Altura del espaldar", value: "41 cm" },
      { label: "Ancho del espaldar", value: "42 cm" },
      { label: "Diámetro base", value: "42 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 9,
    name: "Silla Foldy Universitaria",
    category: "SUM",
    image: foldyImg,
    description:
      "Espaldar y asiento inyectados en PP. Espaldar tapizado en malla microperforada. Asiento tapizado en malla microperforada negra, con opción a diferentes colores. Patas metálicas cromadas. Brazos fijos con cobertura de PP.",
    specifications: [
      { label: "Profundidad", value: "45 cm" },
      { label: "Ancho", value: "44 cm" },
      { label: "Alto", value: "82 cm" },
      { label: "Altura del asiento", value: "45 cm" },
      { label: "Ancho del asiento", value: "44 cm" },
      { label: "Profundidad del asiento", value: "45 cm" },
      { label: "Altura del espaldar", value: "41 cm" },
      { label: "Ancho del espaldar", value: "44 cm" },
      { label: "Diámetro base", value: "45 cm" },
      { label: "Peso máximo soportado", value: "80 kg" },
    ],
  },

  {
    id: 10,
    name: "Silla Fenix Interlocutora",
    category: "Visita",
    image: fenixImg,
    description:
      "Espaldar y asiento inyectados en PP. Espaldar tapizado en malla microperforada. Asiento tapizado en malla microperforada negra, con opción a diferentes colores. Patas metálicas cromadas. Brazos fijos con cobertura de PP.",
    specifications: [
      { label: "Profundidad", value: "38 cm" },
      { label: "Ancho", value: "62 cm" },
      { label: "Alto", value: "84 cm" },
      { label: "Altura del asiento", value: "46 cm" },
      { label: "Ancho del asiento", value: "48 cm" },
      { label: "Profundidad del asiento", value: "38 cm" },
      { label: "Altura del espaldar", value: "44 cm" },
      { label: "Ancho del espaldar", value: "46 cm" },
      { label: "Diámetro base", value: "48 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 11,
    name: "Silla Butterfly Plástica",
    category: "Visita",
    image: butterflyImg,
    description:
      "Espaldar inyectado en PP con microperforaciones. Asiento inyectado en PP, con opción de entrega listo para tapizar o tapizado. Estructura interlocutora cromada. Estructura cajero aluminio o pintura negra. Estructura metálica cold rolled negra en pintura electrostática. Patas tipo Italia con niveladores de superficie. Disponible en 2, 3 y 4 puestos.",
    specifications: [
      { label: "Ancho", value: "48 cm" },
      { label: "Alto", value: "97 cm" },
      { label: "Altura del asiento", value: "85 cm" },
      { label: "Ancho del asiento", value: "370 mm" },
      { label: "Ancho del espaldar", value: "48 cm" },
      { label: "Diámetro base", value: "370 mm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 12,
    name: "Brenda - Silla Interlocutora",
    category: "Visita",
    image: brendaImg,
    description:
      "Estructura metálica cromada. Piezas inyectadas en PP. Tapones antideslizantes. En colores rosado, anaranjado, amarillo, verde, azul, blanco y negro.",
    specifications: [
      { label: "Profundidad", value: "39 cm" },
      { label: "Ancho", value: "40 cm" },
      { label: "Alto", value: "39 cm" },
      { label: "Altura del asiento", value: "79 cm" },
      { label: "Ancho del asiento", value: "45 cm" },
      { label: "Profundidad del asiento", value: "39 cm" },
      { label: "Altura del espaldar", value: "38 cm" },
      { label: "Ancho del espaldar", value: "40 cm" },
      { label: "Diámetro base", value: "45 cm" },
      { label: "Peso máximo soportado", value: "100 kg" },
    ],
  },

  {
    id: 13,
    name: "Alma - Silla Interlocutora",
    category: "Visita",
    image: almaImg,
    description:
      "Asiento y espaldar monopieza inyectada en polipropileno. Estructura en madera de 4 patas con deslizadores plásticos. En colores gris y negro.",
    specifications: [
      { label: "Profundidad", value: "170 mm" },
      { label: "Ancho", value: "500 mm" },
      { label: "Alto", value: "750 mm" },
      { label: "Ancho del asiento", value: "370 mm" },
      { label: "Profundidad del asiento", value: "170 mm" },
      { label: "Altura del espaldar", value: "360 mm" },
      { label: "Ancho del espaldar", value: "500 mm" },
      { label: "Peso máximo soportado", value: "80 kg" },
    ],
  },

  {
    id: 14,
    name: "Volga - Silla Interlocutora",
    category: "Visita",
    image: volgaImg,
    description:
      "Asiento inyectado en polipropileno. Asiento tapizado gris, solo con asiento externo color blanco (opcional). 4 patas metálica en tubería cold rolled con textura en madera y tapones antideslizantes.",
    specifications: [
      { label: "Profundidad", value: "44 cm" },
      { label: "Ancho", value: "54.5 cm" },
      { label: "Alto", value: "79 cm" },
      { label: "Altura del asiento", value: "47 cm" },
      { label: "Ancho del asiento", value: "47 cm" },
      { label: "Profundidad del asiento", value: "44 cm" },
      { label: "Ancho del espaldar", value: "54.5 cm" },
      { label: "Diámetro base", value: "47 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 15,
    name: "Amia - Silla Interlocutora",
    category: "Visita",
    image: amiaImg,
    description:
      "Espaldar tapizado en malla color negro. Asiento con espuma de alta densidad, tapizada en tela crepe color negro. Estructura metálica pintada con acoples en aluminio. Brazos con aplicaciones en PVC.",
    specifications: [
      { label: "Profundidad", value: "46 cm" },
      { label: "Ancho", value: "57.5 cm" },
      { label: "Alto", value: "50 cm" },
      { label: "Altura del asiento", value: "48 cm" },
      { label: "Ancho del asiento", value: "50 cm" },
      { label: "Profundidad del asiento", value: "46 cm" },
      { label: "Altura del espaldar", value: "91.5 cm" },
      { label: "Ancho del espaldar", value: "45 cm" },
      { label: "Diámetro base", value: "50 cm" },
      { label: "Peso máximo soportado", value: "90 kg" },
    ],
  },

  {
    id: 16,
    name: "Silla Gerencial Hungría",
    category: "Gerenciales",
    image: hungriaImg,
    description:
      "Accesorio porta saco. Asiento acolchado tapizado en tela negra. Asiento exterior de carcasa plástica. Soporte lumbar 2D regulable en altura y profundidad. Brazos regulables 3D (altura, ángulo y profundidad), con apoyabrazos de poliuretano. Sistema de reclinación Syncro del respaldo con bloqueo en 3 posiciones mediante palanca. Sistema de elevación de altura del asiento mediante pistón neumático. Base de aluminio de 5 puntas modelo Europa con ruedas de poliuretano de doble disco.",
    specifications: [
      { label: "Alto total", value: "103 - 113 cm" },
      { label: "Ancho total", value: "65 cm" },
      { label: "Profundidad total", value: "66 cm" },
      { label: "Altura del respaldo", value: "63 cm" },
      { label: "Ancho del respaldo", value: "51 cm" },
      { label: "Ancho del asiento", value: "50 cm" },
      { label: "Profundidad del asiento", value: "50 cm" },
      { label: "Altura del asiento", value: "43 - 53 cm" },
      { label: "Peso máximo soportado", value: "120 kg" },
    ],
  },

  {
    id: 17,
    name: "Silla Gerencial Bélgica",
    category: "Gerenciales",
    image: belgicaImg,
    description:
      "Espaldar de malla de poliéster con borde de PVC. Asiento interno acolchado tapizado en tela negra. Asiento externo de PVC negro. Sistema de reclinación con un bloqueo. Sistema neumático de elevación de altura mediante pistón a gas. Brazos de PVC en forma de «T» regulables en altura. Apoyo lumbar fijo. Base de nylon de 5 puntos.",
    specifications: [
      { label: "Alto total", value: "110 - 123 cm" },
      { label: "Ancho total", value: "62 cm" },
      { label: "Profundidad total", value: "64 cm" },
      { label: "Altura del respaldo", value: "65 cm" },
      { label: "Ancho del respaldo", value: "55 cm" },
      { label: "Ancho del asiento", value: "55 cm" },
      { label: "Profundidad del asiento", value: "52 cm" },
      { label: "Altura del asiento", value: "50 - 60 cm" },
      { label: "Peso máximo soportado", value: "120 kg" },
    ],
  },
];

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="product-not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/sillas">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="product-detail-page">

      <div className="product-detail-container">

        <Link to="/sillas" className="back-catalog">
          <ArrowLeft size={17} />
          Volver a sillas
        </Link>

        <div className="product-detail-main">

          {/* IMAGEN */}

          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* INFORMACIÓN */}

          <div className="product-detail-info">

            <span className="detail-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="detail-code">
              Código: {product.code}
            </p>

            <p className="detail-description">
              {product.description}
            </p>



            <div className="detail-divider"></div>

            <button className="add-quote-button">
            <ShoppingCart size={19} />
            Agregar a cotización
            </button>

            <p className="quote-message">
            Agrega este producto a tu lista y solicita una
            cotización personalizada por WhatsApp.
            </p>

          </div>

        </div>

        {/* ESPECIFICACIONES */}

        <div className="product-specifications">

          <div>
            <span className="catalog-label">
              INFORMACIÓN DEL PRODUCTO
            </span>

            <h2>Especificaciones</h2>
          </div>

          <div className="specifications-list">
            {product.specifications.map((specification) => (
              <div
                className="specification-item"
                key={`${specification.label}-${specification.value}`}
              >
                <span>{specification.label}</span>
                <strong>{specification.value}</strong>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetail;
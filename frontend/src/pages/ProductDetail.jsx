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
    code: "SP01",
    category: "Visita",
    image: pissaImg,

    description:
      "Estructura cromada. Espaldar en malla. Asiento acolchado tapizado en tela de paño. Patas metálicas cromadas. Brazos fijos en PP.",

    specifications: [
      "Profundidad: 490 mm",
      "Ancho: 490 mm",
      "Alto: 490 mm",
      "Altura del asiento: 450 mm",
      "Ancho del asiento: 470 mm",
      "Profundidad del asiento: 490 mm",
      "Altura del espaldar: 430 mm",
      "Ancho del espaldar: 460 mm",
      "Diámetro base: 470 mm",
      "Peso máximo soportado: 90 kg",
    ],
  },

  {
    id: 2,
    name: "Silla Turia Interlocutora",
    code: "ST-002",
    category: "Visita",
    image: turiaImg,

    description:
      "Asiento y espaldar en monopieza inyectada en polipropileno. Estructura en madera de cuatro patas con deslizadores plásticos.",

    features: [
      "Asiento y espaldar de polipropileno",
      "Estructura de madera de 4 patas",
      "Deslizadores plásticos",
      "Disponible en diferentes colores",
    ],

    specifications: [
      "Profundidad: 430 mm",
      "Ancho: 470 mm",
      "Alto: 795 mm",
      "Altura del asiento: 420 mm",
      "Ancho del asiento: 450 mm",
      "Peso máximo soportado: 80 kg",
    ],
  },

  {
    id: 3,
    name: "Silla Vigo CB Universitaria",
    code: "CB01",
    category: "SUM",
    image: vigoImg,

    description:
      "Espaldar con un marco perimetral en polipropileno, tapizado en malla. Asiento abatible en tela de malla color negro. Estructura cromada en tubo ovalado, apilable en forma horizontal. Brazos en polipropileno fijos. Tablero antipánico de escritura de 30 cm de ancho por 36 cm de largo, con portavasos.",

    specifications: [
      "Profundidad: 450 mm",
      "Ancho: 440 mm",
      "Alto: 820 mm",
      "Altura del asiento: 450 mm",
      "Ancho del asiento: 440 mm",
      "Profundidad del asiento: 450 mm",
      "Altura del espaldar: 410 mm",
      "Ancho del espaldar: 440 mm",
      "Diámetro base: 440 mm",
      "Peso máximo soportado: 90 kg",
    ],
  },

  {
    id: 4,
    name: "Silla Nordic Interlocutora",
    code: "SN01",
    category: "Visita",
    image: nordicImg,

    description:
      "Monopieza inyectada en polipropileno con asiento interno acolchado tapizado en cuerina. Estructura de madera de 4 patas con refuerzos metálicos pintados en color negro y deslizadores plásticos. Disponible en color negro, blanco y gris.",

    specifications: [
      "Profundidad: 460 mm",
      "Ancho: 430 mm",
      "Alto: 860 mm",
      "Altura del asiento: 430 mm",
      "Ancho del asiento: 380 mm",
      "Profundidad del asiento: 460 mm",
      "Altura del espaldar: 390 mm",
      "Ancho del espaldar: 430 mm",
      "Diámetro base: 380 mm",
      "Peso máximo soportado: 80 kg",
    ],
  },
  {
  id: 5,
  name: "Poltrona Volga Interlocutora",
  code: "PV-005",
  category: "Visita",
  image: volgaPoltronaImg,
  description:
    "Silla interlocutora diseñada para brindar comodidad y funcionalidad en oficinas, salas de espera y espacios de atención.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 6,
  name: "Silla Brew Interlocutora",
  code: "SB-006",
  category: "Visita",
  image: brewImg,
  description:
    "Silla interlocutora de diseño funcional, ideal para oficinas, salas de reunión y espacios de atención.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 7,
  name: "Silla Pinko Interlocutora",
  code: "SP-007",
  category: "Visita",
  image: pinkoImg,
  description:
    "Silla interlocutora diseñada para espacios de oficina, recepción y reuniones, combinando comodidad y funcionalidad.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 8,
  name: "Silla Movie Plástica",
  code: "SM-008",
  category: "Visita",
  image: movieImg,
  description:
    "Silla plástica práctica y funcional, adecuada para diferentes ambientes y espacios de uso frecuente.",
  specifications: [
    "Tipo: Silla plástica",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 9,
  name: "Silla Foldy Universitaria",
  code: "SF-009",
  category: "SUM",
  image: foldyImg,
  description:
    "Silla universitaria diseñada para aulas, capacitaciones y espacios educativos, ofreciendo practicidad y comodidad.",
  specifications: [
    "Tipo: Universitaria",
    "Uso: Educativo",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 10,
  name: "Silla Fenix Interlocutora",
  code: "SF-010",
  category: "Visita",
  image: fenixImg,
  description:
    "Silla interlocutora funcional para oficinas, salas de espera y espacios de reunión.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 11,
  name: "Silla Butterfly Plástica",
  code: "SB-011",
  category: "Visita",
  image: butterflyImg,
  description:
    "Silla plástica de diseño moderno y versátil, adecuada para diferentes tipos de ambientes.",
  specifications: [
    "Tipo: Silla plástica",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 12,
  name: "Brenda - Silla Interlocutora",
  code: "SB-012",
  category: "Visita",
  image: brendaImg,
  description:
    "Silla interlocutora de diseño moderno, ideal para oficinas, salas de reunión y espacios de atención.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 13,
  name: "Alma - Silla Interlocutora",
  code: "SA-013",
  category: "Visita",
  image: almaImg,
  description:
    "Silla interlocutora versátil para oficinas y espacios de reunión, diseñada para brindar comodidad y funcionalidad.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 14,
  name: "Volga - Silla Interlocutora",
  code: "SV-014",
  category: "Visita",
  image: volgaImg,
  description:
    "Silla interlocutora de estilo moderno, adecuada para oficinas, reuniones y espacios de atención.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 15,
  name: "Amia - Silla Interlocutora",
  code: "SA-015",
  category: "Visita",
  image: amiaImg,
  description:
    "Silla interlocutora diseñada para brindar comodidad en oficinas, salas de espera y espacios corporativos.",
  specifications: [
    "Tipo: Interlocutora",
    "Uso: Interior",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 16,
  name: "Silla Gerencial Hungría",
  code: "SGH-016",
  category: "Gerenciales",
  image: hungriaImg,
  description:
    "Silla gerencial diseñada para espacios de trabajo, con enfoque en comodidad y soporte durante la jornada laboral.",
  specifications: [
    "Tipo: Gerencial",
    "Uso: Oficina",
    "Información técnica disponible próximamente.",
  ],
},
{
  id: 17,
  name: "Silla Gerencial Bélgica",
  code: "SGB-017",
  category: "Gerenciales",
  image: belgicaImg,
  description:
    "Silla gerencial para oficinas y espacios ejecutivos, diseñada para ofrecer comodidad durante jornadas de trabajo.",
  specifications: [
    "Tipo: Gerencial",
    "Uso: Oficina",
    "Información técnica disponible próximamente.",
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
              <p key={specification}>
                {specification}
              </p>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetail;
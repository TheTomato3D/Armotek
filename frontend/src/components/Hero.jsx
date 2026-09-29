import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Mayor comodidad",
    subtitle: "en cada jornada",
    description:
      "Sillas ergonómicas para un trabajo más productivo y saludable.",
  },
  {
    image: hero2,
    title: "Espacios que inspiran",
    subtitle: "grandes ideas",
    description:
      "Mobiliario funcional y moderno para oficinas y empresas.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero" id="inicio">

      {/* IZQUIERDA */}

      <div className="hero-content">
        <p className="hero-label">ARMOTEK</p>

        <h1>
          Diseña espacios que
          <span> inspiran.</span>
        </h1>

        <p className="hero-description">
          Sillas ergonómicas y mobiliario para oficinas,
          empresas y espacios de trabajo.
        </p>

        <div className="hero-buttons">
          <a href="#catalogo" className="btn-primary">
            Ver catálogo →
          </a>

          <a
            href="https://wa.me/51951155065"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>

      {/* CARRUSEL */}

      <div className="hero-slider">

        <img
          src={slide.image}
          alt={slide.title}
          className="hero-slider-image"
        />

        <div className="hero-slider-overlay"></div>

        <div className="slider-text">
          <h2>{slide.title}</h2>
          <h3>{slide.subtitle}</h3>
          <p>{slide.description}</p>
        </div>

        <button
          className="slider-arrow slider-arrow-left"
          onClick={previousSlide}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          className="slider-arrow slider-arrow-right"
          onClick={nextSlide}
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={25} />
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${
                currentSlide === index ? "active" : ""
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
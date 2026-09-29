import { Users, Target, Gem } from "lucide-react";
import nosotrosImg from "../assets/images/nosotros.jpg";

function About() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-container">

        <div className="about-info">
          <div className="section-heading about-heading">
            <span>QUIÉNES SOMOS</span>

            <h2>
              Impulsamos mejores
              <br />
              espacios de trabajo
            </h2>

            <p>
              En ARMOTEK nos especializamos en sillas ergonómicas y
              mobiliario para oficinas, empresas y espacios de trabajo,
              ofreciendo productos de calidad, funcionales y con diseño
              moderno.
            </p>
          </div>

          <div className="about-values">
            <article className="about-item">
              <div className="about-icon">
                <Users size={25} />
              </div>

              <h3>Nuestra misión</h3>

              <p>
                Brindar soluciones de mobiliario que mejoren la
                productividad y el bienestar de nuestros clientes.
              </p>
            </article>

            <article className="about-item">
              <div className="about-icon">
                <Target size={25} />
              </div>

              <h3>Nuestra visión</h3>

              <p>
                Ser una marca referente en mobiliario de oficina,
                reconocida por la calidad, innovación y atención al cliente.
              </p>
            </article>

            <article className="about-item">
              <div className="about-icon">
                <Gem size={25} />
              </div>

              <h3>Nuestros valores</h3>

              <p>
                Calidad, compromiso, innovación y orientación al cliente.
              </p>
            </article>
          </div>
        </div>

        <div className="about-image">
          <img
            src={nosotrosImg}
            alt="Mobiliario de oficina ARMOTEK"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
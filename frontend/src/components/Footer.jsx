import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* EMPRESA */}
        <div className="footer-brand">
          <h2>
            ARMO<span>TEK</span>
          </h2>

          <p>
            Sillas ergonómicas y mobiliario para oficina,
            hogar y proyectos corporativos.
          </p>
        </div>

        {/* PRODUCTOS */}
        <div>
          <h3>Productos</h3>

          <Link to="/sillas">Sillas</Link>
          <Link to="/muebles">Muebles</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/liquidacion">Liquidación</Link>
        </div>

        {/* POLÍTICAS */}
        <div>
          <h3>Políticas y condiciones</h3>

          <Link to="/terminos-condiciones">
            Términos y condiciones
          </Link>

          <Link to="/devoluciones">
            Términos de devoluciones
          </Link>

          <Link to="/envios">
            Política de envíos
          </Link>

          <Link to="/privacidad">
            Política de privacidad
          </Link>

          <Link to="/garantias">
            Política de garantías
          </Link>
        </div>

        {/* CONTACTO */}
        <div>
          <h3>Contacto</h3>

          <p>+51 951 155 065</p>
          <p>ventas@armotek.pe</p>

          <p>
            Av. El Sol, Calle 9 LT. 10B MZ. I1
            <br />
            Villa El Salvador
          </p>
        </div>

        {/* REDES */}
        <div>
          <h3>Síguenos</h3>

          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 ARMOTEK</span>
        <span>RUC: 20601206154</span>
      </div>
    </footer>
  );
}

export default Footer;
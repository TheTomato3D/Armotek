import { MapPin, Phone, Wallet } from "lucide-react";

const mapUrl = "https://maps.app.goo.gl/FnSbLpLfhsyvweRW7";
const mapEmbedUrl =
  "https://maps.google.com/maps?q=Av.%20El%20Sol%2C%20Calle%209%20LT.%2010B%20MZ.%20I1%2C%20Villa%20El%20Salvador%2C%20Lima&output=embed";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-tiktok-icon">
      <path d="M19.6 7.2a6.7 6.7 0 0 1-4.1-1.4v8.5a6.3 6.3 0 1 1-5.4-6.2v3.5a2.8 2.8 0 1 0 1.9 2.7V2.5h3.5c.2 2.1 1.7 3.9 4.1 4.2v.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-brand-icon">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.7" r="1.2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-brand-icon">
      <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>ARMOTEK</h2>
          <p>
            Sillas ergonómicas y mobiliario para oficina, hogar y proyectos
            corporativos.
          </p>
          <div className="footer-socials">
            <h3>Redes sociales</h3>
            <a href="https://www.instagram.com/armotek.pe/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/armotek.pe/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon /> <span>Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@armotek.pe" target="_blank" rel="noopener noreferrer">
              <TikTokIcon /> <span>TikTok</span>
            </a>
          </div>
        </div>

        <div className="footer-map">
          <h3><MapPin size={17} /> Encuéntranos</h3>
          <iframe
            title="Ubicación de Armotek en Villa El Salvador"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps
          </a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <a href="tel:+51951155065">
            <Phone size={16} /> +51 951 155 065
          </a>
          <a href="tel:+51940314394">
            <Phone size={16} /> +51 940 314 394
          </a>
          <a href="mailto:ventas@armotek.pe">ventas@armotek.pe</a>
          <p>Av. El Sol, Calle 9 LT. 10B MZ. I1, Villa El Salvador</p>
        </div>
      </div>

      <div className="footer-business-info">
        <div>
          <Wallet size={22} />
          <span>Cuenta bancaria</span>
          <strong>Información por confirmar</strong>
        </div>
        <div>
          <span>RUC</span>
          <strong>20601206154</strong>
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

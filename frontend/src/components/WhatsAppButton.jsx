import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phone = "51951155065";
  const message = "Hola, quisiera solicitar información sobre sus productos.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contáctanos por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsAppButton;

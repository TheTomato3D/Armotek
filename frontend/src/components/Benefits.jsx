import {
  Truck,
  BadgeCheck,
  Headphones,
  MessageCircle,
} from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: <Truck />,
      title: "Envíos a nivel nacional",
      text: "Despachamos nuestros productos a todo el Perú.",
    },
    {
      icon: <BadgeCheck />,
      title: "Productos garantizados",
      text: "Calidad y respaldo en nuestros productos.",
    },
    {
      icon: <MessageCircle />,
      title: "Compra sencilla",
      text: "Selecciona tus productos y solicita tu cotización.",
    },
    {
      icon: <Headphones />,
      title: "Atención personalizada",
      text: "Te asesoramos para encontrar la mejor solución.",
    },
  ];

  return (
    <section className="benefits">
      {benefits.map((benefit) => (
        <article className="benefit" key={benefit.title}>
          <div className="benefit-icon">{benefit.icon}</div>

          <div>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Benefits;
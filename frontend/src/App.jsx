import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Chairs from "./pages/Chairs";
import ProductDetail from "./pages/ProductDetail";

import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Warranty from "./pages/Warranty";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sillas" element={<Chairs />} />
          <Route path="/sillas/:id" element={<ProductDetail />} />

          <Route path="/terminos-condiciones" element={<Terms />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="/envios" element={<Shipping />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/garantias" element={<Warranty />} />
        </Routes>

        <WhatsAppButton />
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
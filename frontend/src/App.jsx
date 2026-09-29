import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Chairs from "./pages/Chairs";
import Furniture from "./pages/Furniture";
import Offers from "./pages/Offers";
import Clearance from "./pages/Clearance";
import Cart from "./pages/Cart";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Warranty from "./pages/Warranty";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";



function App() {
  return (
    <BrowserRouter basename="/Armotek">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sillas" element={<Chairs />} />
          <Route path="/muebles" element={<Furniture />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/liquidacion" element={<Clearance />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/terminos-condiciones" element={<Terms />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="/envios" element={<Shipping />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/garantias" element={<Warranty />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/garantias" element={<Warranty />} />
          <Route path="/terminos-condiciones" element={<Terms />} />
          <Route path="/devoluciones" element={<Returns />} />
          <Route path="/envios" element={<Shipping />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/garantias" element={<Warranty />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
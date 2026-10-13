import Hero from "../components/Hero";
import About from "../components/About";
import Chairs from "./Chairs";
import Benefits from "../components/Benefits";

function Home() {
  return (
    <>
      <Hero />
      <About />

      <div id="catalogo">
        <Chairs />
      </div>

      <Benefits />
    </>
  );
}

export default Home;
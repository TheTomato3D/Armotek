import Hero from "../components/Hero";
import Chairs from "./Chairs";
import Benefits from "../components/Benefits";

function Home() {
  return (
    <>
      <Hero />

      <div id="catalogo">
        <Chairs />
      </div>

      <Benefits />
    </>
  );
}

export default Home;
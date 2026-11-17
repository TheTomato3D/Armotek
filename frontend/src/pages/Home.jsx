import Chairs from "./Chairs";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div id="catalogo">
        <Chairs />
      </div>
    </>
  );
}

export default Home;

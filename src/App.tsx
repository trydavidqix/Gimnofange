import Header from "./assets/components/Header";
import Hero from "./assets/pages/Hero";
import Sobre from "./assets/pages/Sobre";
import Aulas from "./assets/pages/Aulas";
import Precos from "./assets/pages/Precos";
import CaloriasCalculadora from "./assets/components/CaloriasCalculadora";
import Contacto from "./assets/pages/Contacto";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Sobre />
      <Aulas />
      <Precos />
      <CaloriasCalculadora />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;

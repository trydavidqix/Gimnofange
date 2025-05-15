import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import CountUp from "../components/CountUp";
import RotatingText from "../components/RotatingText";
import heroImg from "../images/hero/photo-1593079831268-3381b0db4a77.avif";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-black overflow-hidden"
    >
      <Helmet>
        <title>Gimnofange - Transforme seu corpo</title>
        <meta
          name="description"
          content="Descubra como transformar seu corpo, mente e hábitos na Gimnofange. Mais do que um ginásio, um estilo de vida."
        />
        <meta property="og:title" content="Gimnofange - Transforme seu corpo" />
        <meta
          property="og:description"
          content="Descubra como transformar seu corpo, mente e hábitos na Gimnofange. Mais do que um ginásio, um estilo de vida."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://gimnofange.pt/" />
        <meta
          property="og:image"
          content="/public/icon/android-chrome-512x512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gimnofange - Transforme seu corpo"
        />
        <meta
          name="twitter:description"
          content="Descubra como transformar seu corpo, mente e hábitos na Gimnofange. Mais do que um ginásio, um estilo de vida."
        />
        <meta
          name="twitter:image"
          content="/public/icon/android-chrome-512x512.png"
        />
        <link rel="canonical" href="https://gimnofange.pt/" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="Gimnofange" />
        <meta name="language" content="pt-BR" />
      </Helmet>
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Gym background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>{" "}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 relative z-10">
        {" "}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 sm:mb-12 md:mb-0">
            <h2 className="text-red-600 uppercase font-bold tracking-wider text-sm sm:text-base mb-3 sm:mb-4">
              Mais do que um ginásio
            </h2>{" "}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              TRANSFORME <br />
              <div className="relative inline-block text-red-600">
                <RotatingText
                  texts={[
                    "SEU CORPO",
                    "SEU FOCO",
                    "SUA DISCIPLINA",
                    "SEUS HÁBITOS",
                    "SUA ROTINA",
                    "O JEITO QUE VOCÊ VIVE",
                    "CADA DECISÃO",
                  ]}
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  mainClassName="min-w-0 inline-block"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />{" "}
              </div>
              <br />E SUA VIDA
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-md">
              Na <strong className="text-white">Gimnofange</strong>, oferecemos
              equipamentos de ponta, treinadores qualificados e um ambiente
              motivador para ajudá-lo a alcançar seus objetivos.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button variant="primary" size="lg" href="#aulas">
                COMEÇAR AGORA
              </Button>
              <Button variant="outline" size="lg" href="#contacto">
                CONTACTE-NOS
              </Button>
            </div>
          </div>{" "}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-neutral-900/80 p-4 sm:p-5 md:p-6 rounded-lg border border-red-600/30 backdrop-blur-sm">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                  <CountUp to={1200} duration={2.5} separator="," />+
                </p>
                <p className="text-white font-medium uppercase text-xs sm:text-sm">
                  Membros Ativos
                </p>
              </div>
              <div className="bg-neutral-900/80 p-4 sm:p-5 md:p-6 rounded-lg border border-red-600/30 backdrop-blur-sm">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                  <CountUp to={25} duration={1.5} />+
                </p>
                <p className="text-white font-medium uppercase text-xs sm:text-sm">
                  Professores
                </p>
              </div>{" "}
              <div className="bg-neutral-900/80 p-4 sm:p-5 md:p-6 rounded-lg border border-red-600/30 backdrop-blur-sm">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                  <CountUp to={40} duration={2} />+
                </p>
                <p className="text-white font-medium uppercase text-xs sm:text-sm">
                  Programas
                </p>
              </div>
              <div className="bg-neutral-900/80 p-4 sm:p-5 md:p-6 rounded-lg border border-red-600/30 backdrop-blur-sm">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-1 sm:mb-2">
                  <CountUp to={10} duration={1} />+
                </p>
                <p className="text-white font-medium uppercase text-xs sm:text-sm">
                  Anos de Exp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

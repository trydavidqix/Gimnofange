import musculacaoImg from "../images/musculacao/photo-1534438327276-14e5300c3a48.avif";
import cardioImg from "../images/cardio/photo-1607962837359-5e7e89f86776.avif";
import heroImg1 from "../images/hero/photo-1548690312-e3b507d8c110.avif";
import heroImg2 from "../images/hero/photo-1571902943202-507ec2618e8f.avif";
import Button from "../components/Button";

const Sobre = () => {
  const destaques = [
    "Equipamentos modernos e de alta qualidade",
    "Equipa de profissionais certificados",
    "Sauna e área de relaxamento",
    "Estacionamento gratuito",
    "Plano nutricional personalizado",
    "Acompanhamento individual",
  ];
  return (
    <section
      id="sobre"
      className="bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-600/5 to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/3 blur-3xl"></div>
      <div className="absolute bottom-12 -left-24 w-72 h-72 rounded-full bg-red-600/3 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-auto text-neutral-900/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".3"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-red-600 uppercase font-bold tracking-wider text-sm sm:text-base mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            MAIS QUE UM GINÁSIO, <br className="sm:hidden" />{" "}
            <span className="text-red-600">UM ESTILO DE VIDA</span>
          </h3>
        </div>{" "}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
            <div className="hidden sm:block absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border-l-2 border-t-2 border-red-600 z-10"></div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border-r-2 border-b-2 border-red-600 z-10"></div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={musculacaoImg}
                  alt="Academia"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={heroImg1}
                  alt="Academia"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>{" "}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 md:pt-8">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={cardioImg}
                  alt="Academia"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={heroImg2}
                  alt="Academia"
                  className="w-full h-40 sm:h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>{" "}
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              Desde <span className="text-red-600">2010</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Transformando <span className="text-red-600">Vidas</span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Fundada em 2010, a Gimnofange nasceu com a missão de proporcionar
              um espaço onde todas as pessoas podem transformar seus corpos e
              mentes através do exercício físico e de um estilo de vida
              saudável.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
              Com mais de{" "}
              <span className="text-white font-semibold">
                1200 membros ativos
              </span>
              , temos orgulho de criar uma comunidade vibrante onde cada pessoa
              é valorizada e incentivada a alcançar o seu melhor.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {destaques.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" href="#contacto">
              Conhecer a Academia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

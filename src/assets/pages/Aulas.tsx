import musculacaoImg from "../images/musculacao/photo-1534438327276-14e5300c3a48.avif";
import cardioImg from "../images/cardio/photo-1607962837359-5e7e89f86776.avif";
import pilatesImg from "../images/pilates/photo-1717500252573-d31d4bf5ddf1.avif";
import defesaPessoalImg from "../images/boxe/photo-1517438322307-e67111335449.avif";
import Button from "../components/Button";
import TiltedCard from "../components/TiltedCard";
import RotatingText from "../components/RotatingText";

const Aulas = () => {
  const aulas = [
    {
      titulo: "Musculação",
      descricao:
        "Treinos personalizados para ganho de massa muscular e definição.",
      duracao: "60 min",
      imagem: musculacaoImg,
    },
    {
      titulo: "Cardio HIIT",
      descricao:
        "Treino intervalado de alta intensidade para queima de gordura máxima.",
      duracao: "45 min",
      imagem: cardioImg,
    },
    {
      titulo: "Pilates",
      descricao:
        "Melhore a flexibilidade, postura e fortaleça o core com exercícios controlados.",
      duracao: "50 min",
      imagem: pilatesImg,
    },
    {
      titulo: "Boxe",
      descricao:
        "Aprenda técnicas eficazes de autodefesa e aumente sua confiança.",
      duracao: "60 min",
      imagem: defesaPessoalImg,
    },
  ];
  return (
    <section
      id="aulas"
      className="py-12 sm:py-16 md:py-24 bg-neutral-900 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-600/5 to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/3 blur-3xl"></div>{" "}
      <div className="absolute bottom-12 -left-24 w-72 h-72 rounded-full bg-red-600/3 blur-3xl"></div>{" "}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-auto text-black/50"
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
      </div>{" "}
      <div className="container mx-auto relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-red-600 uppercase font-bold tracking-wider text-sm sm:text-base mb-3 sm:mb-4">
            Nossas aulas
          </h2>{" "}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            TREINE{" "}
            <span className="text-red-600">
              <RotatingText
                texts={[
                  "COMO QUISER",
                  "COM QUEM QUISER",
                  "A HORA QUE QUISER",
                  "DO SEU JEITO",
                  "SEM DESCULPAS",
                  "POR VOCÊ",
                ]}
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                mainClassName="inline-block"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4000}
              />
            </span>
          </h3>{" "}
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Descubra uma variedade de aulas desenhadas para todos os níveis de
            condicionamento físico, ministradas por profissionais experientes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {aulas.map((aula, index) => (
            <div
              key={index}
              className="bg-black group rounded-lg overflow-hidden border border-neutral-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="h-48 sm:h-56 md:h-64 mb-4">
                <TiltedCard
                  imageSrc={aula.imagem}
                  altText={aula.titulo}
                  captionText={aula.titulo}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="250px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>{" "}
              <div className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-600 transition-colors">
                  {aula.titulo}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                  {aula.descricao}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Mais Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="mt-10 sm:mt-16 text-center">
          <Button variant="primary" size="lg" href="#contacto">
            VER HORÁRIO COMPLETO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Aulas;

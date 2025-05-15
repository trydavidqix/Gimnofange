import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
const planos = [
  {
    nome: "Básico",
    descricao: "Perfeito para quem está a começar",
    preco: "29,99€",
    periodo: "por mês",
    beneficios: [
      "Acesso à área de musculação",
      "Horário limitado (8h às 16h)",
      "Sem acesso às aulas em grupo",
      "Cacifos partilhados",
    ],
    destaque: false,
    botao: "Inscrever-se",
  },
  {
    nome: "Premium",
    descricao: "O nosso plano mais popular",
    preco: "49,99€",
    periodo: "por mês",
    beneficios: [
      "Acesso 24/7 à academia",
      "Todas as aulas em grupo incluídas",
      "Avaliação física mensal",
      "Cacifo pessoal",
      "Acesso à sauna e áreas de relaxamento",
    ],
    destaque: true,
    botao: "Começar Agora",
  },
  {
    nome: "Elite",
    descricao: "Para quem quer resultados máximos",
    preco: "79,99€",
    periodo: "por mês",
    beneficios: [
      "Todos os benefícios do plano Premium",
      "4 sessões mensais com personal trainer",
      "Plano nutricional personalizado",
      "Área VIP e estacionamento reservado",
      "Tratamentos de recuperação muscular",
    ],
    destaque: false,
    botao: "Inscrever-se",
  },
];
const Precos = () => {
  return (
    <section
      id="precos"
      className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6 relative overflow-hidden"
    >
      <Helmet>
        <title>Planos e Preços - Gimnofange</title>
        <meta
          name="description"
          content="Confira os planos, preços e benefícios da Gimnofange. Escolha o melhor para você!"
        />
        <meta property="og:title" content="Planos e Preços - Gimnofange" />
        <meta
          property="og:description"
          content="Confira os planos, preços e benefícios da Gimnofange. Escolha o melhor para você!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://gimnofange.pt/precos" />
        <meta
          property="og:image"
          content="/public/icon/android-chrome-512x512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Planos e Preços - Gimnofange" />
        <meta
          name="twitter:description"
          content="Confira os planos, preços e benefícios da Gimnofange. Escolha o melhor para você!"
        />
        <meta
          name="twitter:image"
          content="/public/icon/android-chrome-512x512.png"
        />
        <link rel="canonical" href="https://gimnofange.pt/precos" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="Gimnofange" />
        <meta name="language" content="pt-BR" />
      </Helmet>
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
            Planos e preços
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            INVISTA NO SEU <span className="text-red-600">FUTURO</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Escolha o plano que melhor se adapta aos seus objectivos e ao seu
            orçamento. Todos os planos incluem acesso à nossa instalação de
            última geração.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`rounded-xl p-1 ${
                plano.destaque
                  ? "bg-gradient-to-br from-red-500 to-red-700"
                  : "bg-neutral-800"
              }`}
            >
              <div className="bg-neutral-900 rounded-lg p-6 sm:p-8 h-full flex flex-col">
                <div className="mb-6 sm:mb-8">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      plano.destaque ? "text-red-500" : "text-white"
                    } mb-1 sm:mb-2`}
                  >
                    {plano.nome}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                    {plano.descricao}
                  </p>
                  <div className="flex items-baseline mb-1">
                    <span
                      className={`text-3xl sm:text-4xl font-bold ${
                        plano.destaque ? "text-red-500" : "text-white"
                      }`}
                    >
                      {plano.preco}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {plano.periodo}
                  </span>
                </div>{" "}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plano.beneficios.map((beneficio, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          plano.destaque ? "text-red-500" : "text-gray-400"
                        } mt-1 flex-shrink-0`}
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
                      <span className="text-gray-300 text-sm sm:text-base">
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant={plano.destaque ? "primary" : "outline"}
                  size="md"
                  className="w-full mt-auto"
                >
                  {plano.botao}
                </Button>
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="mt-10 sm:mt-16 text-center max-w-3xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Dúvidas sobre os nossos planos?
          </h4>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
            Entre em contacto connosco para saber mais sobre os nossos planos ou
            para agendar uma visita guiada às nossas instalações.
          </p>
          <Button variant="outline" size="lg" href="#contacto">
            CONTACTE-NOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Precos;

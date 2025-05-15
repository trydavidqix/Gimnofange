const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
              <span className="text-red-600">G</span>IMNOFANGE
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Transformando vidas através do fitness e bem-estar desde 2010. A
              sua jornada para um corpo e mente mais saudáveis começa aqui.{" "}
            </p>{" "}
            <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-6">
              <span className="bg-neutral-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </span>
              <span className="bg-neutral-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </span>
              <span className="bg-neutral-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </span>
            </div>
          </div>{" "}
          {/* Seção: Links Rápidos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base"
                >
                  <span className="mr-2"></span> Início
                </a>
              </li>{" "}
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base"
                >
                  <span className="mr-2"></span> Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#aulas"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base"
                >
                  <span className="mr-2"></span> Aulas
                </a>
              </li>
              <li>
                <a
                  href="#precos"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base"
                >
                  <span className="mr-2"></span> Preços
                </a>
              </li>
              <li>
                <a
                  href="#calorias"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base"
                >
                  <span className="mr-2"></span> Calorias
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-red-600 transition-colors flex items-center"
                >
                  <span className="mr-2"></span> Contacto
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* Seção: Serviços */}{" "}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Serviços
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <span className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base cursor-pointer">
                  <span className="mr-2"></span> Musculação
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base cursor-pointer">
                  <span className="mr-2"></span> Personal Training
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base cursor-pointer">
                  <span className="mr-2"></span> Nutrição
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base cursor-pointer">
                  <span className="mr-2"></span> Avaliação Física
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-red-600 transition-colors flex items-center text-sm sm:text-base cursor-pointer">
                  <span className="mr-2"></span> Aulas em Grupo
                </span>
              </li>
            </ul>
          </div>{" "}
          {/* Seção: Horário de Funcionamento */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Horário
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {" "}
              <li className="flex justify-between">
                <span className="text-gray-400 text-sm sm:text-base">
                  Segunda a Sexta:
                </span>
                <span className="text-white text-sm sm:text-base">
                  6h - 23h
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400 text-sm sm:text-base">
                  Sábado:
                </span>
                <span className="text-white text-sm sm:text-base">
                  8h - 20h
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400 text-sm sm:text-base">
                  Domingo:
                </span>
                <span className="text-white text-sm sm:text-base">
                  8h - 20h
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400 text-sm sm:text-base">
                  Feriados:
                </span>
                <span className="text-white text-sm sm:text-base">
                  10h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* Barra de newsletter */}
        <div className="bg-neutral-900 p-6 sm:p-8 mb-10 sm:mb-16 rounded-xl sm:rounded-2xl border border-neutral-800">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                Inscreva-se na nossa newsletter
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Receba novidades, promoções e dicas de saúde
              </p>
            </div>
            <div>
              {" "}
              <form className="flex">
                <input
                  type="email"
                  required
                  placeholder="Seu email"
                  className="flex-grow px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800 text-white rounded-l-lg border border-neutral-700 focus:border-red-600 focus:outline-none text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Inscrever
                </button>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* Seção: Direitos Autorais */}
        <div className="pt-2 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            © 2025 Gimnofange. Todos os direitos reservados.
          </p>{" "}
          <div className="flex justify-center flex-wrap gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2">
            <span className="text-gray-400 hover:text-red-600 transition-colors text-xs sm:text-sm cursor-pointer">
              Termos de Uso
            </span>{" "}
            <span className="text-gray-400 hover:text-red-600 transition-colors text-xs sm:text-sm cursor-pointer">
              Política de Privacidade
            </span>
            <span className="text-gray-400 hover:text-red-600 transition-colors text-xs sm:text-sm cursor-pointer">
              Cookies
            </span>
          </div>{" "}
          <div className="border-t border-neutral-800 pt-8 sm:pt-10 mt-8 sm:mt-10 text-center">
            <p className="text-gray-400 text-xs sm:text-sm my-6 sm:my-8">
              <a
                href="https://github.com/trydavidqix"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                Desenvolvido por David William
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

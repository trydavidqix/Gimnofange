import { useState, useEffect } from "react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 py-2 shadow-xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-extrabold text-white flex items-center"
          >
            <span className="text-red-600">G</span>IMNOFANGE
          </button>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("aulas")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Aulas
            </button>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("calorias")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Calorias
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-white hover:text-red-600 font-medium transition-colors text-sm uppercase"
            >
              Contacto
            </button>

            <Button
              variant="primary"
              size="sm"
              className="ml-4 xl:ml-8"
              onClick={() => scrollToSection("precos")}
            >
              Começar Agora
            </Button>
          </div>

          <div className="hidden md:flex lg:hidden items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection("precos")}
              className="mr-4"
            >
              Começar Agora
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Menu - Updated for better iPad support */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-800 py-5 shadow-lg z-50">
            <div className="container mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4 flex flex-col items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("aulas")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Aulas
              </button>
              <button
                onClick={() => scrollToSection("precos")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("calorias")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Calorias
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-white hover:text-red-600 transition-colors py-2 sm:py-3 text-center text-sm uppercase font-medium"
              >
                Contacto
              </button>
              <div className="pt-3 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                {/* Only show this button on small screens as we have it in the header for tablets */}
                <div className="md:hidden">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => scrollToSection("precos")}
                  >
                    Começar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

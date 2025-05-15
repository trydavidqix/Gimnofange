import { useState } from "react";
import Button from "../components/Button";

const Contacto = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };
  return (
    <section
      id="contacto"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-neutral-900 px-4 sm:px-6 relative overflow-hidden"
    >
      {" "}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-600/5 to-transparent opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/3 blur-3xl"></div>{" "}
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
      </div>{" "}
      <div className="container mx-auto relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-2 sm:px-3 py-1 bg-red-600/10 rounded-full mb-3 sm:mb-4">
            <span className="text-red-600 uppercase font-bold tracking-wider text-xs sm:text-sm">
              Contacto
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            COMECE SUA{" "}
            <span className="text-red-600 relative inline-block">
              JORNADA
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></span>
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Tem dúvidas ou quer saber mais sobre os nossos serviços? Envie-nos
            uma mensagem e responderemos o mais rápido possível.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {" "}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>{" "}
          <div className="relative grid lg:grid-cols-5 gap-0 bg-neutral-900/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/50 shadow-2xl shadow-black/30">
            <div className="lg:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-red-600/10"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-red-600/10"></div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-8 relative inline-block">
                  Fale Connosco
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-1/2 h-1 bg-red-600 rounded-full"></span>
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-10">
                  Estamos sempre disponíveis para responder às suas dúvidas e
                  ajudar na sua jornada fitness.
                </p>
              </div>{" "}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-red-600 p-2 sm:p-3 rounded-xl shadow-lg shadow-red-600/20">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>{" "}
                  <div>
                    <h4 className="font-medium text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                      Localização
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Avenida da República, 123, 1050-056 Lisboa, Portugal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg shadow-red-600/20">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>{" "}
                  <div>
                    <h4 className="font-medium text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                      Telefone
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      +351 210 123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg shadow-red-600/20">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>{" "}
                  <div>
                    <h4 className="font-medium text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                      Email
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      info@gimnofange.pt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg shadow-red-600/20">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>{" "}
                  <div>
                    <h4 className="font-medium text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                      Horário
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Segunda a Sexta: 6h - 23h
                      <br />
                      Sábado e Domingo: 8h - 20h
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-red-600/10 blur-xl"></div>
              <div className="absolute bottom-10 left-20 w-16 h-16 rounded-full bg-red-600/10 blur-xl"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-8 relative inline-block">
                Envie-nos uma Mensagem
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-1/2 h-1 bg-red-600 rounded-full"></span>
              </h3>{" "}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    {" "}
                    <div className="relative group">
                      <input
                        type="text"
                        id="nome"
                        required
                        placeholder=" "
                        className="w-full px-4 pt-5 pb-2 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none peer transition-all duration-200 group-hover:border-neutral-600"
                      />
                      <label
                        htmlFor="nome"
                        className="absolute text-sm text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                      >
                        Nome
                      </label>
                      <div className="absolute inset-0 rounded-xl border border-red-600 opacity-0 scale-95 transition-all duration-200 peer-focus:opacity-100 peer-focus:scale-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        className="w-full px-4 pt-5 pb-2 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none peer transition-all duration-200 group-hover:border-neutral-600"
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                      >
                        Email
                      </label>
                      <div className="absolute inset-0 rounded-xl border border-red-600 opacity-0 scale-95 transition-all duration-200 peer-focus:opacity-100 peer-focus:scale-100 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="relative group">
                    <input
                      type="text"
                      id="assunto"
                      required
                      placeholder=" "
                      className="w-full px-4 pt-5 pb-2 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none peer transition-all duration-200 group-hover:border-neutral-600"
                    />
                    <label
                      htmlFor="assunto"
                      className="absolute text-sm text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      Assunto
                    </label>
                    <div className="absolute inset-0 rounded-xl border border-red-600 opacity-0 scale-95 transition-all duration-200 peer-focus:opacity-100 peer-focus:scale-100 pointer-events-none"></div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="relative group">
                    {" "}
                    <textarea
                      id="mensagem"
                      required
                      rows={4}
                      placeholder=" "
                      className="w-full px-4 pt-5 pb-2 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none peer transition-all duration-200 group-hover:border-neutral-600 resize-none"
                    ></textarea>
                    <label
                      htmlFor="mensagem"
                      className="absolute text-sm text-gray-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-red-600"
                    >
                      Mensagem
                    </label>
                    <div className="absolute inset-0 rounded-xl border border-red-600 opacity-0 scale-95 transition-all duration-200 peer-focus:opacity-100 peer-focus:scale-100 pointer-events-none"></div>
                  </div>{" "}
                </div>
                {formStatus === "success" && (
                  <div className="bg-green-600/20 text-green-400 px-4 py-3 rounded-xl flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Mensagem enviada com sucesso! Entraremos em contacto em
                    breve.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="bg-red-600/20 text-red-400 px-4 py-3 rounded-xl flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Ocorreu um erro ao enviar a mensagem. Tente novamente mais
                    tarde.
                  </div>
                )}
                <div>
                  {" "}
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className={`w-full rounded-xl group relative overflow-hidden ${
                      formStatus === "sending" ? "opacity-80 cursor-wait" : ""
                    }`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute -inset-x-6 -bottom-6 h-6 bg-red-600/20 blur-md transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 group-hover:opacity-100"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-700 to-red-600 scale-[1.01] group-hover:scale-100 group-hover:opacity-90 opacity-0 transition-all duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                      {formStatus === "sending" ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          ENVIANDO...
                        </>
                      ) : (
                        <>
                          <img
                            src="/icon_calc/send.png"
                            alt="Enviar"
                            className="w-5 h-5"
                          />
                          ENVIAR MENSAGEM
                        </>
                      )}
                    </span>
                  </Button>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

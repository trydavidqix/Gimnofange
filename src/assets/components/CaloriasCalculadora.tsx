import { useState } from "react";
import { calcularCalorias } from "../utils/calorias";
import {
  calcularMacronutrientes,
  calcularPotencialMuscular,
  calcularCaloriasPorObjetivo,
} from "../utils/macronutrientes";

type Genero = "masculino" | "feminino";

type ObjetivoType = "manutencao" | "corte" | "bulk";
type NivelAtividade =
  | "sedentario"
  | "leve"
  | "moderado"
  | "intenso"
  | "muito intenso";

type MacrosType = {
  manutencao: {
    calorias: number;
    moderado: { proteina: number; gordura: number; carboidratos: number };
    baixoCarb: { proteina: number; gordura: number; carboidratos: number };
    altoCarb: { proteina: number; gordura: number; carboidratos: number };
  };
  corte: {
    calorias: number;
    moderado: { proteina: number; gordura: number; carboidratos: number };
    baixoCarb: { proteina: number; gordura: number; carboidratos: number };
    altoCarb: { proteina: number; gordura: number; carboidratos: number };
  };
  bulk: {
    calorias: number;
    moderado: { proteina: number; gordura: number; carboidratos: number };
    baixoCarb: { proteina: number; gordura: number; carboidratos: number };
    altoCarb: { proteina: number; gordura: number; carboidratos: number };
  };
};

const CaloriasCalculadora = () => {
  const [formData, setFormData] = useState({
    genero: "masculino" as Genero,
    idade: "",
    peso: "",
    altura: "",
    nivelAtividade: "moderado" as NivelAtividade,
  });

  const [objetivoAtivo, setObjetivoAtivo] = useState<number>(0);
  const [resultado, setResultado] = useState<{
    tmb: number;
    tdee: number;
    potencialMuscular: number;
    macros: MacrosType;
  } | null>(null);

  const [step, setStep] = useState(1);

  const objetivos = [
    { nome: "Manutenção", tipo: "manutencao" as ObjetivoType },
    { nome: "Perda de Peso", tipo: "corte" as ObjetivoType },
    { nome: "Ganho Muscular", tipo: "bulk" as ObjetivoType },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { genero, idade, peso, altura, nivelAtividade } = formData;

    if (!idade || !peso || !altura) return;
    const parsedIdade = parseInt(idade);
    const parsedPeso = parseFloat(peso);
    const parsedAltura = parseFloat(altura);
    const { tmb, tdee } = calcularCalorias({
      genero,
      idade: parsedIdade,
      peso: parsedPeso,
      altura: parsedAltura,
      nivelAtividade,
    });
    calcularPotencialMuscular(parsedAltura);

    const objetivosTipos: ObjetivoType[] = ["manutencao", "corte", "bulk"];
    const macros = objetivosTipos.reduce((acc, objetivo) => {
      const caloriasPorObjetivo = calcularCaloriasPorObjetivo(tdee)[objetivo];

      const moderado = calcularMacronutrientes(caloriasPorObjetivo, "30/35/35");

      const baixoCarb = calcularMacronutrientes(
        caloriasPorObjetivo,
        "40/40/20"
      );

      const altoCarb = calcularMacronutrientes(caloriasPorObjetivo, "30/20/50");

      return {
        ...acc,
        [objetivo]: {
          calorias: Math.round(caloriasPorObjetivo),
          moderado,
          baixoCarb,
          altoCarb,
        },
      };
    }, {} as MacrosType);
    const ffmi = 23;

    setResultado({
      tmb: Math.round(tmb),
      tdee: Math.round(tdee),
      potencialMuscular: ffmi,
      macros,
    });

    setStep(2);
  };

  const resetForm = () => {
    setFormData({
      genero: "masculino",
      idade: "",
      peso: "",
      altura: "",
      nivelAtividade: "moderado",
    });
    setResultado(null);
    setStep(1);
  };
  return (
    <section
      id="calorias"
      className="py-24 bg-gradient-to-b from-black to-neutral-900 px-6 relative overflow-hidden"
    >
      {" "}
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
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-red-600/10 rounded-full mb-4">
            <span className="text-red-600 uppercase font-bold tracking-wider text-sm">
              Calculadora de calorias
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            PLANEIE SUA{" "}
            <span className="text-red-600 relative inline-block">
              NUTRIÇÃO
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></span>
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Use nossa calculadora para estimar suas necessidades calóricas
            diárias e macronutrientes com base no seu objetivo de fitness.
          </p>
        </div>{" "}
        <div className="max-w-4xl mx-auto bg-neutral-900/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-neutral-800/50 shadow-2xl shadow-black/30 relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-xl -translate-y-20 translate-x-20"></div>{" "}
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-xl translate-y-20 -translate-x-20"></div>
          {step === 1 ? (
            <div className="p-10 relative">
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-red-600/10 rounded-full mb-4">
                  <span className="text-red-600 uppercase font-bold tracking-wider text-sm">
                    Informações pessoais
                  </span>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  SEUS{" "}
                  <span className="text-red-600 relative inline-block">
                    DADOS
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></span>
                  </span>
                </h4>
              </div>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="mb-6">
                    <label className="block text-white mb-3 font-medium">
                      Género
                    </label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="genero"
                          value="masculino"
                          checked={formData.genero === "masculino"}
                          onChange={handleChange}
                          className="sr-only"
                        />{" "}
                        <div
                          className={`rounded-xl p-4 flex items-center justify-center transition-all duration-200 ${
                            formData.genero === "masculino"
                              ? "bg-red-600 text-white"
                              : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                          }`}
                        >
                          {" "}
                          <img
                            src="/icon_calc/muscle.png"
                            className="w-6 h-6 mr-2"
                            alt="Masculino"
                          />
                          <span>Masculino</span>
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="genero"
                          value="feminino"
                          checked={formData.genero === "feminino"}
                          onChange={handleChange}
                          className="sr-only"
                        />{" "}
                        <div
                          className={`rounded-xl p-4 flex items-center justify-center transition-all duration-200 ${
                            formData.genero === "feminino"
                              ? "bg-red-600 text-white"
                              : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                          }`}
                        >
                          {" "}
                          <img
                            src="/icon_calc/women.png"
                            className="w-6 h-6 mr-2"
                            alt="Feminino"
                          />
                          <span>Feminino</span>
                        </div>
                      </label>
                    </div>
                  </div>{" "}
                  <div className="mb-6">
                    <label
                      htmlFor="idade"
                      className="block text-white mb-3 font-medium"
                    >
                      Idade (anos)
                    </label>{" "}
                    <div className="relative group">
                      {" "}
                      <input
                        type="number"
                        id="idade"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                        min="15"
                        max="100"
                        placeholder="Digite sua idade"
                        className="w-full px-5 py-3 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all duration-200 group-hover:border-neutral-600 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
                        <img
                          src="/icon_calc/age.png"
                          className="w-10 h-10"
                          alt="Idade"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="peso"
                      className="block text-white mb-3 font-medium"
                    >
                      Peso (kg)
                    </label>
                    <div className="relative group">
                      <input
                        type="number"
                        id="peso"
                        name="peso"
                        value={formData.peso}
                        onChange={handleChange}
                        step="0.1"
                        min="40"
                        max="200"
                        placeholder="Digite seu peso"
                        className="w-full px-5 py-3 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all duration-200 group-hover:border-neutral-600 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
                        <img
                          src="/icon_calc/kg.png"
                          className="w-10 h-10"
                          alt="Peso"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="altura"
                      className="block text-white mb-3 font-medium"
                    >
                      Altura (cm)
                    </label>
                    <div className="relative group">
                      <input
                        type="number"
                        id="altura"
                        name="altura"
                        value={formData.altura}
                        onChange={handleChange}
                        min="140"
                        max="220"
                        placeholder="Digite sua altura"
                        className="w-full px-5 py-3 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all duration-200 group-hover:border-neutral-600 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
                        <img
                          src="/icon_calc/ruler.png"
                          className="w-10 h-10"
                          alt="Altura"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="mb-8 md:col-span-2">
                    <label
                      htmlFor="nivelAtividade"
                      className="block text-white mb-3 font-medium"
                    >
                      Nível de Atividade
                    </label>
                    <div className="relative group">
                      <select
                        id="nivelAtividade"
                        name="nivelAtividade"
                        value={formData.nivelAtividade}
                        onChange={handleSelectChange}
                        className="w-full px-5 py-3 bg-neutral-800/70 text-white rounded-xl border border-neutral-700 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:outline-none appearance-none transition-all duration-200 group-hover:border-neutral-600"
                        required
                      >
                        <option value="sedentario">
                          Sedentário (pouco ou nenhum exercício)
                        </option>
                        <option value="leve">
                          Levemente ativo (exercício leve 1-3 dias/semana)
                        </option>
                        <option value="moderado">
                          Moderadamente ativo (exercício moderado 3-5
                          dias/semana)
                        </option>
                        <option value="intenso">
                          Muito ativo (exercício intenso 6-7 dias/semana)
                        </option>
                        <option value="muito intenso">
                          Extremamente ativo (exercício muito intenso, trabalho
                          físico)
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <button
                    className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center py-4 px-10 text-lg shadow-lg shadow-red-600/20 group relative overflow-hidden"
                    type="submit"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transition-opacity opacity-0 group-hover:opacity-100 duration-300"></span>
                    <span className="absolute -inset-x-8 -bottom-12 h-32 w-[calc(100%+4rem)] blur-2xl bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duratioan-300"></span>
                    <span className="relative flex items-center gap-2">
                      {" "}
                      <img
                        src="/icon_calc/calc.png"
                        className="w-10 h-10"
                        alt="Calcular"
                      />
                      GERAR PLANO
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-10">
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-red-600/10 rounded-full mb-4">
                  <span className="text-red-600 uppercase font-bold tracking-wider text-sm">
                    Análise completa
                  </span>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  RESULTADO DA{" "}
                  <span className="text-red-600 relative inline-block">
                    ANÁLISE
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full"></span>
                  </span>
                </h4>
              </div>
              {resultado && (
                <div className="mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700/50 text-center shadow-lg shadow-black/10 transform transition-transform hover:scale-105 duration-300">
                      {" "}
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img
                          src="/icon_calc/fire.png"
                          className="w-10 h-10 text-red-600"
                          alt="Metabolismo"
                        />
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                        Metabolismo Basal
                      </p>
                      <p className="text-3xl font-bold text-red-600 mb-1">
                        {resultado.tmb}
                      </p>
                      <p className="text-white text-sm">kcal/dia</p>
                    </div>{" "}
                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700/50 text-center shadow-lg shadow-black/10 transform transition-transform hover:scale-105 duration-300">
                      {" "}
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img
                          src="/icon_calc/muscle.png"
                          className="w-10 h-10 text-red-600"
                          alt="Gasto Total"
                        />
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                        Gasto Total
                      </p>
                      <p className="text-3xl font-bold text-red-600 mb-1">
                        {resultado.tdee}
                      </p>
                      <p className="text-white text-sm">kcal/dia</p>
                    </div>
                    <div className="md:col-span-1 col-span-2 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700/50 text-center shadow-lg shadow-black/10 transform transition-transform hover:scale-105 duration-300">
                      {" "}
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img
                          src="/icon_calc/muscle-spasm.png"
                          className="w-10 h-10 text-red-600"
                          alt="Potencial Muscular"
                        />
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                        Potencial Muscular
                      </p>
                      <p className="text-3xl font-bold text-red-600 mb-1">
                        {resultado.potencialMuscular.toString()}
                      </p>
                      <p className="text-white text-sm">FFMI</p>
                    </div>
                  </div>{" "}
                  <div className="mb-10">
                    <p className="text-xl font-semibold text-white mb-4">
                      Escolha seu objetivo:
                    </p>
                    <div className="flex mb-8 justify-center">
                      {objetivos.map((objetivo, index) => (
                        <button
                          key={index}
                          onClick={() => setObjetivoAtivo(index)}
                          className={`px-6 py-3 text-center transition-all duration-300 ${
                            objetivoAtivo === index
                              ? "bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg shadow-red-600/20"
                              : "bg-neutral-800 text-white hover:bg-neutral-700"
                          } ${index === 0 ? "rounded-l-xl" : ""} ${
                            index === objetivos.length - 1 ? "rounded-r-xl" : ""
                          }`}
                        >
                          {objetivo.nome}
                        </button>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/40 shadow-xl shadow-black/10">
                      <div className="mb-6 text-center relative">
                        <p className="text-gray-300 mb-2 uppercase tracking-wider text-sm">
                          Calorias Diárias Recomendadas
                        </p>
                        <p className="text-4xl font-bold text-white">
                          {resultado.macros?.[objetivos[objetivoAtivo].tipo]
                            .calorias || 0}{" "}
                          <span className="text-base text-gray-400">kcal</span>
                        </p>
                      </div>{" "}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-neutral-800/50 rounded-lg p-4 text-center flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-600/20 mb-2 flex items-center justify-center">
                            <img
                              src="/icon_calc/protein.png"
                              className="w-10 h-10 text-blue-500"
                              alt="Proteínas"
                            />
                          </div>
                          <p className="text-blue-400 font-medium mb-1">
                            Proteínas
                          </p>
                          <p className="text-xl font-bold text-white">
                            {resultado.macros?.[objetivos[objetivoAtivo].tipo]
                              .moderado.proteina || 0}
                            <span className="text-sm">g</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            {Math.round(
                              (resultado.macros?.[objetivos[objetivoAtivo].tipo]
                                .moderado.proteina || 0) * 4
                            )}{" "}
                            kcal
                          </p>{" "}
                        </div>
                        <div className="bg-neutral-800/50 rounded-lg p-4 text-center flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-red-600/20 mb-2 flex items-center justify-center">
                            <img
                              src="/icon_calc/olive-oil.png"
                              className="w-10 h-10 text-red-500"
                              alt="Gorduras"
                            />
                          </div>
                          <p className="text-red-400 font-medium mb-1">
                            Gorduras
                          </p>
                          <p className="text-xl font-bold text-white">
                            {resultado.macros?.[objetivos[objetivoAtivo].tipo]
                              .moderado.gordura || 0}
                            <span className="text-sm">g</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            {Math.round(
                              (resultado.macros?.[objetivos[objetivoAtivo].tipo]
                                .moderado.gordura || 0) * 9
                            )}{" "}
                            kcal
                          </p>{" "}
                        </div>
                        <div className="bg-neutral-800/50 rounded-lg p-4 text-center flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-yellow-600/20 mb-2 flex items-center justify-center">
                            <img
                              src="/icon_calc/rice-bowl.png"
                              className="w-10 h-10 text-yellow-500"
                              alt="Carboidratos"
                            />
                          </div>
                          <p className="text-yellow-400 font-medium mb-1">
                            Carboidratos
                          </p>
                          <p className="text-xl font-bold text-white">
                            {resultado.macros?.[objetivos[objetivoAtivo].tipo]
                              .moderado.carboidratos || 0}
                            <span className="text-sm">g</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            {Math.round(
                              (resultado.macros?.[objetivos[objetivoAtivo].tipo]
                                .moderado.carboidratos || 0) * 4
                            )}{" "}
                            kcal
                          </p>
                        </div>
                      </div>
                      <div className="h-6 bg-neutral-900/80 rounded-full overflow-hidden p-1">
                        <div className="flex h-full rounded-full overflow-hidden">
                          <div
                            className="bg-blue-500 h-full"
                            style={{
                              width: `${
                                resultado &&
                                resultado.macros &&
                                resultado.macros[objetivos[objetivoAtivo].tipo]
                                  .calorias > 0
                                  ? Math.round(
                                      (((resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].moderado.proteina || 0) *
                                        4) /
                                        resultado.macros[
                                          objetivos[objetivoAtivo].tipo
                                        ].calorias) *
                                        100
                                    )
                                  : 0
                              }%`,
                            }}
                          />
                          <div
                            className="bg-red-600 h-full"
                            style={{
                              width: `${
                                resultado &&
                                resultado.macros &&
                                resultado.macros[objetivos[objetivoAtivo].tipo]
                                  .calorias > 0
                                  ? Math.round(
                                      (((resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].moderado.gordura || 0) *
                                        9) /
                                        resultado.macros[
                                          objetivos[objetivoAtivo].tipo
                                        ].calorias) *
                                        100
                                    )
                                  : 0
                              }%`,
                            }}
                          />
                          <div
                            className="bg-yellow-500 h-full"
                            style={{
                              width: `${
                                resultado &&
                                resultado.macros &&
                                resultado.macros[objetivos[objetivoAtivo].tipo]
                                  .calorias > 0
                                  ? Math.round(
                                      (((resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].moderado.carboidratos || 0) *
                                        4) /
                                        resultado.macros[
                                          objetivos[objetivoAtivo].tipo
                                        ].calorias) *
                                        100
                                    )
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>{" "}
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
                            <span className="text-sm font-bold text-blue-400">
                              {resultado &&
                              resultado.macros &&
                              resultado.macros[objetivos[objetivoAtivo].tipo]
                                .calorias > 0
                                ? Math.round(
                                    (((resultado.macros[
                                      objetivos[objetivoAtivo].tipo
                                    ].moderado.proteina || 0) *
                                      4) /
                                      resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].calorias) *
                                      100
                                  )
                                : 0}
                              %
                            </span>
                          </div>
                          <span className="text-sm mt-2 font-medium text-blue-400">
                            Proteína
                          </span>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center">
                            <span className="text-sm font-bold text-red-400">
                              {resultado &&
                              resultado.macros &&
                              resultado.macros[objetivos[objetivoAtivo].tipo]
                                .calorias > 0
                                ? Math.round(
                                    (((resultado.macros[
                                      objetivos[objetivoAtivo].tipo
                                    ].moderado.gordura || 0) *
                                      9) /
                                      resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].calorias) *
                                      100
                                  )
                                : 0}
                              %
                            </span>
                          </div>
                          <span className="text-sm mt-2 font-medium text-red-400">
                            Gordura
                          </span>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                            <span className="text-sm font-bold text-yellow-400">
                              {resultado &&
                              resultado.macros &&
                              resultado.macros[objetivos[objetivoAtivo].tipo]
                                .calorias > 0
                                ? Math.round(
                                    (((resultado.macros[
                                      objetivos[objetivoAtivo].tipo
                                    ].moderado.carboidratos || 0) *
                                      4) /
                                      resultado.macros[
                                        objetivos[objetivoAtivo].tipo
                                      ].calorias) *
                                      100
                                  )
                                : 0}
                              %
                            </span>
                          </div>
                          <span className="text-sm mt-2 font-medium text-yellow-400">
                            Carboidratos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}{" "}
              <div className="flex justify-center mt-10">
                <button
                  onClick={resetForm}
                  className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center py-3 px-8 shadow-lg shadow-black/10 group"
                >
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  VOLTAR E RECALCULAR
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaloriasCalculadora;

type Genero = 'masculino' | 'feminino';
type NivelAtividade =
  | 'sedentario'
  | 'leve'
  | 'moderado'
  | 'intenso'
  | 'muito intenso';
interface CaloriasInput {
  genero: Genero;
  idade: number;
  peso: number;
  altura: number;
  nivelAtividade: NivelAtividade;
}
export function calcularCalorias({
  genero,
  idade,
  peso,
  altura,
  nivelAtividade,
}: CaloriasInput) {
  const tmb =
    genero === 'masculino'
      ? 10 * peso + 6.25 * altura - 5 * idade + 5
      : 10 * peso + 6.25 * altura - 5 * idade - 161;
  const multiplicadores: Record<NivelAtividade, number> = {
    sedentario: 1.2,
    leve: 1.375,
    moderado: 1.55,
    intenso: 1.725,
    'muito intenso': 1.9,
  };
  const tdee = tmb * multiplicadores[nivelAtividade];
  return {
    tmb: Math.round(tmb),
    tdee: Math.round(tdee),
  };
}

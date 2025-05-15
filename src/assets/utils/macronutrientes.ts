type MacroSplit = '30/35/35' | '40/40/20' | '30/20/50';
interface MacroResult {
  proteina: number;
  gordura: number;
  carboidratos: number;
}
export function calcularMacronutrientes(
  calorias: number,
  split: MacroSplit
): MacroResult {
  const [proteina, gordura, carb] = split.split('/').map(Number);
  const proteinaGramas = Math.round((calorias * (proteina / 100)) / 4);
  const gorduraGramas = Math.round((calorias * (gordura / 100)) / 9);
  const carbGramas = Math.round((calorias * (carb / 100)) / 4);
  return {
    proteina: proteinaGramas,
    gordura: gorduraGramas,
    carboidratos: carbGramas,
  };
}
export function calcularPotencialMuscular(altura: number) {
  const pesoMagro = (altura - 100) * 1.1;
    return {
    peso5: Math.round(pesoMagro / 0.95),
    peso10: Math.round(pesoMagro / 0.90),
    peso15: Math.round(pesoMagro / 0.85),
  };
}
export function calcularCaloriasPorObjetivo(tdee: number): {
  manutencao: number;
  corte: number;
  bulk: number;
} {
  return {
    manutencao: tdee,
    corte: tdee - 500,
    bulk: tdee + 500,
  };
}

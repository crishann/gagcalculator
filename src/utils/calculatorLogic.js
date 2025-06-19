// src/utils/calculatorLogic.js
import { fruitConstants } from '../constants/gameData';
import { mutationMultipliers } from '../constants/mutationData';

export function calculateGAGPrice(
  basePrice,
  baseWeight,
  currentWeight,
  selectedMutations,
  fruitName
) {
  if (!basePrice || !baseWeight || !currentWeight || !fruitName) {
    return 0;
  }

  const currentWeightFloat = parseFloat(currentWeight);
  if (isNaN(currentWeightFloat)) return 0;

  const weightSquared = currentWeightFloat ** 2;

  const constant = fruitConstants[fruitName] ?? (basePrice / (baseWeight ** 2));

  const hasRainbow = selectedMutations.includes('Rainbow');
  const hasGold = selectedMutations.includes('Gold');
  const mainMultiplier = hasRainbow
    ? mutationMultipliers['Rainbow']
    : hasGold
      ? mutationMultipliers['Gold']
      : 1;

  const otherMutations = selectedMutations.filter(m => m !== 'Rainbow' && m !== 'Gold');
  const sumOther = otherMutations.reduce(
    (sum, m) => sum + (mutationMultipliers[m] || 0), 0
  );
  const countOther = otherMutations.length;

  let finalMultiplier = mainMultiplier;
  if (mainMultiplier === 1) {
    finalMultiplier = 1 + sumOther;
  } else {
    finalMultiplier = mainMultiplier * (1 + sumOther - countOther);
  }

  return constant * weightSquared * finalMultiplier;
}
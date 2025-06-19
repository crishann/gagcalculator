// src/constants/mutationData.js

export const mutations = [
  "Gold", "Rainbow", "Frozen", "Wet", "Chilled", "Burnt", "Cooked",
  "Chocolate", "Moonlit", "Bloodlit", "Pollinated", "HoneyGlazed", "Heavenly", "Plasma",
  "Zombified", "Twisted", "Shocked", "Celestial",
  "Disco", "Meteoric", "Voidtouched", "Dawnbound"
];

export const mutationMultipliers = {
  Wet: 2, Chilled: 2, Chocolate: 2, Moonlit: 2, Pollinated: 3, Bloodlit: 4, Burnt: 4,
  HoneyGlazed: 5, Heavenly: 5, Plasma: 5, Cooked: 10, Frozen: 10, Gold: 20,
  Zombified: 25, Twisted: 30, Rainbow: 50, Shocked: 100, Celestial: 120, Disco: 125,
  Meteoric: 125, Voidtouched: 135, Dawnbound: 150
};

export const exclusiveMutationGroups = {
  golden: ['Gold', 'Rainbow'],
  frozen: ['Frozen', 'Wet', 'Chilled'],
  cooked: ['Cooked', 'Burnt'],
};
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const mutations = [
    "Gold","Rainbow", "Frozen", "Wet", "Chilled", "Burnt","Cooked",
     "Chocolate","Moonlit","Bloodlit", "Pollinated", "HoneyGlazed","Heavenly", "Plasma", 
     "Zombified", "Twisted",  "Shocked", "Celestial",
    "Disco", "Meteoric", "Voidtouched", "Dawnbound"
  ];

  const baseFruits = [
    { name: 'carrot', weight: 0.240, price: 18.00 },
    { name: 'strawberry', weight: 0.290, price: 14.00 },
    { name: 'blueberry', weight: 0.170, price: 18.00 },
    { name: 'orangetulip', weight: 0.050, price: 751.00 },
    { name: 'tomato', weight: 0.440, price: 27.00 },
    { name: 'corn', weight: 1.900, price: 36.00 },
    { name: 'daffodil', weight: 0.160, price: 903.00 },
    { name: 'watermelon', weight: 7.300, price: 2708.00 },
    { name: 'pumpkin', weight: 6.900, price: 3069.00 },
    { name: 'apple', weight: 2.850, price: 248.00 },
    { name: 'bamboo', weight: 3.800, price: 3610.00 },
    { name: 'coconut', weight: 13.310, price: 361.00 },
    { name: 'cactus', weight: 6.650, price: 3069.00 },
    { name: 'dragonfruit', weight: 11.380, price: 4287.00 },
    { name: 'mango', weight: 14.280, price: 5866.00 },
    { name: 'grape', weight: 2.850, price: 7085.00 },
    { name: 'mushroom', weight: 25.900, price: 136278.00 },
    { name: 'pepper', weight: 4.750, price: 7220.00 },
    { name: 'cacao', weight: 7.600, price: 10830.00 },
    { name: 'beanstalk', weight: 9.500, price: 25270.00 },
    { name: 'emberlily', weight: 11.400, price: 50138.00 },
    { name: 'sugarapple', weight: 8.550, price: 43320.00 },
    { name: 'papaya', weight: 2.860, price: 903.00 },
    { name: 'banana', weight: 1.425, price: 1579.00 },
    { name: 'passionfruit', weight: 2.867, price: 3204.00 },
    { name: 'soulfruit', weight: 23.750, price: 6994.00 },
    { name: 'cursedfruit', weight: 22.900, price: 15000.00 },
    { name: 'raspberry', weight: 0.710, price: 90.00 },
    { name: 'pear', weight: 2.850, price: 451.00 },
    { name: 'peach', weight: 1.900, price: 271.00 },
    { name: 'pineapple', weight: 2.850, price: 1805.00 },
    { name: 'chocolatecarrot', weight: 0.262, price: 9960.00 },
    { name: 'redlolipop', weight: 3.799, price: 45102.00 },
    { name: 'candysunflower', weight: 1.428, price: 72200.00 },
    { name: 'candyblossom', weight: 2.850, price: 90250.00 },
    { name: 'easteregg', weight: 2.850, price: 2256.00 },
    { name: 'cranberry', weight: 0.950, price: 1805.00 },
    { name: 'durian', weight: 7.600, price: 6317.00 },
    { name: 'eggplant', weight: 4.750, price: 6769.00 },
    { name: 'lotus', weight: 18.990, price: 15343.00 },
    { name: 'venusflytrap', weight: 9.500, price: 40612.00 },
    { name: 'nightshade', weight: 0.480, price: 3159.00 },
    { name: 'mint', weight: 0.950, price: 4738.00 },
    { name: 'glowshroom', weight: 0.700, price: 271.00 },
    { name: 'moonmelon', weight: 7.600, price: 16245.00 },
    { name: 'starfruit', weight: 2.850, price: 13538.00 },
    { name: 'moonflower', weight: 1.900, price: 8574.00 },
    { name: 'bloodbanana', weight: 1.420, price: 5415.00 },
    { name: 'moonglow', weight: 6.650, price: 18050.00 },
    { name: 'moonblossom', weight: 2.850, price: 60166.00 },
    { name: 'celestiberry', weight: 1.900, price: 9025.00 },
    { name: 'moonmango', weight: 14.250, price: 45125.00 },
    { name: 'hive', weight: 7.590, price: 55955.00 },
    { name: 'nectarine', weight: 2.807, price: 35000.00 },
    { name: 'rose', weight: 0.950, price: 4513.00 },
    { name: 'foxglove', weight: 1.900, price: 18050.00 },
    { name: 'purpledahlia', weight: 11.400, price: 67688.00 },
    { name: 'pinklily', weight: 5.699, price: 58663.00 },
    { name: 'lilac', weight: 2.846, price: 31588.00 },
    { name: 'sunflower', weight: 15.650, price: 144000.00 },
    { name: 'lavender', weight: 0.250, price: 22563.00 },
    { name: 'nectarshade', weight: 0.750, price: 45125.00 },
    { name: 'manuka', weight: 0.289, price: 22563.00 },
    { name: 'dandelion', weight: 3.790, price: 45125.00 },
    { name: 'lumira', weight: 5.690, price: 76713.00 },
    { name: 'honeysuckle', weight: 11.400, price: 90250.00 },
    { name: 'beebalm', weight: 0.940, price: 16245.00 },
    { name: 'nectarthorn', weight: 5.760, price: 30083.00 },
    { name: 'suncoil', weight: 9.500, price: 72200.00 },
    { name: 'crocus', weight: 0.285, price: 27075.00 },
    { name: 'succulent', weight: 4.750, price: 22563.00 },
    { name: 'violetcorn', weight: 2.850, price: 45125.00 },
    { name: 'bendboo', weight: 17.090, price: 138988.00 },
    { name: 'cocovine', weight: 13.300, price: 60166.00 },
    { name: 'dragonpepper', weight: 5.690, price: 80000.00 }
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedMutations, setSelectedMutations] = useState([]);
  const [weight, setWeight] = useState('');
  const [basePrice, setBasePrice] = useState('');

  const fruitImages = import.meta.glob('./assets/imgfruit/*.webp', { eager: true });

  const fruits = baseFruits.map(fruit => {
  const matched = Object.entries(fruitImages).find(([path]) => {
    const fileName = path.split('/').pop()?.replace('.webp', '');
    return fileName === fruit.name;
  });

  return {
    ...fruit,
    image: matched ? matched[1].default : `/imgfruit/${fruit.name}.webp`
  };
});

  const toggleMutation = (mutation) => {
    const exclusiveGroups = {
      golden: ['Gold', 'Rainbow'],
      frozen: ['Frozen', 'Wet', 'Chilled'],
      cooked: ['Cooked', 'Burnt'],
    };

    const group = Object.values(exclusiveGroups).find(g => g.includes(mutation));
    if (group) {
      setSelectedMutations(prev =>
        prev.includes(mutation)
          ? prev.filter(m => m !== mutation)
          : [...prev.filter(m => !group.includes(m)), mutation]
      );
    } else if (mutation === 'Dawnbound') {
      if (selectedFruit?.toLowerCase() !== 'sunflower') return; // silently ignore
      setSelectedMutations(prev =>
        prev.includes(mutation) ? prev.filter(m => m !== mutation) : [...prev, mutation]
      );
    }
 else {
      setSelectedMutations(prev =>
        prev.includes(mutation) ? prev.filter(m => m !== mutation) : [...prev, mutation]
      );
    }
  };

  useEffect(() => {
    if (selectedFruit) {
      console.log('You selected:', selectedFruit);
    }
  }, [selectedFruit]);

  return (
    
      
    <div className="app-container">
      <h1>GROW A GARDEN CALCULATOR</h1>
      <div className="main-content">
        <div className="left-panel">
          <h2>Select a Fruit</h2>
          <div className="fruit-grid">
            {fruits.map(fruit => (
              <div
                key={fruit.name}
                className={`fruit-card ${selectedFruit === fruit.name ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedFruit(prev => prev === fruit.name ? null : fruit.name);
                  setWeight(fruit.weight);
                  setBasePrice(fruit.price);
                }}
              >
                <img src={fruit.image} alt={fruit.name} />
                <p>{fruit.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-panel">
          <h2>Mutations</h2>
          <div className="mutations-grid">
            {mutations.map(m => (
              <div
                key={m}
                className={`mutation-card
                  ${selectedMutations.includes(m) ? 'selected' : ''}
                  ${m === 'Dawnbound' && selectedFruit?.toLowerCase() !== 'sunflower' ? 'disabled' : ''}
                `}
                onClick={() => toggleMutation(m)}
              >
                {m}
              </div>

            ))}
          </div>

          <div className="fruit-info">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
            <p>Base Price: ₱{basePrice}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

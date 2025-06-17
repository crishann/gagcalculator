import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const fruitList = [
    "carrot", "strawberry", "blueberry", "orangetulip", "tomato", "corn",
    "daffodil", "watermelon", "pumpkin", "apple", "bamboo", "coconut", "cactus",
    "dragonfruit", "mango", "grape", "mushroom", "pepper", "cacao", "beanstalk",
    "emberlily", "sugarapple", "papaya", "banana", "passionfruit", "soulfruit",
    "cursedfruit", "raspberry", "pear", "peach", "pineapple", "chocolatecarrot",
    "redlolipop", "candysunflower", "candyblossom", "easteregg", "cranberry",
    "durian", "eggplant", "lotus", "venusflytrap", "nightshade", "mint",
    "glowshroom", "moonmelon", "starfruit", "moonflower", "bloodbanana",
    "moonglow", "moonblossom", "celestiberry", "moonmango", "hive", "nectarine",
    "rose", "foxglove", "purpledahlia", "pinklily", "lilac", "sunflower",
    "lavender", "nectarshade", "manuka", "dandelion", "lumira", "honeysuckle",
    "beebalm", "nectarthorn", "suncoil", "crocus", "succulent", "violetcorn",
    "bendboo", "cocovine", "dragonpepper"
  ];

  // Image imports
  const fruitImages = import.meta.glob('./assets/imgfruit/*.webp', { eager: true });
  const fruits = Object.entries(fruitImages).map(([path, module]) => {
    const name = path.split('/').pop().replace('.webp', '');
    return { name, image: module.default };
  });

  // Hook must be here
  useEffect(() => {
    if (selectedFruit) {
      console.log('You selected:', selectedFruit);
    }
  }, [selectedFruit]);

  return (

    <div className="app-container">
      <h1>GROW A GARDEN</h1>
      <h2>Select a Fruit</h2>
      <div className="fruit-grid">
        {fruits.map(fruit => (
         <div
          key={fruit.name}
          className={`fruit-card ${selectedFruit === fruit.name ? 'selected' : ''}`}
          onClick={() =>
            setSelectedFruit(prev => prev === fruit.name ? null : fruit.name)
          }
        >
          <img src={fruit.image} alt={fruit.name} className="fruit-image" />
          <p className="fruit-name">{fruit.name}</p>
        </div>

        ))}
      </div>
    </div>

  );
}

export default App;

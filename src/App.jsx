// src/App.jsx
import React from 'react';
import { useCalculator } from './hooks/useCalculator.js';
import FruitGrid from './components/FruitGrid/FruitGrid.jsx';
import MutationsSelector from './components/MutationsSelector/MutationsSelector.jsx';
import CalculatorResults from './components/CalculatorResults/CalculatorResults.jsx';
import CalculatorPanels from './components/CalculatorPanels/CalculatorPanels.jsx';
import './App.css'; // App-specific global styles (like h1, app-container overall)

// Import the styles for left-panel and right-panel directly into App.jsx
// as they are used on the divs within App.jsx
import panelStyles from './components/CalculatorPanels/CalculatorPanels.module.css';


function App() {
  const {
    selectedFruitName,
    handleFruitSelect,
    selectedMutations,
    toggleMutation,
    weight,
    setWeight,
    finalPrice,
  } = useCalculator();

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>GROW A GARDEN CALCULATOR</h1>

      <CalculatorPanels> {/* This component applies panelStyles['main-content'] */}
        {/* Apply panelStyles to the actual panel divs */}
        <div className={panelStyles['left-panel']}>
          <h2>Select a Fruit</h2>
          <FruitGrid
            selectedFruitName={selectedFruitName}
            onSelectFruit={handleFruitSelect}
          />
        </div>

        <div className={panelStyles['right-panel']}>
          <h2>Mutations</h2>
          <MutationsSelector
            selectedMutations={selectedMutations}
            onToggleMutation={toggleMutation}
            selectedFruitName={selectedFruitName}
          />

          <CalculatorResults
            weight={weight}
            onWeightChange={handleWeightChange}
            finalPrice={finalPrice}
            selectedFruitName={selectedFruitName}
          />
        </div>
      </CalculatorPanels>
    </div>
  );
}

export default App;
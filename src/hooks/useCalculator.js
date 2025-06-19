// src/hooks/useCalculator.js
import { useState, useEffect, useCallback } from 'react';
import { calculateGAGPrice } from '../utils/calculatorLogic';
import { baseFruits } from '../constants/gameData';
import { mutations, exclusiveMutationGroups } from '../constants/mutationData'; // Import mutations for Dawnbound check

export function useCalculator() {
  const [selectedFruitName, setSelectedFruitName] = useState(null);
  const [selectedMutations, setSelectedMutations] = useState([]);
  const [weight, setWeight] = useState('');
  const [basePrice, setBasePrice] = useState(''); // This state is actually derived, could be removed or handled differently. Let's keep it for now as it was in App.jsx.
  const [finalPrice, setFinalPrice] = useState(0);

  const toggleMutation = useCallback((mutation) => {
    // Dawnbound specific check moved here, relies on selectedFruitName
    if (mutation === 'Dawnbound' && selectedFruitName?.toLowerCase() !== 'sunflower') {
      return;
    }

    const group = Object.values(exclusiveMutationGroups).find(g => g.includes(mutation));

    if (group) {
      setSelectedMutations(prev =>
        prev.includes(mutation)
          ? prev.filter(m => m !== mutation)
          : [...prev.filter(m => !group.includes(m)), mutation]
      );
    } else {
      setSelectedMutations(prev =>
        prev.includes(mutation) ? prev.filter(m => m !== mutation) : [...prev, mutation]
      );
    }
  }, [selectedFruitName]); // Dependency on selectedFruitName for Dawnbound logic

  // Effect to calculate price whenever inputs change
  useEffect(() => {
    if (selectedFruitName && weight) {
      const fruitData = baseFruits.find(f => f.name === selectedFruitName);
      if (fruitData) {
        const result = calculateGAGPrice(
          fruitData.price,
          fruitData.weight,
          parseFloat(weight),
          selectedMutations,
          selectedFruitName
        );
        setFinalPrice(result);
      }
    } else {
      setFinalPrice(0);
    }
  }, [selectedFruitName, weight, selectedMutations]);

  // Effect to handle fruit selection changes (update weight and base price, clear mutations)
  const handleFruitSelect = useCallback((fruit) => {
    if (selectedFruitName === fruit.name) {
      setSelectedFruitName(null);
      setWeight('');
      setBasePrice('');
      setSelectedMutations([]);
    } else {
      setSelectedFruitName(fruit.name);
      setWeight(fruit.weight);
      setBasePrice(fruit.price);
      setSelectedMutations([]);
    }
  }, [selectedFruitName]);

  return {
    selectedFruitName,
    setSelectedFruitName, // You might not expose setSelectedFruitName directly to children, but rather via handleFruitSelect
    selectedMutations,
    toggleMutation,
    weight,
    setWeight,
    finalPrice,
    handleFruitSelect, // Expose the handler for selecting fruits
  };
}

export default useCalculator;
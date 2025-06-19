// src/components/FruitGrid/FruitGrid.jsx
import React from 'react';
import { baseFruits } from '../../constants/gameData';
import styles from './FruitGrid.module.css'; // Using CSS Modules for component-specific styles

function FruitGrid({ selectedFruitName, onSelectFruit }) {
  // Pre-process images for Vite
  const fruitImages = import.meta.glob('/src/assets/imgfruit/*.webp', { eager: true });

  const fruitsWithImages = baseFruits.map(fruit => {
    const matched = Object.entries(fruitImages).find(([path]) => {
      const fileName = path.split('/').pop()?.replace('.webp', '');
      return fileName === fruit.name;
    });

    return {
      ...fruit,
      image: matched ? matched[1].default : `/src/assets/imgfruit/${fruit.name}.webp` // Fallback if image not found via glob
    };
  });

  return (
    <div className={styles['fruit-grid']}>
      {fruitsWithImages.map(fruit => (
        <div
          key={fruit.name}
          className={`${styles['fruit-card']} ${selectedFruitName === fruit.name ? styles.selected : ''}`}
          onClick={() => onSelectFruit(fruit)}
        >
          <img src={fruit.image} alt={fruit.name} className={styles['fruit-image']} />
          <p>{fruit.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FruitGrid;
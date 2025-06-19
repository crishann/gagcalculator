// src/components/FruitGrid/FruitGrid.jsx
import React, { useState, useMemo } from 'react';
import { baseFruits } from '../../constants/gameData.js'; // Ensure .js extension
import styles from './FruitGrid.module.css'; // Using CSS Modules for component-specific styles

function FruitGrid({ selectedFruitName, onSelectFruit }) {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  // Pre-process images for Vite
  const fruitImages = import.meta.glob('/src/assets/imgfruit/*.webp', { eager: true });

  const fruitsWithImages = useMemo(() => {
    return baseFruits.map(fruit => {
      const matched = Object.entries(fruitImages).find(([path]) => {
        const fileName = path.split('/').pop()?.replace('.webp', '');
        return fileName === fruit.name;
      });

      return {
        ...fruit,
        image: matched ? matched[1].default : `/src/assets/imgfruit/${fruit.name}.webp`
      };
    });
  }, [baseFruits, fruitImages]);

  // Filter fruits based on the search term
  const filteredFruits = useMemo(() => {
    if (!searchTerm) {
      return fruitsWithImages; // If search term is empty, show all fruits
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return fruitsWithImages.filter(fruit =>
      fruit.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [fruitsWithImages, searchTerm]);

  // Function to clear the search term
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <>
      <div className={styles['search-bar-container']}>
        <input
          type="text"
          placeholder="Search fruits..."
          className={styles['search-input']}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && ( // Conditionally render the clear button if searchTerm is not empty
          <button
            className={styles['clear-button']}
            onClick={handleClearSearch}
            aria-label="Clear search" // Accessibility improvement
          >
            &times; {/* HTML entity for a multiplication sign, commonly used as a close/clear icon */}
          </button>
        )}
      </div>
      <div className={styles['fruit-grid']}>
        {filteredFruits.length > 0 ? (
          filteredFruits.map(fruit => (
            <div
              key={fruit.name}
              className={`${styles['fruit-card']} ${selectedFruitName === fruit.name ? styles.selected : ''}`}
              onClick={() => onSelectFruit(fruit)}
            >
              <img src={fruit.image} alt={fruit.name} className={styles['fruit-image']} />
              <p className={styles['fruit-name']}>{fruit.name}</p>
            </div>
          ))
        ) : (
          <p className={styles['no-results']}>No fruits found.</p>
        )}
      </div>
    </>
  );
}

export default FruitGrid;
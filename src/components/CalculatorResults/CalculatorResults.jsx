// src/components/CalculatorResults/CalculatorResults.jsx
import React from 'react';
import styles from './CalculatorResults.module.css'; // Using CSS Modules

function CalculatorResults({ weight, onWeightChange, finalPrice, selectedFruitName }) {
  return (
    <div className={styles['fruit-info']}>
      <label htmlFor="weight-input" className={styles['label']}>Weight (kg):</label>
      <input
        id="weight-input"
        type="number"
        value={weight}
        onChange={onWeightChange}
        disabled={!selectedFruitName}
        className={styles['weight-input']}
      />
      <p className={styles['price-display']}>
        Calculated Price (with Mutations): ₱{finalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </p>
    </div>
  );
}

export default CalculatorResults;
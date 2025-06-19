// src/components/CalculatorPanels/CalculatorPanels.jsx
import React from 'react';
import styles from './CalculatorPanels.module.css';

// This component acts as the container for the left and right panels
function CalculatorPanels({ children }) {
  return (
    <div className={styles['main-content']}> {/* This is the flex container */}
      {children} {/* Children will be the actual left and right panels */}
    </div>
  );
}

export default CalculatorPanels;
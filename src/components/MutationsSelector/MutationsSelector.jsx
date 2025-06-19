// src/components/MutationsSelector/MutationsSelector.jsx
import React from 'react';
import { mutations } from '../../constants/mutationData';
import styles from './MutationsSelector.module.css'; // Using CSS Modules

function MutationsSelector({ selectedMutations, onToggleMutation, selectedFruitName }) {
  return (
    <div className={styles['mutations-grid']}>
      {mutations.map(m => {
        const isDawnboundDisabled = (m === 'Dawnbound' && selectedFruitName?.toLowerCase() !== 'sunflower');
        return (
          <div
            key={m}
            className={`${styles['mutation-card']}
              ${selectedMutations.includes(m) ? styles.selected : ''}
              ${isDawnboundDisabled ? styles.disabled : ''}
            `}
            onClick={() => !isDawnboundDisabled && onToggleMutation(m)}
          >
            {m}
          </div>
        );
      })}
    </div>
  );
}

export default MutationsSelector;
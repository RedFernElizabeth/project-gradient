import React from 'react';

import styles from './Colors.module.css';

function Colours({ visibleColors, colors, setColors }) {
  return (
    <div className={styles.colors}>
      {visibleColors.map((color, index) => {
        const colorId = `color-${index}`;

        return (
          <div key={colorId} className={styles.colorWrapper}>
            <label htmlFor={colorId}>
              Color {index + 1}:
            </label>

            <div className={styles.inputWrapper}>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={(event) => {
                  const newColors = [...colors];
                  
                  newColors[index] = event.target.value;
                  setColors(newColors);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Colours;

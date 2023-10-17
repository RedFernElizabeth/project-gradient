import React from 'react';

import styles from './App.module.css';

function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0000',
    '#FF0000',
    '#FF0000'
  ]);

  const [numVisibleColors, setNumVisibleColors] = React.useState(2);
  const visibleColors = colors.slice(0, numVisibleColors);

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (numVisibleColors >= 5) {
      return;
    }

    setNumVisibleColors(numVisibleColors + 1);
  }

  function removeColor() {
    if (numVisibleColors <= 2) {
      return;
    }

    setNumVisibleColors(numVisibleColors - 1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className={styles.gradientPreview}
        style={{
          backgroundImage,
        }}
      />

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
    </div>
  );
}

export default App;

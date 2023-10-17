import React from 'react';

import { GradientContext } from '../GradientProvider';

import styles from './Colors.module.css';

function Colours() {
  const { visibleColors, setColor } = React.useContext(GradientContext);

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
                  setColor(index, event.target.value);
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

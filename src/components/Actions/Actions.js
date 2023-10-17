import React from 'react';

import styles from './Actions.module.css';

function Actions({ removeColor, addColor }) {
  return (
    <div className={styles.actions}>
      <button onClick={removeColor}>Remove color</button>
      <button onClick={addColor}>Add color</button>
    </div>
  )
}

export default Actions;

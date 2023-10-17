import React from 'react';

import { GradientContext } from '../GradientProvider';

import styles from './Actions.module.css';

function Actions() {
  const { removeColor, addColor } = React.useContext(GradientContext);

  return (
    <div className={styles.actions}>
      <button onClick={removeColor}>Remove color</button>
      <button onClick={addColor}>Add color</button>
    </div>
  )
}

export default Actions;

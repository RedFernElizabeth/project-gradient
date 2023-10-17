import React from 'react';

import { GradientContext } from '../GradientProvider';

import styles from './CSSOutput.module.css';

function CSSOutput() {
  const { backgroundImage } = React.useContext(GradientContext);

  return (
    <div className={styles.outputWrapper}>
      <h2>CSS:</h2>

      <div className={styles.box}>
        { backgroundImage }
      </div>
    </div>
  );
}

export default CSSOutput;

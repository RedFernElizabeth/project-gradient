import React from 'react';

import { GradientContext } from '../GradientProvider';

import styles from './GradientPreview.module.css';

function GradientPreview() {
  const { backgroundImage } = React.useContext(GradientContext);

  return (
    <div
      className={styles.gradientPreview}
      style={{backgroundImage}}
    />
  )
}

export default GradientPreview;

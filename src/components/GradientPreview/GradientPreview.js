import React from 'react';

import { GradientContext } from '../GradientProvider';

import styles from './GradientPreview.module.css';

function GradientPreview() {
  const { visibleColors } = React.useContext(GradientContext);

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <div
      className={styles.gradientPreview}
      style={{
        backgroundImage,
      }}
    />
  )
}

export default GradientPreview;

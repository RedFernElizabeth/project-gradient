import React from 'react';

import styles from './GradientPreview.module.css';

function GradientPreview({visibleColors}) {
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

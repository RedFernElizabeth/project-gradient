import React from 'react';

import Actions from '../Actions';
import GradientPreview from '../GradientPreview';
import Colors from '../Colors';

import styles from './GradientTool.module.css';

function GradientTool() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0000',
    '#FF0000',
    '#FF0000'
  ]);

  const [numVisibleColors, setNumVisibleColors] = React.useState(2);
  const visibleColors = colors.slice(0, numVisibleColors);

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
      <Actions addColor={addColor} removeColor={removeColor} />
      
      <GradientPreview visibleColors={visibleColors} />

      <Colors visibleColors={visibleColors} colors={colors} setColors={setColors} />
    </div>
  );
}

export default GradientTool;

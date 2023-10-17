import React from 'react';

import Actions from '../Actions';
import GradientPreview from '../GradientPreview';
import Colors from '../Colors';

import styles from './GradientTool.module.css';

function GradientTool() {
  return (
    <div className={styles.wrapper}>
      <Actions />
      
      <GradientPreview />

      <Colors />
    </div>
  );
}

export default GradientTool;

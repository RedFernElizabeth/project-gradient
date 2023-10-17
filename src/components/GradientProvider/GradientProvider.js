import React from 'react';

export const GradientContext = React.createContext();

function GradientProvider({ children }) {
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

  function setColor(index, value) {
    const newColors = [...colors];
                  
    newColors[index] = value;
    setColors(newColors);
  }

  return (
    <GradientContext.Provider value={{
      visibleColors,
      addColor,
      removeColor,
      setColor
    }}>
      {children}
    </GradientContext.Provider>
  );
}

export default GradientProvider;

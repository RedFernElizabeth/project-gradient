import React from 'react';

import GradientProvider from '../GradientProvider';
import GradientTool from '../GradientTool';

function App() {
  return (
    <GradientProvider>
      <GradientTool />
    </GradientProvider>
  );
}

export default App;

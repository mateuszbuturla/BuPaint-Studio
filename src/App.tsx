import react from 'react';
import { Canvas } from 'components/common';
import { ToolBar, ToolSettingsBar } from 'components/layout';

const App = () => {
  return (
    <>
      <Canvas />
      <ToolBar />
      <ToolSettingsBar />
    </>
  );
};

export default App;

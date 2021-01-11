import react from 'react';
import { Canvas } from 'components/common';
import { ToolBar, ToolSettingsBar } from 'components/layout';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Canvas />
      </div>
      <ToolBar />
      <ToolSettingsBar />
    </>
  );
};

export default App;

import React from 'react';

// components
import DrumMachine from './components/DrumMachine';

const App = () => {
  return (
    <div className="app-wrapper">
      <main className="app-content">
        <DrumMachine />
        <div className="attribution">
          Created by{' '}
          <a
            href="https://github.com/jonrutter"
            target="_blank"
            rel="noreferrer"
          >
            Jon Rutter
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;

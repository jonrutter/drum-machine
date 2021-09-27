import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// fonts
import '@fontsource/audiowide';

import GlobalProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

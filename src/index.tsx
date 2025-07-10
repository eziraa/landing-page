import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';

import { ThemeProvider } from './hooks/ThemeContext';
const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider>
      <App/>
    </ThemeProvider>
);
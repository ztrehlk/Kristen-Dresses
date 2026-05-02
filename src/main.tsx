import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

// BrowserRouter gives clean URLs (/bridal instead of /#/bridal). Direct
// navigation to deep links works because the deploy workflow copies index.html
// to 404.html, so GitHub Pages serves the SPA shell for any unknown path.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

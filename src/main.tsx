import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

// BrowserRouter gives clean URLs (/bridal instead of /#/bridal). The basename
// matches Vite's base, so the same build serves correctly whether deployed at
// the root (custom domain) or under a subpath like /Kristen-Dresses/.
// Strip a trailing slash because react-router doesn't want one in basename.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

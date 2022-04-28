import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import './styles/sass/main.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
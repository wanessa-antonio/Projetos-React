// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Application
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// React.StrictMode helps highlight potential problems during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App';

// Find the root element in your public/index.html file
const rootElement = document.getElementById('root');

// Create a root and render the App component into it
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

// Importing React library
import React from 'react';
// Importing ReactDOM for rendering React components
import ReactDOM from 'react-dom/client';
// Importing the main App component
import App from './App';

// Creating a root to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component inside React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


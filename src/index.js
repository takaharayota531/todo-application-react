import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// root decide
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 脆弱性チェック
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// delete 
reportWebVitals();

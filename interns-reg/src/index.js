import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Admin/script/script.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css'; // for antd version 5.x or later
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



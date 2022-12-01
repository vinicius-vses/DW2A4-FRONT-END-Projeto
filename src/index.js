<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import Routering from "./Routes/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <Routering/>
    </React.StrictMode>
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> e500a2b7ad568e6645d0ce60d68eddee16d5b998

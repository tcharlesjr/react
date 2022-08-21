import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import numerosStore from './store/Numeros.store';


const store = configureStore({
  reducer: {
    numeros: numerosStore,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);


reportWebVitals();

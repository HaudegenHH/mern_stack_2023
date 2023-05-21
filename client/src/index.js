import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// because of jsconfig.json "src" is prefixed: /src/state/index.js
// ..and index.js can be omitted
import globalReducer from "state";

// with these 3 imports, you can setup the store
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

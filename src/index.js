import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import  store  from './store';
import { Context } from './context';
import BikeService from './services';

// create bikeService for Context
const bikeService = new BikeService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={bikeService}>
        <App />
      </Context.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



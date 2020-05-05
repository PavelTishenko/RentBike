import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import store from './store';
import { Context } from './context';
import BikeService from './services';
import ErrorBoundry from './components/ErrorBoundry';

// create bikeService for Context
const bikeService = new BikeService();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Provider store={store}>
        <Context.Provider value={bikeService}>
          <App />
        </Context.Provider>
      </Provider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);



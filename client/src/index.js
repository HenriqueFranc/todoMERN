import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeConfig from './redux/StoreConfig'
import {Provider} from 'react-redux'

const store = storeConfig(); 


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



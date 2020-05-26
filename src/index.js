import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import { Provider } from 'react-redux';
import store1 from './Store'
//Provider cung cap store cho toan bo ung dung, nen minh se import store o day
//Thuoc tinh store la thuoc tinh bat buoc cua provider
//Gan store=store1 de cung cap store1 cho toan bo ung dung
ReactDOM.render(
  <Provider store={store1}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
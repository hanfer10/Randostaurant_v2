import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
document.getElementById('main'));

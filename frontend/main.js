import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';

ReactDOM.render(
  <Provider store={store}>
    <NavigationBar />
    <Routes />
  </Provider>,
document.getElementById('main'));

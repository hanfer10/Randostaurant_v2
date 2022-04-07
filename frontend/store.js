import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux';

let middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
  createLogger({ collapsed: true }
)];

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

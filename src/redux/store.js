import { createStore, applyMiddleware, compose } from 'redux';
import { initState } from './init-state';
import reducer from 'redux/reducers';
import thunk from 'redux-thunk';
import {
  resetStateReducer,
  batch,
  enableBatch,
} from 'shared';

const isDevelopment = process.env.NODE_ENV === 'development';
const composeEnhancers = isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose : compose;

const middleware = [
  thunk,
  batch,
];

export const store = createStore(
  enableBatch(resetStateReducer(reducer)),
  initState,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

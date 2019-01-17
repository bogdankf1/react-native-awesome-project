import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';
import { compose } from 'redux';
import logger from 'redux-logger'

const func = () => {}

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || func;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware, logger))

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    // enhancer
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
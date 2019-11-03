/**
 * Create the store with dynamic reducers
 */
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist-immutable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares), autoRehydrate()];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

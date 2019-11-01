import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import createReducer, { rootReducer } from 'App/Utils/reducers';

export default () => {
  return configureStore(rootReducer, rootSaga, createReducer);
};

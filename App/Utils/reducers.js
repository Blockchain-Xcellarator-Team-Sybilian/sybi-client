import { reducer } from 'resaga';
import { combineReducers } from 'redux';
import { USERLOGOUT } from 'App/Constants';
import { USER_DATA_STORE } from 'App/Datastores';
import { reducer as ExampleReducer } from 'App/Stores/Example/Reducers';

// tell resaga to clear store on USERLOGOUT
export const customReducer = {
  [USERLOGOUT]: (store) => store.clear(),
};

export const rootReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */
  example: ExampleReducer,
  [USER_DATA_STORE]: reducer(USER_DATA_STORE, customReducer),
});

export default (injectedReducers = {}) => combineReducers({ ...rootReducer, ...injectedReducers });

import { reducer } from 'resaga';
import { combineReducers } from 'redux';
import { USERLOGOUT } from 'App/Constants';
import { USER_DATA_STORE } from 'App/Datastores';

// tell resaga to clear store on USERLOGOUT
export const customReducer = {
  [USERLOGOUT]: (store) => store.clear(),
};

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    [USER_DATA_STORE]: reducer(USER_DATA_STORE, customReducer),
    ...injectedReducers,
  });
}

/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { reducer } from 'resaga';
import { USERLOGOUT } from 'App/Constants';
import { combineReducers } from 'redux-immutable';
import { APP_DATA_STORE, USER_DATA_STORE, USER_PREFERENCE } from './datastores';

// tell resaga to clear store on USERLOGOUT
export const customReducer = {
  [USERLOGOUT]: store => store.clear(),
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    [APP_DATA_STORE]: reducer(APP_DATA_STORE, customReducer),
    [USER_DATA_STORE]: reducer(USER_DATA_STORE, customReducer),
    [USER_PREFERENCE]: reducer(USER_PREFERENCE, customReducer),
    ...injectedReducers,
  });
}

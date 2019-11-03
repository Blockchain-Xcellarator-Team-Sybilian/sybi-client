/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { reducer } from 'resaga';
import { USERLOGOUT } from 'App/Constants';
import { combineReducers } from 'redux-immutable';
import { USER_DATA_STORE } from './datastores';

// tell resaga to clear store on USERLOGOUT
export const customReducer = {
  [USERLOGOUT]: store => store.clear(),
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    [USER_DATA_STORE]: reducer(USER_DATA_STORE, customReducer),
    ...injectedReducers,
  });
}

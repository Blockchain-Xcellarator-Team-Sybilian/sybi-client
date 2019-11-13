import { APP_DATA_STORE } from 'App/Stores/datastores';
import { APP_SETUP_API, UPDATE_DONE_INTRO } from 'App/Apis';

export const CONFIG = {
  // name of the API to be called globally
  name: APP_SETUP_API,

  // requests of the API to be called globally
  requests: {
    [UPDATE_DONE_INTRO]: () => {
      return true;
    },
  },

  // return data from requests can be processed here
  processResult: {
    [UPDATE_DONE_INTRO]: doneIntro => ({ doneIntro }),
  },

  // set the key and path from the redux store you want to change
  setValue: {
    doneIntro: [APP_DATA_STORE, 'doneIntro'],
  },

  manuallySubscribe: true, // will not auto-subscribe to all values in `@@values`
};

import { USER_DATA_STORE } from 'App/Datastores';
import { SAMPLE_API, GET_WELCOME_MESSAGE } from 'App/Apis';

export const CONFIG = {
  // name of the API to be called globally
  name: SAMPLE_API,

  // requests of the API to be called globally
  requests: {
    [GET_WELCOME_MESSAGE]: (name) => {
      return `Hello ${name}, welcome to Educado!`;
    },
  },

  // return data from requests can be processed here
  processResult: {},

  // set the key and path from the redux store you want to change
  setValue: {
    message: [USER_DATA_STORE, 'message'],
  },

  // manuallySubscribe: true, // will not auto-subscribe to all values in `@@values`
};

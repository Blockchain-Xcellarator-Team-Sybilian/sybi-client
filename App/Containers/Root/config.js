import { APP_DATA_STORE, USER_PREFERENCE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    theme: [USER_PREFERENCE, 'theme'],
    doneIntro: [APP_DATA_STORE, 'doneIntro'],
  }
};

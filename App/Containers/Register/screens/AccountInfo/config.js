import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    username: [REGISTER_DATA_STORE, 'username'],
    password: [REGISTER_DATA_STORE, 'password'],
  },
  setValue: {
    username: [REGISTER_DATA_STORE, 'username'],
    password: [REGISTER_DATA_STORE, 'password'],
  }
};

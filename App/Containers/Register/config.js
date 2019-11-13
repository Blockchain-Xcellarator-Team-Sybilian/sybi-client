import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    currentPage: [REGISTER_DATA_STORE, 'currentPage'],
    hasGuarantor: [REGISTER_DATA_STORE, 'hasGuarantor'],
  },
  setValue: {
    currentPage: [REGISTER_DATA_STORE, 'currentPage'],
  }
};

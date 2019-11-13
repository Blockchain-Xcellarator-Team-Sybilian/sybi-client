import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    email: [REGISTER_DATA_STORE, 'email'],
    phone: [REGISTER_DATA_STORE, 'phone'],
    sameAddress: [REGISTER_DATA_STORE, 'sameAddress'],
    presentAddress: [REGISTER_DATA_STORE, 'presentAddress'],
    permanentAddress: [REGISTER_DATA_STORE, 'permanentAddress'],
    sourceOfFunds: [REGISTER_DATA_STORE, 'sourceOfFunds'],
  },
  setValue: {
    email: [REGISTER_DATA_STORE, 'email'],
    phone: [REGISTER_DATA_STORE, 'phone'],
    sameAddress: [REGISTER_DATA_STORE, 'sameAddress'],
    presentAddress: [REGISTER_DATA_STORE, 'presentAddress'],
    permanentAddress: [REGISTER_DATA_STORE, 'permanentAddress'],
    sourceOfFunds: [REGISTER_DATA_STORE, 'sourceOfFunds'],
  }
};

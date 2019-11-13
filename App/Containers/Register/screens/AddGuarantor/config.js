import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    hasGuarantor: [REGISTER_DATA_STORE, 'hasGuarantor'],
    guarantorName: [REGISTER_DATA_STORE, 'guarantorName'],
    guarantorEmail: [REGISTER_DATA_STORE, 'guarantorEmail'],
    guarantorPhone: [REGISTER_DATA_STORE, 'guarantorPhone'],
  },
  setValue: {
    hasGuarantor: [REGISTER_DATA_STORE, 'hasGuarantor'],
    guarantorName: [REGISTER_DATA_STORE, 'guarantorName'],
    guarantorEmail: [REGISTER_DATA_STORE, 'guarantorEmail'],
    guarantorPhone: [REGISTER_DATA_STORE, 'guarantorPhone'],
  }
};

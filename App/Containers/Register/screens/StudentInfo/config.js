import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    name: [REGISTER_DATA_STORE, 'name'],
    school: [REGISTER_DATA_STORE, 'school'],
    dateOfBirth: [REGISTER_DATA_STORE, 'dob'],
    placeOfBirth: [REGISTER_DATA_STORE, 'pob'],
    studentNumber: [REGISTER_DATA_STORE, 'studentNumber'],
  },
  setValue: {
    name: [REGISTER_DATA_STORE, 'name'],
    school: [REGISTER_DATA_STORE, 'school'],
    dateOfBirth: [REGISTER_DATA_STORE, 'dob'],
    placeOfBirth: [REGISTER_DATA_STORE, 'pob'],
    studentNumber: [REGISTER_DATA_STORE, 'studentNumber'],
  }
};

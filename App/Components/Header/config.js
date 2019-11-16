import { USER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    name: [USER_DATA_STORE, 'name'],
    email: [USER_DATA_STORE, 'email'],
    phone: [USER_DATA_STORE, 'phone'],
    school: [USER_DATA_STORE, 'school'],
    username: [USER_DATA_STORE, 'username'],
    dateOfBirth: [USER_DATA_STORE, 'dateOfBirth'],
    studentNumber: [USER_DATA_STORE, 'studentNumber'],
  },
};

import { USER_DATA_STORE } from 'App/Stores/datastores';
import { USER_API, LOGIN } from 'App/Apis';

export const CONFIG = {
  // name of the API to be called globally
  name: USER_API,

  // requests of the API to be called globally
  requests: {
    [LOGIN]: ({
      username, password, name, school, dateOfBirth,
      phone, studentNumber, email,
    }) => {
      return {
        name: name || 'Juan Doe',
        phone: phone || '09151234567',
        username: username || 'juandoe',
        email: email || 'juandoe@email.com',
        dateOfBirth: dateOfBirth || '1997-30-01',
        studentNumber: studentNumber || '2017-12345',
        school: school || 'Pamantasan ng Lungsod ng Maynila',
      };
    },
  },

  // return data from requests can be processed here
  processResult: {
    [LOGIN]: data => ({ ...data }),
  },

  // set the key and path from the redux store you want to change
  setValue: {
    name: [USER_DATA_STORE, 'name'],
    email: [USER_DATA_STORE, 'email'],
    phone: [USER_DATA_STORE, 'phone'],
    school: [USER_DATA_STORE, 'school'],
    username: [USER_DATA_STORE, 'username'],
    dateOfBirth: [USER_DATA_STORE, 'dateOfBirth'],
    studentNumber: [USER_DATA_STORE, 'studentNumber'],
  },

  manuallySubscribe: true, // will not auto-subscribe to all values in `@@values`
};

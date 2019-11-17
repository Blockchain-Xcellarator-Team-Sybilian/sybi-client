import { REGISTER_DATA_STORE } from 'App/Stores/datastores';

export const CONFIG = {
  value: {
    // STUDENT INFO
    name: [REGISTER_DATA_STORE, 'name'],
    username: [REGISTER_DATA_STORE, 'username'],
    password: [REGISTER_DATA_STORE, 'password'],
    email: [REGISTER_DATA_STORE, 'email'],
    phone: [REGISTER_DATA_STORE, 'phone'],
    school: [REGISTER_DATA_STORE, 'school'],
    dateOfBirth: [REGISTER_DATA_STORE, 'dob'],
    placeOfBirth: [REGISTER_DATA_STORE, 'pob'],
    sourceOfFunds: [REGISTER_DATA_STORE, 'sourceOfFunds'],
    studentNumber: [REGISTER_DATA_STORE, 'studentNumber'],
    presentAddress: [REGISTER_DATA_STORE, 'presentAddress'],
    permanentAddress: [REGISTER_DATA_STORE, 'permanentAddress'],

    // GUARANTOR PERSONAL INFO
    hasGuarantor: [REGISTER_DATA_STORE, 'hasGuarantor'],
    guarantorName: [REGISTER_DATA_STORE, 'guarantorName'],
    guarantorEmail: [REGISTER_DATA_STORE, 'guarantorEmail'],
    guarantorPhone: [REGISTER_DATA_STORE, 'guarantorPhone'],
    guarantorDate: [REGISTER_DATA_STORE, 'guarantorDate'],
    guarantorPlace: [REGISTER_DATA_STORE, 'guarantorPlace'],
    guarantorPresent: [REGISTER_DATA_STORE, 'guarantorPresent'],
    guarantorPermanent: [REGISTER_DATA_STORE, 'guarantorPermanent'],
    guarantorSource: [REGISTER_DATA_STORE, 'guarantorSource'],
  },
};

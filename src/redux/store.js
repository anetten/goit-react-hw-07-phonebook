import { contactsReducer } from '../redux/contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

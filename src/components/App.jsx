import { Contacts, Filter, PhoneBook } from './index.js';
import { fetchContacts } from '../redux/contacts/operations.js';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <PhoneBook />

      <h2>Contacts</h2>
      {isLoading ? <p>Loading...</p> : <Filter />}
      <Contacts />
    </div>
  );
};

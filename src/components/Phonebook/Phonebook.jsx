import React, { useState } from 'react';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const PhoneBook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();
    console.log('filter: ', filter);
    console.log('contacts: ', contacts);

    const filteredContactsList = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
    console.log('filteredContactsList: ', filteredContactsList);
    const formData = { name, number };

    const hasDuplicate = filteredContactsList.some(
      contact =>
        (contact.name &&
          contact.name.toLowerCase() === formData.name.toLowerCase()) ||
        contact.number === formData.number
    );

    if (hasDuplicate) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...formData,
    };
    const action = addContact(newContact);
    dispatch(action);

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} action="" onSubmit={handleAddContact}>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

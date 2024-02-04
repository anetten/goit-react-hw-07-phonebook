import React, { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const PhoneBook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContactsList = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();

    if (!filteredContactsList) {
      return;
    }

    const contactName = event.target.name.value.trim();
    const contactNumber = event.target.number.value.trim();

    const hasDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (hasDuplicate) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    dispatch(addContact(newContact));

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

////////

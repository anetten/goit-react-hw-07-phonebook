// import { useDispatch, useSelector } from 'react-redux';

// import { deleteContact } from '../../redux/contacts/operations';

// import css from './Contacts.module.css';

// export const Contacts = () => {
//   const filter = useSelector(state => state.contacts.filter);
//   const contacts = useSelector(state => state.contacts.items);
//   const isLoading = useSelector(state => state.contacts.isLoading);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.trim().toLowerCase())
//   );

//   const dispatch = useDispatch();

//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <div className={css.contacts}>
//       {isLoading ? (
//         <p>Loading contacts...</p>
//       ) : (
//         <ul>
//           {filteredContacts.map(contact => (
//             <li key={contact.id}>
//               {contact.name}: {contact.number}
//               <button onClick={() => onDeleteContact(contact.id)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';

import css from './Contacts.module.css';

export const Contacts = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts}>
      {isLoading ? (
        <p>Loading contacts...</p>
      ) : (
        <>
          {contacts && contacts.length > 0 ? (
            <ul>
              {contacts
                .filter(contact =>
                  contact.name
                    .toLowerCase()
                    .includes(filter.trim().toLowerCase())
                )
                .map(contact => (
                  <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button onClick={() => onDeleteContact(contact.id)}>
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          ) : (
            <p>No contacts found</p>
          )}
        </>
      )}
    </div>
  );
};

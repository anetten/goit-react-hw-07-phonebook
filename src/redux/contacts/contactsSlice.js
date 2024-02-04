// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const contacts = await response.json();
//     return contacts;
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contactData => {
//     const response = await fetch(
//       'https://65bb924d52189914b5bc88a0.mockapi.io/contacts',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(contactData),
//       }
//     );
//     const newContact = await response.json();
//     return newContact;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await fetch(
//       `https://65bb924d52189914b5bc88a0.mockapi.io/contacts/${contactId}`,
//       {
//         method: 'DELETE',
//       }
//     );
//     return contactId;
//   }
// );

// const initialState = {
//   contacts: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     setFilter: (state, action) => {
//       state.contacts.filter = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.items = state.contacts.items.filter(
//           contact => contact.id !== action.payload
//         );
//       });
//   },
// });

// export const { setFilter } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const contacts = await response.json();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await fetch(
      'https://65bb924d52189914b5bc88a0.mockapi.io/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      }
    );
    const newContact = await response.json();
    return newContact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await fetch(
      `https://65bb924d52189914b5bc88a0.mockapi.io/contacts/${contactId}`,
      {
        method: 'DELETE',
      }
    );
    return contactId;
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

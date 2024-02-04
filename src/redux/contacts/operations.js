import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65bb924d52189914b5bc88a0.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contact');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await axios.post('/contact', contactData);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contact/${contactId}`);
    return contactId;
  }
);

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://your-api-endpoint.com';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contact');
//   return response.data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contactData => {
//     const response = await axios.post('/contact', contactData);
//     return response.data;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await axios.delete(`/contact/${contactId}`);
//     return contactId;
//   }
// );

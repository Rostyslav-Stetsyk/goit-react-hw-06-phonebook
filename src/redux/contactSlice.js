import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './action';

const initState = [
  {
    name: 'Rostyslav',
    number: '123-45-67',
    id: 'id-iQ-',
  },
  {
    name: 'Sasha',
    number: '123-45-68',
    id: 'id-iU-',
  },
];

export const contactsReducer = createReducer(initState, builder =>
  builder
    .addCase(addContact, (state, action) => [...state, action.payload])
    .addCase(deleteContact, (state, action) =>
      state.filter(el => el.id !== action.payload)
    )
);

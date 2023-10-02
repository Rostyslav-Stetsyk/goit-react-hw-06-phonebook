import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const actionType = Object.freeze({
  addContact: 'contacts/add',
  deleteContact: 'contacts/delete',
  setFilter: 'filter/set',
});

export const addContact = createAction(actionType.addContact, contact => {
  return {
    payload: {
      ...contact,
      id: 'id' + nanoid(3),
    },
  };
});

export const deleteContact = createAction(actionType.deleteContact);

export const setFilter = createAction(actionType.setFilter);

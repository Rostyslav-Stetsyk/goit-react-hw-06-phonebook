import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './action';

export const filterReducer = createReducer('', builder =>
  builder.addCase(setFilter, (_, { payload }) => payload)
);

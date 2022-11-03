import { adminSlice } from './adminSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>
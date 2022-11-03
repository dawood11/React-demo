import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AdminStateType {
  adminMode: boolean;
};

const initialState: AdminStateType = {
  adminMode: false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    toggleAdminMode: (state) => { state.adminMode = !state.adminMode },
    customToggleAdminMode: (state, action: PayloadAction<boolean>) => { state.adminMode = action.payload }
  }
});

export const { toggleAdminMode, customToggleAdminMode } = adminSlice.actions;
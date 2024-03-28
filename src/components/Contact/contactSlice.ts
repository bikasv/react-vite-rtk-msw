import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: '',
  phone: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactDetails: (state, action) => {
      state = action.payload as typeof initialState;

      return state;
    },
  },
});

export const { setContactDetails } = contactSlice.actions;

export default contactSlice.reducer;

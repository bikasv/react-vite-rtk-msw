import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  dob: '',
  first: '',
  gender: undefined,
  last: '',
  title: undefined,
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setAboutDetails: (state, action) => {
      state = action.payload as typeof initialState;

      return state;
    },
  },
});

export const { setAboutDetails } = aboutSlice.actions;

export default aboutSlice.reducer;

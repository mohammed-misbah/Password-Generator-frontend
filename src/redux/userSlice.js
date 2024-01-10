import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    user: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    clearUserDetails: (state) => {
      state.user = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;

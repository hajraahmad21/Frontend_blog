import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: null,
  },
  reducers: {
    isAuthenticated: (state, action) => {
      state.userAuth = action.payload;
    },
    logout: (state) => {
      state.userAuth = null;
    },
  },
});
const authReducer = authSlice.reducer;
export default authReducer;
export const { isAuthenticated, logout } = authSlice.actions;
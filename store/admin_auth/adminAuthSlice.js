import { REFRESH, TOKEN, USER_ID } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  user: undefined,
  access: undefined,
  refresh: undefined,
  user_id: undefined,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (state.isReady) return;

      state.auth = true;
      state.user = action.payload.user;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.user_id = action.payload.user_id;

      localStorage.setItem(TOKEN, action.payload.access);
      localStorage.setItem(REFRESH, action.payload.refresh);
      localStorage.setItem(USER_ID, action.payload.user_id);

      state.isReady = true;
    },

    logout: (state) => {
      state.auth = false;
      state.user = undefined;
      state.access = undefined;
      state.refresh = undefined;
      state.user_id = undefined;

      localStorage.removeItem(TOKEN);
      localStorage.removeItem(REFRESH);
      localStorage.removeItem(USER_ID);

      state.isReady = false;
    },
  },
});

export const { login, logout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;

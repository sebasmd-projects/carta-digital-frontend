import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (state.count == 0) return;
      state.count--;
    },
    resetCount(state, action) {
      if (action.payload < 0) state.count = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, subtractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;

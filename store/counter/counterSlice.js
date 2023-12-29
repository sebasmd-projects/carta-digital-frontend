import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

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

export const { addOne, subtractOne, resetCount, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;

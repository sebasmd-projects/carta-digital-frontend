import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@store/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

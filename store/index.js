import { configureStore } from "@reduxjs/toolkit";

import adminAuthReducer from "@store/admin_auth/adminAuthSlice";
import counterReducer from "@store/counter/counterSlice";

import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    counter: counterReducer,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

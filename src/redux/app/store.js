import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice";
import counterReducer from "../features/counterSlice";
import usersReducer from "../features/usersSlice";
export const store = configureStore({
   reducer: {
      auth: authReducer,
      counter: counterReducer,
      users: usersReducer
   }, 
});
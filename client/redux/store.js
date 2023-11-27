import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// HOST
export const server = "https://combative-cod-life-jacket.cyclic.app/api/v1";

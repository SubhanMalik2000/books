import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlices";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;

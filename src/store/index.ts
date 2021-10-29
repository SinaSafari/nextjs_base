import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/store/counter/counterSclice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

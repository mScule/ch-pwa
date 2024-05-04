import { configureStore } from "@reduxjs/toolkit";
import intlSlice from "./slices/intlSlice";

export const store = configureStore({
  reducer: {
    intl: intlSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

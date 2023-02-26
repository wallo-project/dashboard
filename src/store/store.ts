import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
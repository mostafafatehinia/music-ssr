import { configureStore } from "@reduxjs/toolkit";

import { apiPool } from "@/services/base";

import SearchTitleReducer from "./slices/searchTitle";

export const store = configureStore({
  reducer: {
    searchTitle: SearchTitleReducer,
    [apiPool.reducerPath]: apiPool.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPool.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

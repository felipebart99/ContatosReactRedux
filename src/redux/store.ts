import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./reducers/contatos.ts";

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

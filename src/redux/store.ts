import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./reducers/contatos.ts";
import filtroReducer from "./reducers/filtro.ts";

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

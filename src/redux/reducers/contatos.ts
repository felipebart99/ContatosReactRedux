import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatosSlice = createSlice({
  name: "contatos",
  initialState: {
    itens: [
      new Contato(
        "Carla",
        "amigos",
        "carlinha@123",
        "755657868764",
        Date.now()
      ),
      new Contato(
        "Ana",
        "trabalho",
        "aninha@gmail",
        "755657868764",
        Date.now() + 1
      ),
      new Contato(
        "Pedro",
        "amigos",
        "petter@123",
        "755657868764",
        Date.now() + 2
      ),
    ],
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      );
      if (index !== -1) {
        state.itens[index] = action.payload;
      }
    },
  },
});

export const { remover, editar } = contatosSlice.actions;
export default contatosSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatosSlice = createSlice({
  name: "contatos",
  initialState: [
    new Contato("Carla", "amigos", "carlinha@123", "755657868764", 1),
    new Contato("Ana", "trabalho", "aninha@gmail", "755657868764", 1),
    new Contato("Pedro", "amigos", "petter@123", "755657868764", 1),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload);
    },
  },
});
export const { remover } = contatosSlice.actions;
export default contatosSlice.reducer;

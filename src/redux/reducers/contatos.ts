import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contato {
  id: number;
  nome: string;
  tag: string;
  email: string;
  telefone: string;
}

const contatosSlice = createSlice({
  name: "contatos",
  initialState: {
    itens: [
      {
        id: Date.now(),
        nome: "Carla soares",
        tag: "amigos",
        email: "carlinha@123",
        telefone: "755657868764",
      },
      {
        id: Date.now() + 1,
        nome: "Ana tenorio",
        tag: "trabalho",
        email: "aninha@gmail",
        telefone: "755657868764",
      },
      {
        id: Date.now() + 2,
        nome: "Pedro gomes",
        tag: "familia",
        email: "petter@123",
        telefone: "755657868764",
      },
    ] as Contato[],
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
    adicionar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const novoContato = { ...action.payload, id: Date.now() };
      state.itens.push(novoContato);
      console.log("Novo contato adicionado:", novoContato); // Log para depuração
    },
  },
});

export const { remover, editar, adicionar } = contatosSlice.actions;
export default contatosSlice.reducer;

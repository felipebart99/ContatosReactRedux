import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContadorState {
  valor: number;
}

const initialState: ContadorState = { valor: 0 };

const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.valor += 1;
    },
    decrementar: (state) => {
      state.valor -= 1;
    },
    incrementarPorValor: (state, action: PayloadAction<number>) => {
      state.valor += action.payload;
    },
  },
});

export const { incrementar, decrementar, incrementarPorValor } =
  contadorSlice.actions;
export default contadorSlice.reducer;

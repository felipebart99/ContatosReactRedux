import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
  termo?: string;
  criterio: "familia" | "trabalho" | "amigos" | "favoritos" | "todos";
};

const initialState: FiltroState = {
  termo: "",
  criterio: "todos",
};
const FiltroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
    },
  },
});

export const { alterarTermo, alteraFiltro } = FiltroSlice.actions;
export default FiltroSlice.reducer;

import FiltroCard from "../../components/FiltroCard";
import { Aside, Campo, Filtros } from "./styles";

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="buscar" />
      <Filtros>
        <FiltroCard legenda="Familia" />
        <FiltroCard legenda="Trabalho" />
        <FiltroCard legenda="Amigos" />
        <FiltroCard legenda="Favoritos" ativo />
      </Filtros>
    </div>
  </Aside>
);

export default BarraLateral;

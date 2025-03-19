import FiltroCard from "../../components/FiltroCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Aside, Campo, Filtros } from "./styles";
import { alterarTermo } from "../../redux/reducers/filtro";
import BotaoAdicionar from "../../components/BotaoAdicionar";

const BarraLateral = () => {
  const dispatch = useAppDispatch();
  const { termo } = useAppSelector((state) => state.filtro);
  return (
    <Aside>
      <div>
        <Campo
          type="text"
          placeholder="buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <Filtros>
          <FiltroCard criterio="familia" legenda="Familia" />
          <FiltroCard criterio="trabalho" legenda="Trabalho" />
          <FiltroCard criterio="amigos" legenda="Amigos" />
          <FiltroCard criterio="favoritos" legenda="Favoritos" />
        </Filtros>
      </div>
      <BotaoAdicionar />
    </Aside>
  );
};

export default BarraLateral;

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { alteraFiltro } from "../../redux/reducers/filtro";
import * as S from "./styles";

export type Props = {
  legenda: string;
  criterio: "familia" | "trabalho" | "amigos" | "favoritos" | "todos";
};
const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useAppDispatch();
  const { filtro } = useAppSelector((state) => state);

  const verificaEstaAtivo = () => {
    return filtro.criterio === criterio;
  };

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
      })
    );
  };
  return (
    <S.Card ativo={verificaEstaAtivo()} onClick={filtrar}>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
};

export default FiltroCard;

import * as S from "./styles";

export type Props = {
  ativo?: boolean;
  legenda: string;
};
const FiltroCard = ({ ativo, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Label>{legenda}</S.Label>
  </S.Card>
);

export default FiltroCard;

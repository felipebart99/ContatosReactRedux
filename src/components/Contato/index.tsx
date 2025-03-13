import { useState } from "react";
import * as S from "./styles";

type Props = {
  nome: string;
  tag: string;
  email: string;
  telefone: string;
};
const Contato = ({ nome, tag, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag tag={tag}>{tag}</S.Tag>
      <S.Email>{email}</S.Email>
      <S.Telefone>{telefone}</S.Telefone>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;

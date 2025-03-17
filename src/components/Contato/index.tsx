import { useEffect, useState } from "react";
import * as S from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { remover, editar } from "../../redux/reducers/contatos";
import ContatoClass from "../../models/Contato";

type Props = ContatoClass;
const Contato = ({
  nome: nomeOriginal,
  tag: tagOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id,
}: Props) => {
  const dispatch = useAppDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNome] = useState(nomeOriginal);
  const [tag, setTag] = useState(tagOriginal);
  const [email, setEmail] = useState(emailOriginal);
  const [telefone, setTelefone] = useState(telefoneOriginal);

  useEffect(() => {
    setNome(nomeOriginal);
    setTag(tagOriginal);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal);
  }, [nomeOriginal, tagOriginal, emailOriginal, telefoneOriginal]);

  const handleSalvar = () => {
    dispatch(editar({ id, nome, tag, email, telefone }));
    setEstaEditando(false);
  };

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <S.Select value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="amigos">Amigos</option>
            <option value="trabalho">Trabalho</option>
            <option value="familia">Família</option>
          </S.Select>
          <S.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <S.Input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
        </>
      ) : (
        <>
          <S.Nome>{nome}</S.Nome>
          <S.Tag tag={tag}>{tag}</S.Tag>
          <S.Email>{email}</S.Email>
          <S.Telefone>{telefone}</S.Telefone>
        </>
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={handleSalvar}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;

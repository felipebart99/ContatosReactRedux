import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { adicionar } from "../../redux/reducers/contatos";
import BarraLateral from "../../containers/BarraLateral";
import * as S from "../../components/Contato/styles.ts";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [tag, setTag] = useState("amigos");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  // Validação de nome com sobrenome
  const validaNomeComSobrenome = (nome: string) => {
    return /^[A-Za-zÀ-ú]+ [A-Za-zÀ-ú]+$/.test(nome);
  };

  // Validação de email
  const validaEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validação de telefone (10 ou 11 dígitos)
  const validaTelefone = (telefone: string) => {
    return /^\d{10,11}$/.test(telefone);
  };

  const adiciona = () => {
    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Valida o nome
    if (!validaNomeComSobrenome(nome)) {
      alert("Por favor, insira um nome e sobrenome.");
      return;
    }

    // Valida o email
    if (!validaEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Valida o telefone
    if (!validaTelefone(telefone)) {
      alert("Por favor, insira um telefone válido (10 ou 11 dígitos).");
      return;
    }

    // Adiciona o contato
    dispatch(adicionar({ nome, tag, email, telefone }));
    alert("Contato adicionado com sucesso!");
    setNome("");
    setTag("amigos");
    setEmail("");
    setTelefone("");
    navigate("/");
  };

  const cancela = () => {
    navigate("/");
  };

  return (
    <>
      <BarraLateral />
      <div>
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
        <S.BotaoSalvar onClick={adiciona}>FINALIZAR</S.BotaoSalvar>
        <S.BotaoCancelarRemover onClick={cancela}>
          CANCELAR
        </S.BotaoCancelarRemover>
      </div>
    </>
  );
};

export default Cadastro;

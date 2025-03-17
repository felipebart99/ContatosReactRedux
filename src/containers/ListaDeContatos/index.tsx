import Contato from "../../components/Contato";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "./styles";

const ListaDeContatos = () => {
  const { itens } = useAppSelector((state) => state.contatos);

  return (
    <Container>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              tag={t.tag}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeContatos;

import Contato from "../../components/Contato";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "./styles";

const ListaDeContatos = () => {
  const { itens } = useAppSelector((state) => state.contatos);
  const { termo, criterio } = useAppSelector((state) => state.filtro);

  const filtraContatos = () => {
    let constatosFiltrados = itens;
    if (termo) {
      constatosFiltrados = constatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );
      if (criterio === "amigos") {
        constatosFiltrados = constatosFiltrados.filter(
          (item) => item.tag === criterio
        );
      } else if (criterio === "familia") {
        constatosFiltrados = constatosFiltrados.filter(
          (item) => item.tag === criterio
        );
      } else if (criterio === "favoritos") {
        constatosFiltrados = constatosFiltrados.filter(
          (item) => item.tag === criterio
        );
      } else if (criterio === "trabalho") {
        constatosFiltrados = constatosFiltrados.filter(
          (item) => item.tag === criterio
        );
      }
      return constatosFiltrados;
    } else {
      return itens;
    }
  };
  return (
    <Container>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
      </ul>
      <ul>
        {filtraContatos().map((t) => (
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

import { useEffect } from "react";
import Contato from "../../components/Contato";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "./styles";

const ListaDeContatos = () => {
  const { itens } = useAppSelector((state) => state.contatos);
  const { termo, criterio } = useAppSelector((state) => state.filtro);

  useEffect(() => {
    console.log("Contatos atualizados:", itens);
  }, [itens]);

  const filtraContatos = () => {
    let constatosFiltrados = itens;
    if (termo) {
      constatosFiltrados = constatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      );
    }
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
  };
  return (
    <Container>
      <ul>
        {filtraContatos().map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              tag={contato.tag}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeContatos;

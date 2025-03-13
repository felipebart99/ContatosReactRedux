import Contato from "../../components/Contato";
import { Container } from "./styles";

const contatos = [
  {
    nome: "Felipe",
    tag: "familia",
    email: "felipebart1999@gmail.com",
    telefone: "81998602739",
  },
  {
    nome: "Erik",
    tag: "amigos",
    email: "felipebart1999@gmail.com",
    telefone: "81998602739",
  },
  {
    nome: "Paula",
    tag: "trabalho",
    email: "felipebart1999@gmail.com",
    telefone: "81998602739",
  },
];
const ListaDeContatos = () => (
  <Container>
    <ul>
      {contatos.map((t) => (
        <li key={t.nome}>
          <Contato
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

export default ListaDeContatos;

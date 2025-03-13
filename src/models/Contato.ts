class Contato {
  nome: string;
  tag: string;
  email: string;
  telefone: string;
  id: number;

  constructor(
    nome: string,
    tag: string,
    email: string,
    telefone: string,
    id: number
  ) {
    this.nome = nome;
    this.tag = tag;
    this.email = email;
    this.telefone = telefone;
    this.id = id;
  }
}
export default Contato;

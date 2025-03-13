import styled from "styled-components";

type TagProps = {
  tag?: string;
};

function retornaCorDeFundo(props: TagProps): string {
  if ("tag" in props) {
    if (props.tag === "familia") return "#8d4881";
    if (props.tag === "trabalho") return "#fdbe57";
    if (props.tag === "amigos") return "#006ab3";
  }
  return "#555";
}

export const Card = styled.div`
  background-color: rgba(33, 6, 6, 0.1);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px;
`;

export const Nome = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;
export const Tag = styled.span<TagProps>`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  display: block;
  width: max-content;
`;
export const Email = styled.span`
  font-size: 1rem;
  color: #555;
`;

export const Telefone = styled.span`
  font-size: 1rem;
  color: #555;
`;

export const BarraAcoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  align-itens: center;
`;

export const Botao = styled.button`
  background: #2f3640;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
export const BotaoSalvar = styled(Botao)`
  background-color: green;
`;
export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`;

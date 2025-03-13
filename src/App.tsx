import EstiloGlobal, { Container } from "./styles";
import BarraLateral from "./containers/BarraLateral";
import ListaDeContatos from "./containers/ListaDeContatos";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;

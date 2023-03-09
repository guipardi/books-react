import './App.css';
import Lista from './Componentes/Lista';
import ListaIcones from './Componentes/ListaIcones';
import Logo from "./Componentes/Logo"
import Pesquisa from "./Componentes/Pesquisa"

function App() {
  return (
    <div className='app'>
      <header>
        <Logo></Logo>
        <Lista></Lista>
        <ListaIcones />
      </header>
      <Pesquisa placeholder="Ex : O Pequeno príncipe"/>
    </div>
  );
}

export default App;

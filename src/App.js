import './App.css';
import Lista from './Componentes/Lista';
import ListaIcones from './Componentes/ListaIcones';
import Logo from "./Componentes/Logo"

function App() {
  return (
    <div className='app'>
      <header>
        <Logo></Logo>
        <Lista></Lista>
        <ListaIcones />
      </header>
    </div>
  );
}

export default App;

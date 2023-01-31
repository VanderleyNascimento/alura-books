import './App.css';
import Logo from './components/Logo'


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'SOBRE', ]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      
       <Logo> </Logo>

       <ul className='opcoes'>
          { textoOpcoes.map( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) ) }

       </ul>
      
      </header>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import ExplorarArtigos from './pages/ExplorarArtigos';
import Cadastro from './pages/Cadastro';
import CriarArtigo from './pages/CriarArtigo';
import Home from './pages/Home';
import Login from './pages/Login';
import EditarArtigo from './pages/EditarArtigo';
import LerArtigo from './pages/LerArtigo';

//npm start react-router-dom
//Para baixar os routers que irão auxiiar no fluxo de navegação da aplicação
function App() {
  return (
    <Router>
      <a>Teste as rotas do site:</a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Faça Login</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastre-se</Link>
        </li>
        <li>
          <Link to="/artigos">Explorar artigos</Link>
        </li>
        <li>
          <Link to="/criar">Criar um artigo</Link>
        </li>
        <li>
          <Link to="/ler">Ler um artigo</Link>
        </li>
        <li>
          <Link to="/editar">Editar um artigo</Link>
        </li>
      </ul>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cadastro' element={<Cadastro/>}></Route>
          <Route path='/artigos' element={<ExplorarArtigos/>}></Route>
          <Route path='/criar' element={<CriarArtigo/>}></Route>
          <Route path='/ler' element={<LerArtigo/>}></Route>
          <Route path='/editar' element={<EditarArtigo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

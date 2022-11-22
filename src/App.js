import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import NotFound from './components/NotFound';

import ExplorarArtigos from './pages/ExplorarArtigos';
import Cadastro from './pages/Cadastro';
import CriarArtigo from './pages/CriarArtigo';
import Home from './pages/Home';
import Login from './pages/Login';
import EditarArtigo from './pages/EditarArtigo';
import LerArtigo from './pages/LerArtigo';
import MeuPerfil from './components/MeuPerfil';

//npm start react-router-dom
//Para baixar os routers que irão auxiiar no fluxo de navegação da aplicação
function App() {
  return (
    <Router>
      <Header/>
          <Link to="/"/>
          <Link to="/login"/>
          <Link to="/cadastro"/>
          <Link to="/artigos"/>
          <Link to="/criar"/>
          <Link to="/ler"/>
          <Link to="/editar"/>
          <Link to="/meuperfil"/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cadastro' element={<Cadastro/>}></Route>
          <Route path='/artigos' element={<ExplorarArtigos/>}></Route>
          <Route path='/criar' element={<CriarArtigo/>}></Route>
          <Route path='/ler/:id' element={<LerArtigo/>}></Route>
          <Route path='/editar/:id' element={<EditarArtigo/>}></Route>
          <Route path='/meuperfil' element={<MeuPerfil/>}></Route>
          <Route path='*' element={<NotFound titulo='Página não encontrada' descricao='Tente novamente mais tarde.'/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


import Menu from'./componets/Menu'
import menuP from'./componets/menuP.css'
import Conteudo from'./componets/Conteudo'
import conteudoP from "./componets/conteudoP.css"
import ContLivro from "./componets/ContLivro"
import contLivroP from "./componets/contLivroP.css"
import Rodape from './componets/Rodape'
import Cadastro from './componets/Cadastro'
import cadastroP from "./componets/cadastroP.css"
import Erro from './componets/Erro'
function App(){
    
    return(
    <div classNeme="App">

        <Menu />
        <h1 >Bem vindo a nossa Bibioteca</h1>
        <Conteudo />
        <h1> intevalo </h1>
        <Cadastro />
        <h1> intevalo </h1>

        < Erro />
        <h1> intevalo </h1>
      <ContLivro />
        <Rodape />

     
    </div>
    )
}

export default App;


/*

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
*/

 /*import'./App.css'

import Menu from'./componets/Menu'
import menuP from'./componets/menuP.css'
import Conteudo from'./componets/Conteudo'
import conteudoP from './componets/conteudoP.css'
import Rodape from './componets/Rodape'
function App(){
    
    return(
    <div classNeme="App">
        <Menu />
        <h1 >Bem vindo a nossa Bibioteca</h1>
        <Conteudo />
        <h1></h1>
        <Rodape />
     
    </div>
    )
}
export default App */
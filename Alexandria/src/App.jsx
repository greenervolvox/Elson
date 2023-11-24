import NavBar from "./componetes/NavBar"
import Rodape from "./componetes/Rodape"

import Cadastro from "./pages/Cadastro"
import Conteudo from "./pages/Conteudo"
import Home from "./pages/Home"
import Opiniao from "./pages/Opiniao"



function App(){
  let componetes
switch(window.location.pathname){
  case '/':
    componetes = <Home />
    break
    case '/Cadastro':
      componetes = <Cadastro />
      break
      case '/Conteudo':
        componetes = <Conteudo />
        break
        case '/Opiniao':
          componetes = <Opiniao />
          break
}

  return(
    <>
    <NavBar />
    {componetes}

  
   <Rodape />
    </>

  )
}

export default App


/*
import Conteudo from "./componetes/Conteudo"
import Conteudo from './pages/Cadastro'
*/

/*
1 
import NavBar from "./componetes/NavBar"

function App(){
  return(
    <NavBar />
   
  )
}

export default App
*/ 
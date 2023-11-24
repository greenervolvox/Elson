
export default function NavBar (){


return(
<nav> 

                        <div className="tex">
                            <h1>Biblioteca de Alexandria</h1>
                        </div>

                        <div className="men">
                                <ul>
                                    <li ><a href="/">Home</a></li>
                                    <li><a href="/Cadastro">Cadastro</a></li>
                                    <li><a href="/Conteudo">Livros</a></li>
                                    <li><a href="/Opiniao">Opiniões</a></li>
                                </ul>
                     </div>



  
    
    
 
    </nav>

)

}

/*


       <ul>
        <li>
            <a href="Conteudo1">conteudo 1</a> </li>
        <li><a href="Cadastro">conteudo 2</a> </li>
    </ul>


function Cadastro(){
    return(

        <div id="cadi">

            <h1>criar seu cadastro:</h1>
            <h3>veja seu pedido de forma facil,compre e aluge e tenha uma experiencia personalizada </h3><br></br><br></br>
            <form>  
                    
                            <h3>Nome</h3> 
                        <table className="tab">  
                         <div >
                        <input className="for" type="text" placeholder=" Digote seu nome" required/>
                            </div>
                        </table>

                        <h3>Genero </h3>
                        

                        <fieldset className="clik">
                             <div>
                               <label for="f">Feminino </label>
                
                              <input type="radio" id="f" name="clik" value="f" checked />
                              </div>

                             <div>
                            <label for="m">Masculino</label>
                          
                              <input type="radio" id="m" name="clik" value="m" checked />
                       
                         </div> 
                         <div>
                            <label for="n">Não definido</label>
                          
                            <input type="radio" id="n" name="clik" value="n" checked />
                            
                         </div> 
                        </fieldset>
                      

                        <h3>Data de nascimento </h3>
                        <table className="tab">
                            <div>
                            <input className="for" type="date" />
                            </div>
                          
                        </table>

                        <h3>CPF - necessario para emitir nota fiscal </h3>
                        <table className="tab">
                            <div>
                            <input className="for" type="number"  step="3" min="0" max="11" placeholder=" Digite seu CPF" />
                            </div>
                            
                        </table>

                        <h3>Telefone - caso a gente precise entarr em contato </h3>
                        <table className="tab">
                            <div>
                            <input className="for" type="number" placeholder=" Digite seu numero de telefone ex.(00)00000-0000" />
                            </div>
                         
                        </table>

                        
                        <h3>Email - informe um email valido. Você vai precisar Ativar sua conta depois de criar cadastro </h3>
                        <table className="tab">
                            <div>
                            <input className="for" type="email" placeholder=" Digite seu email" />
                            
                            </div>
                           
                        </table>

                        <h3>Receber ofertas </h3>

                        <fieldset className="clik1">
                             <div>
                               <label for="sim">Sim </label>
                
                              <input type="radio" id="sim" name="clik1" value="sim" checked />
                              </div>

                             <div>
                            <label for="nao">Não</label>
                          
                              <input type="radio" id="nao" name="clik1" value="nao" checked />
                         </div> 
                        </fieldset>

                        <h3>Compartilhar meus pedidos com parceiros para ter conteudo personalizado </h3>

                            <fieldset className="clik2">
                            <div>
                            <label for="sim">Sim </label>

                            <input type="radio" id="sim" name="clik2" value="sim" checked />
                            </div>

                            <div>
                            <label for="nao">Não</label>
                        
                            <input type="radio" id="nao" name="clik2" value="nao" checked />
                        </div> 
                        </fieldset>

                                                                    

                         <h3>Senha - precisa ter 8 caracteristicas </h3>
                        <table className="tab">
                            
                            <div for="pass">
                            <input  className="for" type="password" id="pass" nome="password" minLength="8" required/>
                            </div>
                                            <br></br>

                        
                          
                        </table>

                        <br></br>
           
            </form>
            <form>
                <table>
                           
                            <div>
                            <input className="add" type="submit" value=" criar cadastrar" />
                            </div>
                </table>
            </form>
            <form>
                <table>
                           
                            <div>
                            <input className="addl" type="submit" value=" Limpar" />
                            </div>
                </table>
            </form>
        </div>
        
        
    )
}
export default Cadastro
*/

/*
1-
export default function NavBar (){
return(
<nav> 
    <a href="/">logo</a>
    <ul>
        <li>
            <a href="Conteudo1">conteudo 1</a> </li>
        <li><a href="Conteudo2">conteudo 2</a> </li>
    </ul>
    </nav>

)

} */
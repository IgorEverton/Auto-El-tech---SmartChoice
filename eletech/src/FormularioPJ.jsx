import React from 'react'
 import styled from 'styled-components';
 import { createGlobalStyle } from 'styled-components'



function FormularioPJ() {
    const GlobalStyle = createGlobalStyle`
        body{

            border:none;
            background:linear-gradient(90deg,#067302,#C0D9BF);
            min-height:100vh;
            min-widht:600vw;
            display:flex;
            align-items:center;
            justify-content:center;


        }
    `

    const StyleFormP=styled.div`
        .container{
        box-sizing:content-box;
        background-color:white;
        padding:50px;
        widht:200px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        border-radius:10px;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.5);


        form{
            display:flex;
            flex-direction:column;
            widht200px;
            padding:10px;

            input{
                padding:10px;
                margin:10px;
                widht100%;
                border-radius:10px;
                border:0.3px solid grey;
            }
            button{
                background-color:#C0D9BF;
                border:none;
                border-radius:20px;
                margin-top:30px;
               padding:10px;
                
                
            }


        }
        
        }
  `

  return (
    <>
        <GlobalStyle/>
        <StyleFormP>
            
            <div className='container'>
                <h2>Cadastro</h2>
                <form action="">
                    
                        <input type="text" name="nmFantasia" id='nmFantasiaId' placeholder='Insira o nome fantasia'/>
                      
                  
                        <input type="text" name="nrCnpj" id='nrCnpjId' placeholder='Insira o cnpj'/>
                     
                        <input type="text" name="nrIe" id='nrIe' placeholder='Insira a escrição estadual'/>
                      
                  
                        <input type="date" name="dtFundacacao" id='dtFundacacaoId' placeholder='Insira a data de fundação'/>
                      
                  
                        <input type="email" name="email" id='emailId' placeholder='Insira o email'/>
                    
                
                        <input type="password" name="login" id='loginId' placeholder='Insira a senha'/>
    
                   
                        <button>Enviar</button>
                </form>
            </div>
            
    </StyleFormP>
    </>
   

  
  )
}

export default FormularioPJ
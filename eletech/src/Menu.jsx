import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserCircle} from "react-icons/fa"
import styled from 'styled-components'
function Menu() {
  const StyleMenu= styled.header
  `

  display:flex;
  flex-direction:column;
 
  .containerHead{
    background-color:#206A01;
    display:flex;
    justify-content: space-around;
    align-items: center;
    Color:white;
    font-family:arial;
    padding:10px;

    h1{
      text-decoration: underline;
    }
    .Perfil{
      display:flex;
      flex-direction:column;
      align-items: center;
      gap:5px
      

    }
  }

  .ContainerNav{
    widht:200px;
    display:flex;
    margin-left:20px;
    margin-right:20px;
    background-color:#428809;
    padding:15px;
    widht:200px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    justify-content:space-around;
    align-items: center;

  
    }
    
    
  }
  
  `
  return (
   <StyleMenu>
      <div className="containerHead">
        <h1>Elétech</h1>
        <div className="containerFrases">
          <h3>Mobilidade | Sustentável | Acessível</h3>
        </div>

        <div className='Perfil'>
          <FaUserCircle
          size={50}
           />
           <Link to="/juridica"  style={{ textDecoration: 'none',color:"white", fontFamily:"arial"}}>Perfil</Link>
        </div>
        
      </div>
      <div className="ContainerNav">
          
            <Link to="/Sobre" style={{ textDecoration: 'none',color:"white", fontFamily:"arial"}}>Sobre Nós</Link>
            <Link to="/Localidade" style={{ textDecoration: 'none',color:"white", fontFamily:"arial"}}>Localidade</Link>
            <Link to="/planos"  style={{ textDecoration: 'none',color:"white", fontFamily:"arial"}}>Planos</Link>
            <Link to="/Contato" style={{ textDecoration: 'none',color:"white", fontFamily:"arial"}}>Contato</Link>
          
      </div>
      </StyleMenu>
  )
}

export default Menu
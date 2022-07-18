import React from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../Functions/goTo';


export const Home = () => {

  const navigate = useNavigate()


  return (
    <div>
      Home
      <button onClick={()=>goTo(navigate,"pokedex")} >Ir para pokedex</button>
      <button onClick={()=>goTo(navigate,"detail/:id")} >Ir para details</button>
    </div>
    
  )
}
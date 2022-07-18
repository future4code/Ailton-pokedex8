import React from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../Functions/goTo';

export const Pokedex = () => {

  const navigate = useNavigate()

  return (
    <div>
      Pokedex
      <button onClick={()=>goTo(navigate,"/")} >Ir para home</button>
      
    </div>
  )
}
import React from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../Functions/goTo';


export const Details = () => {

  const navigate = useNavigate()

  return (
    <div>
      Details
      <button onClick={()=>goTo(navigate,"/")} >Ir para home</button>

    </div>
  )
}

import React from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../Functions/goTo';
import { HeaderComp } from '../Header/Header';


export const Details = () => {
  const navigate = useNavigate()
  return (
    <div>
      <HeaderComp showing1={true} showing2={true} />
      <h1>Detalhes</h1>
    </div>
  )
}

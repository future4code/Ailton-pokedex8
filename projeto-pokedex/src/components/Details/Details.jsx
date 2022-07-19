import React from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../functions/goTo';
import { HeaderComp } from '../Header/Header';
import { useParams } from 'react-router-dom';


export const Details = () => {
  const {pokemon} = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <HeaderComp showing1={true} showing2={true} />
      <h1>{`Detalhe do ${pokemon}`}</h1>
    </div>
  )
}

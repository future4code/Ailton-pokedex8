import React from 'react'
import { HeaderComp } from '../Header/Header';

export const Pokedex = () => {

  return (
    <div>
      <HeaderComp showing1={true} showing2={false}/>
      <h1>Pokedex</h1>     
    </div>
  )
}
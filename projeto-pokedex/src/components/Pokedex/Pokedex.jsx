import React from 'react'
import { HeaderComp } from '../Header/Header';
import { ContainerGeral } from './PokedexStyle';

export const Pokedex = () => {

  return (
    <div>
      <HeaderComp showing1={true} showing2={false}/>
      <ContainerGeral>
        <h1>Pokedex</h1> 
          </ContainerGeral>
        
    </div>
  )
}
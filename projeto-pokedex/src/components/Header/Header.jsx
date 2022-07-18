import React from 'react'
import { AllPokemons, AllPokemonsDiv, Header, Logo, PokedexButton, PokedexButtonDiv } from './HeaderStyle'
import PokeLogo from '../../images/pokelogo.png'

export const HeaderComp = (props) => {
    const {showing} = props
  return (
    <Header>
        <AllPokemonsDiv>
        {showing && <AllPokemons>{`< Todos Pokemons`}</AllPokemons>}
        </AllPokemonsDiv>
        <Logo src={PokeLogo}/>
        <PokedexButtonDiv>
        <PokedexButton>Pokédex</PokedexButton>
        </PokedexButtonDiv>
    </Header>  
  )
}

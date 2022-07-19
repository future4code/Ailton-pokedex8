import React from "react";
import {
  AllPokemons,
  AllPokemonsDiv,
  Header,
  Logo,
  PokedexButton,
  PokedexButtonDiv,
} from "./HeaderStyle";
import PokeLogo from "../../images/pokelogo.png";
import { goTo } from "../../functions/goTo";
import { useNavigate } from "react-router-dom";

//showingAllButtons={true} showingAddButton={false}

export const HeaderComp = (props) => {
  const { showing1, showing2 } = props;
  const navigate = useNavigate();
  return (
    <Header>
      <AllPokemonsDiv>
        {showing1 && (
          <AllPokemons
            onClick={() => goTo(navigate, "/")}
          >{`< Todos Pokemons`}</AllPokemons>
        )}
      </AllPokemonsDiv>
      <Logo src={PokeLogo} />
      <PokedexButtonDiv>
        {showing2 && (
          <PokedexButton onClick={() => goTo(navigate, "/pokedex")}>
            Pokédex
          </PokedexButton>
        )}
      </PokedexButtonDiv>
    </Header>
  );
};

import React from "react";
import { HeaderComp } from "../Header/Header";
import { ContainerGeral } from "./PokedexStyle";
import { Card } from "../Card/Card";
import { useContext } from "react";
import { Context } from "../../global/context";

export const Pokedex = () => {
  const {ownPokemons} = useContext(Context)
  return (
    <div>
      <HeaderComp showing1={true} showing2={false} />
      <ContainerGeral>
      {ownPokemons?.map(({ name }) => {
          return <Card key={name} pokemonName={name} />;
        })}
      </ContainerGeral>
    </div>
  );
};

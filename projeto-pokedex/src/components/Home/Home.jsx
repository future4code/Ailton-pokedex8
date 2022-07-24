import { HeaderComp } from "../Header/Header";
import { Card } from "../Card/Card";
import { ContainerGeral, Loading, Title } from "./HomeStyle";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { useContext } from "react";
import { Context } from "../../global/context";

export const Home = () => { 
  const {pokemon, currentPageUrl} = useContext(Context)
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemonName={name} />;
        })}
        <NavigationButtons />        
      </ContainerGeral>
    </>
  );
};

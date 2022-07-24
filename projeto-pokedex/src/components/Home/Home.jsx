import { HeaderComp } from "../Header/Header";
import { Card } from "../Card/Card";
import { ContainerGeral, Title } from "./HomeStyle";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { useContext } from "react";
import { Context } from "../../global/context";

export const Home = () => {
  const page = localStorage.getItem("pagina");
  const { pokemon } = useContext(Context);
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemonName={name} />;
        })}
        {page !== null && <NavigationButtons />}
      </ContainerGeral>
    </>
  );
};

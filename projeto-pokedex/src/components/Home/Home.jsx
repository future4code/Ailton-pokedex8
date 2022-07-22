import { HeaderComp } from "../Header/Header";
import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { ContainerGeral, Title } from "./HomeStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { ChangePage } from "../ChangePage/ChangePage";

export const Home = () => {
  const [page, setPage] = useState(0);
  const pokemon = useRequestData(page * 24, 24);
  const choosePage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemon={name} />;
        })}
        <ChangePage />
      </ContainerGeral>
    </>
  );
};

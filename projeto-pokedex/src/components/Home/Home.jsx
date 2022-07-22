import { HeaderComp } from "../Header/Header";
import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { ContainerGeral, Title } from "./HomeStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { ChangePage } from "../ChangePage/ChangePage";
import axios from "axios";
import { baseUrl } from "../../constants/url";
export const Home = () => {
  const [pokemon, setPokemon] = useState({});
  const takePokemon = async (start, quantity) => {
    try {
      const res = await axios.get(
        `${baseUrl}/?offset=${start}&limit=${quantity}`
      );
      setPokemon(res.data);
    } catch (error) {
      alert(error);
    }
  }; 

  const [page, setPage] = useState(0);
  // const pokemon = useRequestData(page * 24, 24);
  const choosePage = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    takePokemon(page * 24, 24);
  }, [pokemon])

  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral onClick={choosePage}>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemon={name} />;
        })}
        <ChangePage />
      </ContainerGeral>
    </>
  );
};

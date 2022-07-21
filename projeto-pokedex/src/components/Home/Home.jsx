import React, { useEffect, useState } from "react";
import { HeaderComp } from "../Header/Header";
import { useNavigate } from "react-router-dom";
// import { goTo } from "../../Functions/goTo";
import axios from "axios";
import { baseUrl } from '../../constants/url';
import { Card } from "../Card/Card";
import { ContainerGeral, Title, TitleStyle } from "./HomeStyle";

export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  // const navigate = useNavigate();
  const takePokemon = async (start, number) => {
    try {
      const res = await axios.get(`${baseUrl}/?offset=${start}&limit=${number}`)
      setPokemon(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    takePokemon(0, 21)
  }, [])

  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon?.map(({ name }) => {
          return (
            <Card key={name} pokemon={name} />
          )
        })}
      </ContainerGeral>
    </>
  );
};

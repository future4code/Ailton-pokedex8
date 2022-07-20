import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/url";
import {
  Container,
  DetailsDiv,
  DivBatman,
  DivRobin,
  ImagePokemon,
} from "./CardStyle";

export const Card = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState({
    id: 0,
    name: "",
    types: 0,
  });

  const getDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${pokemon}`);
      console.log(response.data);
      setPokemonDetail(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDetail();
  }, []);
  const { id, name, types } = pokemonDetail;
  return (
    <>
      <Container>
        <DivBatman>
          <DetailsDiv>
            <p>{pokemonDetail?.id}</p>
            <p>{pokemonDetail?.name}</p>
            <div>
              <div>{}</div>
              <div>tipo2</div>
            </div>
          </DetailsDiv>
          <ImagePokemon></ImagePokemon>
        </DivBatman>
        <DivRobin>
          <button>Detalhes</button>
          <button>Catupiri</button>
        </DivRobin>
      </Container>
    </>
  );
};

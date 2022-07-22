import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/url";
import { goTo } from "../../Functions/goTo";
import axios from "axios";
import {
  Container,
  DetailsDiv,
  DivBatman,
  DivRobin,
  ImagePokemon,
  Button,
  Details
} from "./CardStyle";
import { PokeInfo } from "../PokeInfo/PokeInfo";
import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  const [pokemonDetail, setPokemonDetail] = useState(undefined);
  const getDetail = React.useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/${pokemon}`);
      setPokemonDetail(response.data);
    } catch (error) {}
  }, []);
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      {pokemonDetail && (
        <Container color={pokemonDetail.types[0].type.name}>
          <>
            <DivBatman>
              <DetailsDiv>
                {pokemonDetail && (
                  <PokeInfo
                    id={pokemonDetail.id}
                    name={pokemonDetail.name}
                    types={pokemonDetail.types}
                  />
                )}
              </DetailsDiv>
              <ImagePokemon></ImagePokemon>
            </DivBatman>
            <DivRobin>
              <Details onClick={() => goTo(navigate, `/detail/${pokemonDetail.name}`)}>
                Detalhes
              </Details>
              <Button>Catupiri</Button>
            </DivRobin>
          </>
        </Container>
      )}
    </>
  );
};

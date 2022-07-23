import React, { useContext, useEffect, useState } from "react";
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
  Details,
  Imagepokeground,
} from "./CardStyle";
import { PokeInfo } from "../PokeInfo/PokeInfo";
import { useNavigate } from "react-router-dom";
import Pokeground from "../../images/pokeground.png";
import { Context } from "../../global/context";

export const Card = ({ pokemonName }) => {
  const { pokemon, ownPokemons, setOwnPokemons } = useContext(Context);
  const [pokemonDetail, setPokemonDetail] = useState(undefined);
  const navigate = useNavigate();
  const getDetail = React.useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/${pokemonName}`);
      setPokemonDetail(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getDetail();
  }, []);

  const capturePokemon = (newPokemon) => {
    setOwnPokemons([...ownPokemons, newPokemon]);
  };

  const removePokemon = (rmvPokemon) => {
    const newArr = [...ownPokemons]
    const removedArr = newArr.filter(data=>{
      return data.id !== rmvPokemon
    })
    setOwnPokemons(removedArr)
  }


  const sizesInfoCard = {
    idSize: { fontSize: 16 },
    nameSize: { fontSize: 32 },
    typeSize: { height: 31 },
    typeImgSize: { width: 16 },
  }; 

  return (
    <>
      {pokemonDetail && (
        <Container color={pokemonDetail.types[0].type.name}>
          <DivBatman>
            <DetailsDiv>
              {pokemonDetail && (
                <PokeInfo
                  size={sizesInfoCard}
                  id={pokemonDetail.id}
                  name={pokemonDetail.name}
                  types={pokemonDetail.types}
                />
              )}
            </DetailsDiv>
            <ImagePokemon
              src={
                pokemonDetail?.sprites.other[`official-artwork`].front_default
              }
            />
          </DivBatman>
          <DivRobin>
            <Details
              onClick={() => goTo(navigate, `/detail/${pokemonDetail.name}`)}
            >
              Detalhes
            </Details>
            {ownPokemons
              ?.map((data) => {
                return data.name;
              })
              .some((data) => {
                return data === pokemonDetail.name;
              }) ?
              <Button color={"#bbb"} onClick={()=> removePokemon(pokemonDetail.id)}>
                Remover
              </Button>
              : (
              <Button onClick={() => capturePokemon(pokemonDetail)}>
                Capturar!
              </Button>
            )}
          </DivRobin>
          <Imagepokeground src={Pokeground} />
        </Container>
      )}
    </>
  );
};

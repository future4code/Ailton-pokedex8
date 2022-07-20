import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComp } from "../Header/Header";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../constants/url";
import {
  H1Style,
  PokePics,
  PicDiv,
  Card,
  ContainerGeral,
} from "./DetailsStyle";

export const Details = () => {
  const { pokemon } = useParams();
  const navigate = useNavigate();
  const [pokemonDetail, setPokemonDetail] = useState();

  const getDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${pokemon}`);
      setPokemonDetail(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDetail();
  }, []);

  // console.log(pokemonDetail?.sprites)

  return (
    <div>
      <HeaderComp showing1={true} showing2={true} />
      <ContainerGeral>
        <H1Style>{`Detalhe`}</H1Style>
        <Card>
          <PicDiv>
            {pokemonDetail && (
              <PokePics src={pokemonDetail?.sprites.front_default} />
            )}
            {pokemonDetail && (
              <PokePics src={pokemonDetail?.sprites.back_default} />
            )}
          </PicDiv>
        </Card>
      </ContainerGeral>
    </div>
  );
};

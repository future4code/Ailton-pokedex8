import React, { useEffect, useState } from "react";
import { HeaderComp } from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/url";
import { PokeInfo } from "../PokeInfo/PokeInfo";
import {
  TitleMoves,
  H1Style,
  NameP,
  Separator5,
  Teste,
  NumberPTotal,
  MovesDiv,
  Stats,
  StatsDiv,
  StatsBar,
  PokeballAbsolute,
  NumberP,
  PokeAbsolute,
  TitleBaseStats,
  NameDiv,
  DivTeste,
  Separator1,
  Separator4,
  Separator2,
  Separator3,
  Separator6,
  MovesCardContainer,
  NameMovesDiv,
  StatsContainer,
  PokePicsBack,
  PokePicsFront,
  PicDiv,
  MovesCard,
  Card,
  ContainerGeral,
  ShowMoreButton,
} from "./DetailsStyle";
import CardBackground from "../../images/cardbackgroundpoke2.png";

export const Details = () => {
  const { name } = useParams();
  const [canShow, setCanShow] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState();

  const getDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${name}`);
      setPokemonDetail(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDetail();
  }, []);

  const statsArray = pokemonDetail?.stats.map((data) => {
    return data[`base_stat`];
  });

  const totalStats = statsArray?.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  const max = statsArray?.reduce((a, b) => {
    return Math.max(a, b);
  });

  const showHide = () => {
    setCanShow(!canShow);
  };

  const sizesInfoDetail = {
    nameSize: { fontSize: 48 },
  };

  return (
    <>
      <HeaderComp showing1={true} showing2={true} />
      <ContainerGeral>
        <H1Style>{`Detalhes`}</H1Style>
        <Separator1></Separator1>
        <Card color={pokemonDetail?.types[0].type.name}>
          <PicDiv>
            {pokemonDetail && (
              <PokePicsFront src={pokemonDetail?.sprites.front_default} />
            )}
            <Separator2></Separator2>
            {pokemonDetail && (
              <PokePicsBack src={pokemonDetail?.sprites.back_default} />
            )}
          </PicDiv>
          <Separator3></Separator3>
          <StatsContainer>
            <TitleBaseStats>Base stats</TitleBaseStats>
            <Separator5 />
            <Stats>
              {pokemonDetail?.stats.map((x, i) => {
                return (
                  <StatsDiv key={i}>
                    {x.stat.name !== "special-attack" &&
                      x.stat.name !== "special-defense" && (
                        <NameP>
                          {x.stat.name.charAt(0).toUpperCase() +
                            x.stat.name.slice(1)}
                        </NameP>
                      )}
                    {x.stat.name === "special-attack" && <NameP>Sp.Atk</NameP>}
                    {x.stat.name === "special-defense" && <NameP>Sp.Def</NameP>}

                    <NumberP>{x.base_stat}</NumberP>
                    <Teste>
                      <StatsBar
                        color={x.base_stat}
                        size={x.base_stat / 2.55}
                      ></StatsBar>
                    </Teste>
                  </StatsDiv>
                );
              })}
              <StatsDiv>
                <NameP>Total</NameP>
                <NumberPTotal>{totalStats}</NumberPTotal>
              </StatsDiv>
            </Stats>
          </StatsContainer>
          <Separator4></Separator4>
          <NameMovesDiv>
            <NameDiv>
              {pokemonDetail && (
                <PokeInfo
                  size={sizesInfoDetail}
                  id={pokemonDetail.id}
                  name={pokemonDetail.name}
                  types={pokemonDetail.types}
                />
              )}
            </NameDiv>
            <MovesDiv>
              <TitleMoves>Moves</TitleMoves>
              {canShow && <ShowMoreButton onClick={showHide}>Mostrar menos</ShowMoreButton>}
              {canShow || (
                <ShowMoreButton onClick={showHide}>
                  Mostrar mais ({pokemonDetail?.moves.length})
                </ShowMoreButton>
              )}
              {pokemonDetail?.moves.map((data, i) => {
                const words = data.move.name.split(`-`);
              
                if (canShow) {
                  return (
                    <MovesCardContainer key={i}>
                      <>
                        <Separator6 />
                        <DivTeste>
                          <MovesCard>
                            {words.map((name, i) => {
                              return (
                                name.charAt(0).toUpperCase() +
                                name.slice(1) +
                                " "
                              );
                            })}
                          </MovesCard>
                        </DivTeste>
                      </>
                    </MovesCardContainer>
                  );
                } else {
                  return (
                    <MovesCardContainer key={i}>
                      {i < 5 && (
                        <>
                          <Separator6 />
                          <DivTeste>
                            <MovesCard>
                              {words.map((name, i) => {
                                return (
                                  name.charAt(0).toUpperCase() +
                                  name.slice(1) +
                                  " "
                                );
                              })}
                            </MovesCard>
                          </DivTeste>
                        </>
                      )}
                    </MovesCardContainer>
                  );
                }
              })}
            </MovesDiv>
          </NameMovesDiv>
          <PokeAbsolute
            src={pokemonDetail?.sprites.other[`official-artwork`].front_default}
          />
          <PokeballAbsolute src={CardBackground} />
        </Card>
      </ContainerGeral>
    </>
  );
};

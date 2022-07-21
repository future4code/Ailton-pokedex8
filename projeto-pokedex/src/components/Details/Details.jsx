import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { goTo } from '../../Functions/goTo';
import { HeaderComp } from '../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../constants/url';
import { H1Style, NameP,Separator5,Teste, NumberPTotal, MovesDiv, Stats, StatsDiv, StatsBar, PokeballAbsolute, NumberP, PokeAbsolute, TitleBaseStats, NameDiv, Separator1, Separator4, Separator2, Separator3, NameMovesDiv, StatsContainer, PokePicsBack, PokePicsFront, PicDiv, Card, ContainerGeral } from './DetailsStyle';
import CardBackground from '../../images/cardbackgroundpoke2.png'



export const Details = () => {
  const { pokemon } = useParams()
  const navigate = useNavigate()
  const [pokemonDetail, setPokemonDetail] = useState()

  const getDetail = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${pokemon}`)
      setPokemonDetail(response.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getDetail()

  }, [])

  // console.log(pokemonDetail)


  const statsArray = pokemonDetail?.stats.map((data) => {
    return (
      data[`base_stat`]

    )


  })


  // if(statsArray){


  // }


  // const statsArray = pokemonDetail?.stats.map((data) => {
  //   return(
  //     data.base_stat
  //   )
  // }) 

  const totalStats = statsArray?.reduce((previousValue, currentValue) => {

    return previousValue + currentValue

  })

  const max = statsArray?.reduce((a, b) => {
    return Math.max(a, b)
  })

  console.log(pokemonDetail)




  return (
    <>

      <HeaderComp showing1={true} showing2={true} />

      <ContainerGeral>

        <H1Style>{`Detalhes`}</H1Style>
        <Separator1></Separator1>
        <Card>
          <PicDiv>
            {pokemonDetail && <PokePicsFront src={pokemonDetail?.sprites.front_default} />
            }
            <Separator2></Separator2>
            {pokemonDetail && <PokePicsBack src={pokemonDetail?.sprites.back_default} />
            }
          </PicDiv>
          <Separator3></Separator3>
          <StatsContainer>
          
            <TitleBaseStats>Base stats</TitleBaseStats>
            {/* {sla que isso kkk ====================================} */}
            <Separator5/>
            <Stats>


              <StatsDiv><NameP>HP</NameP><NumberP>{pokemonDetail?.stats[0].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[0].base_stat} size={(pokemonDetail?.stats[0].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Attack</NameP><NumberP>{pokemonDetail?.stats[1].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[1].base_stat} size={(pokemonDetail?.stats[1].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Defense</NameP><NumberP>{pokemonDetail?.stats[2].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[2].base_stat} size={(pokemonDetail?.stats[2].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Sp.Atk</NameP><NumberP>{pokemonDetail?.stats[3].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[3].base_stat} size={(pokemonDetail?.stats[3].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Sp.Def</NameP><NumberP>{pokemonDetail?.stats[4].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[4].base_stat} size={(pokemonDetail?.stats[4].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Speed</NameP><NumberP>{pokemonDetail?.stats[5].base_stat}</NumberP><Teste><StatsBar color={pokemonDetail?.stats[5].base_stat} size={(pokemonDetail?.stats[5].base_stat) / 2.55}></StatsBar></Teste></StatsDiv>
              
              <StatsDiv><NameP>Total</NameP><NumberPTotal>{totalStats}</NumberPTotal></StatsDiv>

            </Stats>
          
          </StatsContainer>
          <Separator4></Separator4>
          <NameMovesDiv>
            <NameDiv>

            </NameDiv>
            <MovesDiv>


            </MovesDiv>
          </NameMovesDiv>
          <PokeAbsolute src={pokemonDetail?.sprites.other[`official-artwork`].front_default} />

          <PokeballAbsolute src={CardBackground} />


        </Card>


      </ContainerGeral>
    </>
  )
}
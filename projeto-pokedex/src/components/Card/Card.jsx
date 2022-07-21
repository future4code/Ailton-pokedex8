import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constants/url'
import {goTo} from '../../Functions/goTo'
import axios from 'axios'
import { 
    Container,
    DetailsDiv,
    DivBatman,
    DivRobin, 
    ImagePokemon
} from './CardStyle'
import { useNavigate } from 'react-router-dom'


export const Card = ({pokemon}) => {

    const navigate = useNavigate()

    const [pokemonDetail, setPokemonDetail] = useState({id:0,name:"",types:0})

    const getDetail = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${pokemon}`)
        console.log(response.data)
        setPokemonDetail(response.data)
        
      } catch (error) {
        
      }
    }
   
    useEffect(()=> {
      getDetail()
    },[])
    const {id,name,types} = pokemonDetail;

 


  return (
    
    <>
 
    <Container>
        <DivBatman> 
            <DetailsDiv>
                <p>{id}</p>
                <p>{name}</p>
                <div> 
                    {/* <div>{types.type.name}</div> */}
                    <div>tipo2</div>
                </div>
            </DetailsDiv>
            <ImagePokemon></ImagePokemon>
        </DivBatman>
        <DivRobin>
            <button onClick={()=> goTo(navigate,`/detail/${name}`)}>Detalhes</button>
            <button>Catupiri</button>
        </DivRobin>
    </Container>
    </>
    
  )
}

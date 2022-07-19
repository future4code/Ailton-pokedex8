import React, {useEffect, useState} from "react";
import { HeaderComp } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  const navigate = useNavigate();
  const takePokemon = async() => {
    try {    
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
    setPokemon(res.data.results)     
    } catch (error) {
      console.log(error)      
    }
  }
  useEffect(()=>{
    takePokemon()
  }, [])

  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <div>
        {pokemon[0] && pokemon.map(data=>{
          const {name, url} = data
          return (
            <p>{name}</p>
          )
        })}
      </div>
    </>
  );
};

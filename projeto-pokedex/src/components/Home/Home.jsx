import React, {useEffect, useState} from "react";
import { HeaderComp } from "../Header/Header";
import { useNavigate } from "react-router-dom";
// import { goTo } from "../../Functions/goTo";
import axios from "axios";
import {baseUrl} from '../../constants/url';
import { Card } from "../Card/Card";



export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  // const navigate = useNavigate();
  const takePokemon = async() => {
    try {    
    const res = await axios.get(baseUrl)
    console.log(res.data)
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
        {pokemon?.map(({name})=>{
          
          return (
            <Card pokemon={name}/>
            
          )
        })}
      </div>
    </>
  );
};

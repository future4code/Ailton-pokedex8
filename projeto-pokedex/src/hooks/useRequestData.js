import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from ".././constants/url";

export const useRequestData = (start, quantity) => {
  const [pokemon, setPokemon] = useState({});
  const takePokemon = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/?offset=${start}&limit=${quantity}`
      );
      setPokemon(res.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    takePokemon(start * 24, quantity);
  }, [pokemon]);
  return pokemon;
};

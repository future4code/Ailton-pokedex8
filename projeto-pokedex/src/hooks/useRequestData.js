import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const takePokemon = async () => {
    try {
      const res = await axios.get(currentPageUrl);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data);
    } catch (error) {
      alert("Algo deu errado");
    }
  };
  useEffect(() => {
    takePokemon(currentPageUrl);
  }, [currentPageUrl]);
  return { pokemon, setCurrentPageUrl, nextPageUrl, prevPageUrl };
};

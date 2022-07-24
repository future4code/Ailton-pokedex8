import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = () => {
  let page = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24"
  if (localStorage.getItem("pagina") !== null) {
  page = localStorage.getItem("pagina");
  }
  const [loading, setLoading] = useState (true)
  const [currentPageUrl, setCurrentPageUrl] = useState(page);
  const [pokemon, setPokemon] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const takePokemon = async () => {
    try {
      const res = await axios.get(currentPageUrl);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data);
      setLoading(false)
      localStorage.setItem("pagina", currentPageUrl);
    } catch (error) {
      alert("Algo deu errado");
    }
  };
  useEffect(() => {
    takePokemon(currentPageUrl);
  }, [currentPageUrl]);
  return { pokemon, setCurrentPageUrl, nextPageUrl, prevPageUrl, currentPageUrl, loading, setLoading };
};

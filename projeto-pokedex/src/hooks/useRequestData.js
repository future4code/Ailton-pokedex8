import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRequestData = () => {
  const page = localStorage.getItem("pagina");
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
      localStorage.setItem("pagina", currentPageUrl);
    } catch (error) {
      alert("Algo deu errado");
    }
  };
  useEffect(() => {
    takePokemon(currentPageUrl);
  }, [currentPageUrl]);
  return { pokemon, setCurrentPageUrl, nextPageUrl, prevPageUrl, currentPageUrl };
};

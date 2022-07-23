import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Pokedex } from "../Pokedex/Pokedex";
import { Details } from "../Details/Details";
import { ErrorPage } from "../Error/ErrorPage";
import { useRequestData } from "../../hooks/useRequestData";
import { useState } from "react";
import { Context } from "../../global/context";

export const Router = () => {
  const [ownPokemons, setOwnPokemons] = useState([]);
  const { pokemon, currentPageUrl, setCurrentPageUrl, nextPageUrl, prevPageUrl } =
    useRequestData();

    
    // const sizesInfoDetail = {
    // id: { fontSize: 16 },
    // name: { fontSize: 32 },
    // type: { height: 31 },
    // typeImg: { width: 16 },
   
  const pokemonProp = {
    pokemon,
    currentPageUrl,
    setCurrentPageUrl,
    nextPageUrl,
    prevPageUrl,
    ownPokemons,
    setOwnPokemons,
  };
  return (
    <BrowserRouter>
      <Context.Provider value={pokemonProp}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/page/:page" element={<Home />}></Route>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/detail/:name" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

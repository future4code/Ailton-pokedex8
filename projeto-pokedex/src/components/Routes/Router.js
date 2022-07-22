import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Pokedex } from "../Pokedex/Pokedex";
import { Details } from "../Details/Details";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>         
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detail/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 160px;
`;
export const AllPokemonsDiv = styled.div`
  width: 30%;
`;
export const AllPokemons = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  :hover {
    text-decoration: underline;
  }
`;
export const Logo = styled.img`
  width: 308px;
  height: 114px;
`;
export const PokedexButton = styled.button`
  width: 288px;
  height: 74px;
  background: #33a4f5;
  color: #fff;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    background: #0a84db;
  }
`;
export const PokedexButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

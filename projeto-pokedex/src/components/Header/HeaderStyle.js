import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 160px;
  @media (max-width: 950px) {
    flex-direction: column;
    height: 350px;
  }
`;
export const AllPokemonsDiv = styled.div`
  width: 30%;
  @media (max-width: 950px) {
    width: 100%;
  }
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
  @media (max-width: 950px) {
    font-size: 1.5rem;
  }
`;
export const Logo = styled.img`
  width: 308px;
  height: 114px;
  @media (max-width: 950px) {
    margin-top: 30px;
  }
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
  @media (max-width: 950px) {
    font-size: 1.5rem;
    width: 200px;
    height: 60px;
  }
`;
export const PokedexButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  @media (max-width: 950px) {
    height: 50%;
  }
`;

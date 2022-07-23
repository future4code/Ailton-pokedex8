import { HeaderComp } from "../Header/Header";
import { Card } from "../Card/Card";
import { Button, ButtonsDiv, ContainerGeral, Title } from "./HomeStyle";
import { Context } from "../../global/context";
import { useContext } from "react";

export const Home = () => {
  const page = localStorage.getItem("pagina");
  const {
    pokemon,
    currentPageUrl,
    setCurrentPageUrl,
    nextPageUrl,
    prevPageUrl,
  } = useContext(Context);
  const pageSplit = page.split("=");
  const actualPage = Math.ceil(parseInt(pageSplit[1]) / 24 + 1);
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemonName={name} />;
        })}
        <ButtonsDiv>
          {actualPage > 2 && (
            <Button
              onClick={() =>
                setCurrentPageUrl(
                  `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=24`
                )
              }
            >
              Primeira página
            </Button>
          )}
          <Button onClick={() => setCurrentPageUrl(prevPageUrl)}>
            Página Anterior
          </Button>
          {actualPage !== 1 && (
            <Button
              onClick={() =>
                setCurrentPageUrl(
                  `https://pokeapi.co/api/v2/pokemon/?offset=${
                    (actualPage - 2) * 24
                  }&limit=24`
                )
              }
            >
              {actualPage - 1}
            </Button>
          )}
          <Button
            onClick={() =>
              setCurrentPageUrl(
                `https://pokeapi.co/api/v2/pokemon/?offset=${
                  (actualPage - 1) * 24
                }&limit=24`
              )
            }
          >
            {actualPage}
          </Button>
          <Button
            onClick={() =>
              setCurrentPageUrl(
                `https://pokeapi.co/api/v2/pokemon/?offset=${
                  actualPage * 24
                }&limit=24`
              )
            }
          >
            {actualPage + 1}
          </Button>
          <Button onClick={() => setCurrentPageUrl(nextPageUrl)}>
            Próxima Pagina
          </Button>
          {actualPage !== 49 && (
            <Button
              onClick={() =>
                setCurrentPageUrl(
                  `https://pokeapi.co/api/v2/pokemon/?offset=${
                    48 * 24
                  }&limit=24`
                )
              }
            >
              Ultima página
            </Button>
          )}
        </ButtonsDiv>
      </ContainerGeral>
    </>
  );
};

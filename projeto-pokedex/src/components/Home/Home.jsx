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
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemonName={name} />;
        })}
        <ButtonsDiv>
          <Button onClick={() => setCurrentPageUrl(prevPageUrl)}>
            Página Anterior
          </Button>
          <Button onClick={() => setCurrentPageUrl(nextPageUrl)}>
            Próxima Pagina
          </Button>
        </ButtonsDiv>
      </ContainerGeral>
    </>
  );
};

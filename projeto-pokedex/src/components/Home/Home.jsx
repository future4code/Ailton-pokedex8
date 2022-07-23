import { HeaderComp } from "../Header/Header";
import { Card } from "../Card/Card";
import { Button, ButtonsDiv, ContainerGeral, Title } from "./HomeStyle";
import { useRequestData } from "../../hooks/useRequestData";

export const Home = () => {
  const page = localStorage.getItem("pagina");
  const { pokemon, setCurrentPageUrl, nextPageUrl, prevPageUrl } =
    useRequestData();
  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <ContainerGeral>
        <Title>Todos os Pokemons</Title>
        {pokemon.results?.map(({ name }) => {
          return <Card key={name} pokemon={name} />;
        })}
        <ButtonsDiv>
          <Button onClick={() => setCurrentPageUrl(prevPageUrl)}>
            Pagina Anterior
          </Button>
          {Array.from({ length: 37}).map((data, index) => {
            return (
              <Button
                key={index}
                onClick={() =>
                  setCurrentPageUrl(
                    `https://pokeapi.co/api/v2/pokemon/?offset=${
                      index * 24
                    }&limit=24`
                  )
                }
              >
                {index + 1}
              </Button>
            );
          })}
          <Button onClick={() => setCurrentPageUrl(nextPageUrl)}>
            Proxima pagina
          </Button>
        </ButtonsDiv>
      </ContainerGeral>
    </>
  );
};

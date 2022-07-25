import React from "react";
import { useContext } from "react";
import { Context } from "../../global/context";
import { Button, ButtonsDiv } from "./NavigationButtonsStyle";

export const NavigationButtons = () => {
  const page = localStorage.getItem("pagina");
  const { setCurrentPageUrl, nextPageUrl, prevPageUrl } = useContext(Context);
  const pageSplit = page.split("=");
  const actualPage = Math.ceil(parseInt(pageSplit[1]) / 24 + 1);

  return (
    <>
      <ButtonsDiv>
        <Button
          onClick={() =>
            setCurrentPageUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=24`
            )
          }
        >
          Primeira página
        </Button>
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
        {actualPage < 38 &&
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
        }
        {actualPage < 37 &&
        <Button
          onClick={() =>
            setCurrentPageUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${
                (actualPage + 1) * 24
              }&limit=24`
            )
          }
        >
          {actualPage + 2}
        </Button>
        }
        {actualPage < 36 &&
          <Button
            onClick={() =>
              setCurrentPageUrl(
                `https://pokeapi.co/api/v2/pokemon/?offset=${
                  (actualPage + 2) * 24
                }&limit=24`
              )
            }
          >
            {actualPage + 3}
          </Button>
        }
        <Button onClick={() => setCurrentPageUrl(nextPageUrl)}>
          Próxima Pagina
        </Button>
          <Button
            onClick={() =>
              setCurrentPageUrl(
                `https://pokeapi.co/api/v2/pokemon/?offset=${37 * 24}&limit=24`
              )
            }
          >
            Ultima página
          </Button>
      </ButtonsDiv>
    </>
  );
};

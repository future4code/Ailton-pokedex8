import React from "react";
import { HeaderComp } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../Functions/goTo";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComp showing1={false} showing2={true} />
      <div>
        <h1>Home</h1>
        <button onClick={() => goTo(navigate, "detail/:id")}>
          Detalhes do Pikomon
        </button>
      </div>
    </>
  );
};

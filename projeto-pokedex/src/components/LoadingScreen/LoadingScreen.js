import React from "react";
import LoadingGif from "../../images/pokeball_loading.gif";
import { Loading } from "./LoadingScreenStyle";

export const LoadingScreen = () => {
  return <Loading src={LoadingGif} alt="Pokebola Girando" />;
};

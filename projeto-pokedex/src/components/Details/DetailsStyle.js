import styled from "styled-components";

export const Separator1 = styled.div`
  height: 56px;
`;

export const Separator2 = styled.div`
  height: 47px;
`;
export const Separator3 = styled.div`
  width: 34px;
`;
export const Separator4 = styled.div`
  width: 68px;
`;
export const Separator5 = styled.div`
  height: 15px;
`;
export const Separator6 = styled.div`
  height: 20px;
`;
export const ContainerGeral = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: grey;
  display: flex;
  flex-direction: column;
  padding: 60px 25px;

  @media screen and (max-width: 640px) {
    /* flex-direction: column; */
    height: 100%;
 
  }
`;
export const H1Style = styled.p`
  width: 100%;
  font-family: "Poppins";
  font-size: 48px;
  font-weight: normal;
  color: #ffffff;
  display: flex;
  align-items: start;
`;
export const Card = styled.div`
  width: 100%;
  background: ${(props) => props.color === `poison` && "#896a8a"};
  background: ${(props) => props.color === `grass` && "#729F92"};
  background: ${(props) => props.color === `fire` && "#EAAB7D"};
  background: ${(props) => props.color === `water` && "#71C3FF"};
  background: ${(props) => props.color === `flying` && "#677b8a"};
  background: ${(props) => props.color === `bug` && "#76A866"};
  background: ${(props) => props.color === `normal` && "#BF9762"};
  background: ${(props) => props.color === `dark` && "#2c2b2e"};
  background: ${(props) => props.color === `dragon` && "#004170"};
  background: ${(props) => props.color === `electric` && "#b09727"};
  background: ${(props) => props.color === `fairy` && "#a3649f"};
  background: ${(props) => props.color === `fighting` && "#945165"};
  background: ${(props) => props.color === `ghost` && "#515c7d"};
  background: ${(props) => props.color === `ground` && "#7d3916"};
  background: ${(props) => props.color === `ice` && "#17806e"};
  background: ${(props) => props.color === `psychic` && "#7a4b4c"};
  background: ${(props) => props.color === `rock` && "#6b5f3e"};
  background: ${(props) => props.color === `steel` && "#636363"};
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 26px 44px;
  position: relative;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px;
    gap: 20px;

  }
`;

export const PicDiv = styled.div`
  width: 21.66%;
  height: 100%;
  @media screen and (max-width: 640px) {
    order: 3;
    width: 100%;
    height: 100%;
  }
`;
export const PokePicsFront = styled.img`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
`;
export const PokePicsBack = styled.img`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
`;
export const StatsContainer = styled.div`
  background-color: #ffffff;
  width: 26.4%;
  height: 100%;
  padding: 0px 20px;
  padding-bottom: 227px;
  padding-top: 19px;
  border-radius: 12px;
  z-index: 1;
  @media screen and (max-width: 640px) {
    order: 4;
    width: 100%;
    padding: 20px 20px;
    padding-bottom: 100px;
  }
`;
export const TitleBaseStats = styled.p`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: bolder;
`;

export const NameMovesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22.5%;
  height: 100%;
  z-index: 1;
  @media screen and (max-width: 640px) {
    order: 2;
    width: 100%;
    height: 100%;
    gap:20px;
  }
`;
export const NameDiv = styled.div`
  width: 100%;
  height: 26.1%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 640px) {
    
  }
`;
export const MovesDiv = styled.div`
  width: 100%;
  height: 76%;
  max-height: 663px;
  background-color: #ffffff;
  padding: 18px 18px;
  border-radius: 8px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #bbb;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #505050
  }
`;
export const PokeAbsolute = styled.img`
  width: 18.75vw;
  position: absolute;
  top: -20%;
  right: 35.14px;
  z-index: 1;
  @media screen and (max-width: 640px) {
    order: 1;
    position: relative;
    width: 100%;
    top: 0;
    right: 0;
  }
`;
export const PokeballAbsolute = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
 
`;
export const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5%;
`;
export const StatsBar = styled.div`
  width: ${(props) => props.size}%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #c8c8c8;
  background-color: ${(props) => props.color < 25 && `#EF1700`};
  background-color: ${(props) =>
    props.color >= 25 && props.color < 50 && `#FF7C2D`};
  background-color: ${(props) => props.color >= 50 && `#FFDD6A`};
  background-color: ${(props) => props.color >= 100 && `#916DAD`};
`;
export const NameP = styled.p`
  width: 18%;
  font-family: "Poppins";
  font-size: 75%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const NumberP = styled.p`
  font-family: "Poppins";
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;
export const NumberPTotal = styled.p`
  font-family: "Poppins";
  font-size: 13px;
  width: 10%;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatsTotal = styled.div`
  width: 50%;
  /* background-color: aqua; */
`;
export const TitleMoves = styled.p`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: bolder;
`;
export const MovesCard = styled.div`
  padding: 10px;
  background-color: #ececec;
  font-family: "Montserrat";
  border-radius: 12px;
  font-size: 14px;
  display: flex;
`;
export const MovesCardContainer = styled.div``;

export const WidthMoves = styled.div`
  width: 100%;
  display: flex;
  /* background-color: aqua; */
`;

export const ShowMoreButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #949494;
  color: white;
  font-family: "Montserrat";
  border-radius: 12px;
  font-size: 14px;
  display: flex;
  transition: 0.25s ease;
  cursor: pointer;
  :hover {
    background-color: #505050;
  }
`;

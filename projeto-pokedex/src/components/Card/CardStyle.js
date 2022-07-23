import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  margin-bottom: 38px;
  position: relative;
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
`;
export const DivBatman = styled.div`
  position: relative;
  z-index: 2;
`;
export const DetailsDiv = styled.div`
  padding: 23px;
`;
export const ImagePokemon = styled.img`
  width: 193px;
  position: absolute;
  top: -45%;
  left: 54%;
  z-index: 2;
`;
export const DivRobin = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 7px;
  padding: 0px 23px;
  align-items: center;
  z-index: 2;
  height: 100%;
`;
export const Button = styled.button`
  font-family: "Poppins";
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border-color: #ffffff;
  cursor: pointer;
`;
export const Details = styled.p`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: white;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    color: #ccc;
  }
`;
export const Imagepokeground = styled.img`
  /* width: 210px; */
  position: absolute;
  height: 210px;
  right: 0%;
  top: 0%;
  z-index: 1;
`;

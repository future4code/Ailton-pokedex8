import styled from "styled-components"

export const Container = styled.div`
  width: 440px;
  height: 210px;
  background: ${(props) => props.color === `grass` && "#729F92"};
  background: ${(props) => props.color === `fire` && "#EAAB7D"};
  background: ${(props) => props.color === `poison` && "#AD61AE"};
  background: ${(props) => props.color === `flying` && "#6892B0"};
  background: ${(props) => props.color === `water` && "#71C3FF"};
  background: ${(props) => props.color === `bug` && "#76A866"};
  background: ${(props) => props.color === `normal` && "#BF9762"};
  background: ${(props) => props.color === `dark` && "#5C5365"};
  background: ${(props) => props.color === `dragon` && "#004170"};
  background: ${(props) => props.color === `electric` && "#F4D23B"};
  background: ${(props) => props.color === `fairy` && "#EC8FE6"};
  background: ${(props) => props.color === `fighting` && "#CE4069"};
  background: ${(props) => props.color === `ghost` && "#5269AC"};
  background: ${(props) => props.color === `ground` && "#D97745"};
  background: ${(props) => props.color === `ice` && "#74CEC0"};
  background: ${(props) => props.color === `psychic` && "#F67176"};
  background: ${(props) => props.color === `rock` && "#C7B78B"};
  background: ${(props) => props.color === `steel` && "#BBBBBB"};
  border-radius: 12px;
  margin-bottom: 45px;
  position: relative;
`;
export const DivBatman= styled.div`
position: relative;
`
export const DetailsDiv= styled.div`
padding: 23px;
`
export const ImagePokemon = styled.img`
  width: 193px;
  position: absolute;
  top: -45%;
  left: 54%;
`;
export const DivRobin = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 7px;
  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  margin-left:23px;
  align-items: flex-end;
`;
export const Button = styled.button`
  font-family: "Poppins";
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border-color: #ffffff;
  /* background-color: white; */
`
export const Details = styled.p`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: white;
`;   
  
export const Imagepokeground = styled.img`
  /* width: 210px; */
  position: absolute;
  height: 210px;
  right: 0%;
  top:0%;
`;

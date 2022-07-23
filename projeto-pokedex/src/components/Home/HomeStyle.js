import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100%;
  min-height: 120vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #5e5e5e;
  padding: 60px 25px;
  gap: 20px;
`;
export const H1Style = styled.p`
  width: 100%;
  font-family: "Poppins";
  font-size: 48px;
  font-weight: normal;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: start;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-size: 3.5rem;
  color: white;
  width: 100%;
  padding-bottom: 35px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 12px 0px;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    /* flex-wrap: wrap; */
  }
`;

export const Button = styled.button`
font-family: "Poppins";
  color: white;
  background: none;
  border: 1px solid black;
  min-width: 32px;
  min-height: 32px;
  padding: 0px 4px;
  transition: 0.5s ease;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

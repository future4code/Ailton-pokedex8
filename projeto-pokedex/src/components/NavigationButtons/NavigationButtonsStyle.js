import styled from "styled-components";

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
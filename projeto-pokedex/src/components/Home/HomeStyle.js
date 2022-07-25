import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100%;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #5e5e5e;
  padding: 60px 25px;
  gap: 20px;
  transition: 3s ease;
    @media screen and (max-width: 640px) {
      gap:0px;
      padding: 30px;
      
    }

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
  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;

export const Loading = styled.h1`
color: #fff;
font-size: 6rem;
`
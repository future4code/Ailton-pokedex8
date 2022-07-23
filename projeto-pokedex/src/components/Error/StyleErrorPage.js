import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
  min-height: 120vh;
  display: flex;
  
  background-color: #5e5e5e;
  padding: 60px 25px;
  gap: 20px;
`;

export const DivError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  > p {
    font-size: 200%;
    /* width: 100%; */
    font-family: "Poppins";
    font-size: 48px;
    color: #ffffff;
  }
  margin-bottom: 2000px;
`;

export const Button = styled.button`
  font-family: "Poppins";
  padding: 4px 10px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border-color: #ffffff;
  /* background-color: white; */
`;
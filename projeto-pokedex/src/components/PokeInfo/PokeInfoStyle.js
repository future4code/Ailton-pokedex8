import styled from "styled-components";

export const DivTypes = styled.div`
display:flex;
gap: 7px;
`
export const Id = styled.p`
  font-weight: 700;
  font-size: 16px;
`

export const Type = styled.div `
display: flex;
width: 106px;
height: 31px;
gap: 17px;
padding: 5px 8px;
align-items: center;
background-color: ${props=> props.color};
border-radius: 8px;
user-select: none;
cursor: pointer;
transition: 0.2s ease;
:hover {
    opacity: 0.8;
}
`

export const TypeImg = styled.img`
width: 20px;
`

export const TypeText = styled.p`
font-family: "Poppins";
color: #fff;
`
import styled from "styled-components"
import CardBackground from '../../images/cardbackgroundpoke.png'

export const Separator1 = styled.div `
height: 56px;

`
export const Separator2 = styled.div`
height: 47px;
`
export const Separator3 = styled.div`
width: 34px;
`
export const Separator4 = styled.div`
width: 68px;
`

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
/* justify-content: space-between; */
padding: 60px 25px;
`
export const H1Style = styled.p `
width:100%;
font-family: "Poppins";
font-size: 48px;
font-weight: normal;
/* line-height: 72px; */
color: #FFFFFF;
display: flex;
align-items: start;
/* background-color: #FFFFFF; */
`
export const Card = styled.div `

width: 100%;

background-color: #729F92;
/* background-image: url(${CardBackground});
background-repeat: no-repeat;
background-size: 66% 132% ;
background-position: 129% 43.5%; */
border-radius: 40px;
display: flex;
align-items: center;
padding: 26px 44px; 
position: relative;

`
export const PicDiv = styled.div`

width: 21.66%;
height: 100%; 

`
export const PokePicsFront = styled.img`
width: 100%;
background-color: #FFFFFF; 
border-radius: 8px;

`
export const PokePicsBack = styled.img`
width: 100%;
background-color: #FFFFFF;
border-radius: 8px;

`
export const StatsContainer = styled.div`
background-color: #FFFFFF;
width: 26.4%;
height: 100%;
padding: 0px 18px;
padding-bottom: 227px ;
padding-top: 43px;
border-radius: 12px;
z-index: 1;

`
export const TitleBaseStats = styled.p `
font-family: "Poppins";
font-size: 24px;
font-weight: bolder;
/* padding: ; */
`

export const NameMovesDiv = styled.div`
width: 22.5%;
height: 100%;
/* background-color: #FFFFFF; */
z-index: 1;

`
export const NameDiv = styled.div `
width: 100%;
height: 26.1%;

`
export const MovesDiv = styled.div `
width: 100%;
height: 73.9%;
background-color: #FFFFFF;
padding: 18px 18px;
border-radius: 8px;
`
export const PokeAbsolute = styled.img`
width: 18.75vw;
position: absolute;
top: -20%;
right: 35.14px;
z-index: 1;
`
export const PokeballAbsolute = styled.img `
height: 100%;
position: absolute;
top: 0;
right: 0;

`
export const Stats = styled.div`
`
export const StatsDiv = styled.div `
display: flex;
gap: 10px;
background-color: lightgreen;
/* justify-content: space-between; */
`
export const StatsBar = styled.div`
width: ${props=>props.size}%;
/* width: 65%; */
/* background-color: ${props=>props.color < 50 ? `#FF7C2D` : `#FF5C5D`} ; */
/* background-color: ${props=> props.color <50>25 ? `#FFDD6A`: `#FF7C2D`}; */
background-color: ${props=> props.color <25 && `#EF1700`};
background-color: ${props=> props.color >=25 && props.color <50 && `#FF7C2D`};
background-color: ${props=> props.color >=50 && `#FFDD6A`};
background-color: ${props=> props.color >=100 && `#612B8A`};
`
export const NameP = styled.p `
width: 15%;
`
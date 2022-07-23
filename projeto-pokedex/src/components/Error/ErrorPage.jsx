import React from 'react'
import { Container, DivError,Button } from './StyleErrorPage'
import { goTo } from '../../Functions/goTo'
import { useNavigate } from 'react-router-dom'
import { HeaderComp } from "../Header/Header";


export const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <>  
    <HeaderComp showing1={false} showing2={false} />
    <Container> 
    <DivError> 
        <p font- >ERROR</p>
        <p>404</p>
        <p>PAGE NOT FOUND</p>
        <Button onClick={() => goTo(navigate, "/")}>{">>>>>>>>>>>>Voltar<<<<<<<<<<<<<<"}</Button>
    </DivError>
    <div>
      
    </div>
        <iframe width="580" height="336" src="https://www.youtube.com/embed/-5PR8AdwC8o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Container>
    </>
   
   
  )
}

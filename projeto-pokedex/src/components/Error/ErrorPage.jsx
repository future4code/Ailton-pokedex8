import React from 'react'
import { Container, DivError } from './StyleErrorPage'
import { goTo } from '../../Functions/goTo'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <Container> 
    <DivError> 
        <p font- >ERROR</p>
        <p>404</p>
        <p>PAGE NOT FOUND</p>
        <button onClick={() => goTo(navigate, "/")}>{">>>>>>>>>>>>Voltar<<<<<<<<<<<<<<"}</button>
    </DivError>
    <div>
      
    </div>
        <iframe width="1280" height="736" src="https://www.youtube.com/embed/-5PR8AdwC8o" title="Pukemon filme Nal do Canal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Container>
   
  )
}

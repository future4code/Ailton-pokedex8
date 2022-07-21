import {DivTypes} from "./PokeInfoStyle"


export const PokeInfo = ({id,name,types}) => {
  return (
  
    <>
        <p>{id}</p>
        <h1>{name}</h1>
        <DivTypes> 
            
        {types[0] &&  <div>{types[0].type.name}</div>}
        {types[1] &&  <div>{types[1].type.name}</div>}
           
        </DivTypes>
    </>
  

  )
}

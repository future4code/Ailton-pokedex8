import { DivTypes, Type, TypeImg, TypeText } from "./PokeInfoStyle";
import { objectTypes } from "../../global/types";

export const PokeInfo = ({ id, name, types }) => {
  return (
    <>
      <p>#{id}</p>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <DivTypes>
        {types[0] && (
          <>
            <Type color={objectTypes[types[0].type.name].color}>
              <TypeImg src={objectTypes[types[0].type.name].img} />
              <TypeText>
                {types[0].type.name.charAt(0).toUpperCase() +
                  types[0].type.name.slice(1)}
              </TypeText>
            </Type>
          </>
        )}
        {types[1] && (
          <Type color={objectTypes[types[1].type.name].color}>
            <TypeImg src={objectTypes[types[1].type.name].img} />
            <TypeText>
              {types[1].type.name.charAt(0).toUpperCase() +
                types[1].type.name.slice(1)}
            </TypeText>
          </Type>
        )}
      </DivTypes>
    </>
  );
};

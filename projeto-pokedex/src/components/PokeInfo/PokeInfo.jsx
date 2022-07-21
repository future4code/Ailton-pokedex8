import { DivTypes, Type, TypeImg, TypeText } from "./PokeInfoStyle";
import { typesArray } from "../../global/types";

export const PokeInfo = ({ id, name, types }) => {
  const onlyTypeNames = typesArray.map(({ name }) => {
    return name;
  });

  const indexOfFirstType = onlyTypeNames.indexOf(types[0].type.name);
  let indexOfSecondType = undefined;

  if (types[1]) {
    indexOfSecondType = onlyTypeNames.indexOf(types[1].type.name);
  }

  return (
    <>
      <p>#{id}</p>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <DivTypes>
        {types[0] && (
          <>
            {indexOfFirstType !== -1 && (
              <Type color={typesArray[indexOfFirstType].color}>
                <TypeImg src={typesArray[indexOfFirstType].img} />
                <TypeText>{types[0].type.name.charAt(0).toUpperCase() + types[0].type.name.slice(1)}</TypeText>
              </Type>
            )}
          </>
        )}
        {types[1] && (
          <Type color={typesArray[indexOfSecondType].color}>
            <TypeImg src={typesArray[indexOfSecondType].img} />
            <TypeText>{types[1].type.name.charAt(0).toUpperCase() + types[1].type.name.slice(1)}</TypeText>
          </Type>
        )}
      </DivTypes>
    </>
  );
};

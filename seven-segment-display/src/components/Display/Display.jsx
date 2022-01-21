import React from "react";
import Digit from "../Digit/Digit";
import { positionDisplay } from "../../helpers/positionDisplay";

const Display = (props) => {
  //props para centralizar o display de acordo com 1,2 ou 3 algorismos
  const centerDisplay = positionDisplay(props.digitCount);

  return (
    //Uso de svg para a montagem do display e passagem de props do numero
    <svg viewBox={[centerDisplay, -1, 38, 20]}>
      {/* Divisao do numero passado em algorismos separados
      Sua renderizacao e montagem de leds vai ocorrer pelo componente Digit */}
      {props.value
        .toString()
        .padStart(props.digitCount, " ")
        .split("")
        .slice(-props.digitCount)
        .map((digit, key) => (
          //Chamada do componente Digit com passagem de props de cada algorismo separado
          <Digit
            key={key}
            value={digit}
            x={key * 12}
            color={props.color}
            onOpacity={props.onOpacity}
            offOpacity={props.offOpacity}
            nullDisplay={props.nullDisplay}
          />
        ))}
    </svg>
  );
};

//Default props, evitar que a falta de props quebre o app
Display.defaultProps = {
  digitCount: 3,
  value: "",
  strokeColor: "#fff",
  nullDisplay: [],
};

export default Display;

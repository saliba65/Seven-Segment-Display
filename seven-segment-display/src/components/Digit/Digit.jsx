import React from "react";
import { segments } from "../../utils/constants/segments";
import { digits } from "../../utils/constants/digits";

//Componente digit vai montar cada algorismo de led de acordo com as props recebidas
const Digit = (props) => {
  //Identificar pontos dos leds do display
  const getSegment = (id) => {
    var segment = segments[id];
    return Array.isArray(segment) ? segment : [];
  };

  const getDigit = (id) => {
    //Identificar o numero passado e consequentemente quais segmentos ele devera mostrar
    var digit = digits[id];
    return Array.isArray(digit) ? digit : [];
  };

  const transform = (functions) => {
    return functions.reduce((funcs, func) => {
      var name = Object.keys(func)[0];
      var params = Array.isArray(func[name]) ? func[name] : [func[name]];
      return `${funcs} ${name}(${params.join(" ")})`;
    }, "");
  };

  return (
    //Montagem do display completo
    <g
      //Posicionamento dos segmentos
      transform={transform([{ translate: [props.x, props.y] }])}
      style={{
        fillRule: "evenodd",
        strokeWidth: 0.25,
        strokeOpacity: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
      }}
    >
      {/* Passagem de props para identificador do numero */}
      {Object.keys(segments).map((key) => (
        <polygon
          key={key}
          points={getSegment(key)}
          fill={props.color}
          fillOpacity={
            getDigit(props.value).indexOf(key) >= 0
              ? props.onOpacity
              : props.offOpacity
          }
        />
      ))}
    </g>
  );
};

//Default props, evitar que a falta de props quebre o apps
Digit.defaultProps = {
  value: 0,
  onOpacity: 1,
  offOpacity: 0.1,
  color: "#262A34",
  x: 0,
  y: 0,
};

export default Digit;

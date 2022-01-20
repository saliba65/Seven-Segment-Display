import React from "react";
import { segments } from "../../utils/constants/segments";
import { digits } from "../../utils/constants/digits";

const Digit = (props) => {
  const getSegment = (id) => {
    var segment = segments[id];
    return Array.isArray(segment) ? segment : [];
  };

  const getDigit = (id) => {
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
    <g
      transform={transform([{ translate: [props.x, props.y] }])}
      style={{
        fillRule: "evenodd",
        strokeWidth: 0.25,
        strokeOpacity: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
      }}
    >
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

Digit.defaultProps = {
  value: 0,
  onOpacity: 1,
  offOpacity: 0.1,
  color: "#262A34",
  x: 0,
  y: 0,
};

export default Digit;

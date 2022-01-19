import React from "react";
import Digit from "./Digit";

const Display = (props) => {
  return (
    <svg viewBox={[-1, -1, 12 * props.digitCount, 20]}>
      {props.value
        .toString()
        .padStart(props.digitCount, " ")
        .split("")
        .slice(-props.digitCount)
        .map((digit, key) => (
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

Display.defaultProps = {
  digitCount: 4,
  value: "",
  strokeColor: "#fff",
  nullDisplay: [],
};

export default Display;

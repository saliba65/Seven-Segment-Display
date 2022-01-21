import React from "react";
import Digit from "../Digit/Digit";
import { positionDisplay } from "../../helpers/positionDisplay";

const Display = (props) => {
  const centerDisplay = positionDisplay(props.digitCount);
  return (
    <svg viewBox={[centerDisplay, -1, 38, 20]}>
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
  digitCount: 3,
  value: "",
  strokeColor: "#fff",
  nullDisplay: [],
};

export default Display;

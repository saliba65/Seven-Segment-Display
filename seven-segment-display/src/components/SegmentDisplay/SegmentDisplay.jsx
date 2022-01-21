import React from "react";
import { ContainerDisplay } from "./SegmentDisplayStyle";
import Display from "../Display/Display";
import { useNumber } from "../../context/Number";

const SegmentDisplay = ({ state, digitCount }) => {
  const { numberDisplay } = useNumber();
  return (
    <ContainerDisplay>
      <Display
        value={numberDisplay}
        color={
          state === "correct"
            ? "#32BF00"
            : state === "erro"
            ? "#CC3300"
            : "#262A34"
        }
        digitCount={digitCount}
      />
    </ContainerDisplay>
  );
};

export default SegmentDisplay;

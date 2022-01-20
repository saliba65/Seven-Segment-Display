import React from "react";
import { ContainerDisplay } from "./SegmentDisplayStyle";
import Display from "./Display";

const SegmentDisplay = () => {
  return (
    <ContainerDisplay>
      <Display value={187} color="black" digitCount={3} />
    </ContainerDisplay>
  );
};

export default SegmentDisplay;
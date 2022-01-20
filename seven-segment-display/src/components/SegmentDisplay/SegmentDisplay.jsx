import React from "react";
import { ContainerDisplay } from "./SegmentDisplayStyle";
import Display from "../Display/Display";

const SegmentDisplay = () => {
  return (
    <ContainerDisplay>
      <Display value={537} color="black" digitCount={3} />
    </ContainerDisplay>
  );
};

export default SegmentDisplay;

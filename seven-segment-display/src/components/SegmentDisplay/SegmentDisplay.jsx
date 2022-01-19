import React from "react";
import { ContainerDisplay } from "./SegmentDisplayStyle";
import Display from "./Display";

const SegmentDisplay = () => {
  return (
    <ContainerDisplay>
      <Display value={502} color="#CC3300" digitCount={3} />
    </ContainerDisplay>
  );
};

export default SegmentDisplay;

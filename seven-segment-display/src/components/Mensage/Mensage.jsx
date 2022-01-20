import React from "react";
import PropTypes from "prop-types";
import * as S from "./MensageStyle";

const Mensage = ({ title, mensage, state }) => {
  return (
    <S.Mensage data-testid="mensage-element" title={title} state={state}>
      {mensage}
    </S.Mensage>
  );
};

Mensage.propTypes = {
  status: PropTypes.string,
};

export default Mensage;

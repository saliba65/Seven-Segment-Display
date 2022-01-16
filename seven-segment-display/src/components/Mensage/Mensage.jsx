import React from "react";
import PropTypes from "prop-types";
import * as S from "./MensageStyle";

const Mensage = ({ mensage, state }) => {
  return <S.Mensage state={state}>{mensage}</S.Mensage>;
};

Mensage.propTypes = {
  status: PropTypes.string,
};

export default Mensage;

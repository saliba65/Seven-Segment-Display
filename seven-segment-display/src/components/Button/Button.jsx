import React from "react";
import PropTypes from "prop-types";
import * as S from "./ButtonStyle";

const Button = ({ children, isNewGame }) => {
  return <S.Button isNewGame={isNewGame}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;

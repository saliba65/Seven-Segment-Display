import React from "react";
import PropTypes from "prop-types";
import * as S from "./ButtonStyle";

const Button = ({ children, isNewGame, type }) => {
  return (
    <S.Button type={type} isNewGame={isNewGame}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  isNewGame: PropTypes.bool,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import * as S from "./ButtonStyle";

const Button = ({ children, isNewGame, type, onClick, disable }) => {
  return (
    <S.Button
      type={type}
      isNewGame={isNewGame}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  isNewGame: PropTypes.bool,
  disable: PropTypes.bool,
};

export default Button;

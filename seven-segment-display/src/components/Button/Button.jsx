import React from "react";
import PropTypes from "prop-types";
import * as S from "./ButtonStyle";

const Button = ({ name, children, isNewGame, type, onClick, disable }) => {
  return (
    <S.Button
      data-testid="button-element"
      name={name}
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
  name: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  isNewGame: PropTypes.bool,
  disable: PropTypes.bool,
};

export default Button;

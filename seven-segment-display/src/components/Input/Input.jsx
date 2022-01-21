import React from "react";
import PropTypes from "prop-types";
import * as S from "./InputStyle";

/*
  Componente input generico
  Controlado/personalizado de acordo com as props que recebe em sua chamada
  Recebe as props min e max representando os valores possiveis a serem digitados no input, de 0 a 999, numeros de 1 a 3 algorismos 
*/

const Input = ({
  name,
  type,
  min,
  max,
  placeholder,
  value,
  onChange,
  disable,
}) => {
  return (
    <S.Input
      data-testid="input-element"
      name={name}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disable}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disable: PropTypes.bool,
};

export default Input;

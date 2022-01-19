import React from "react";
import PropTypes from "prop-types";
import * as S from "./InputStyle";

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

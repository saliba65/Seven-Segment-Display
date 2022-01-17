import React from "react";
import PropTypes from "prop-types";
import * as S from "./InputStyle";

const Input = ({ name, type, placeholder, value, onChange, disable }) => {
  return (
    <S.Input
      name={name}
      type={type}
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disable: PropTypes.bool,
};

export default Input;

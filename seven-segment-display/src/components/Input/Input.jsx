import React from "react";
import PropTypes from "prop-types";
import * as S from "./InputStyle";

const Input = ({ placeholder }) => {
  return <S.Input placeholder={placeholder} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;

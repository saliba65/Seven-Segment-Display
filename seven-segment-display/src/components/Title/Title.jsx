import React from "react";
import PropTypes from "prop-types";
import * as S from "./TitleStyle";

const Title = ({ children }) => {
  return (
    <S.TextContainer>
      <h1>{children}</h1>
      <S.Line />
    </S.TextContainer>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;

import React from "react";
import PropTypes from "prop-types";
import * as S from "./TitleStyle";

const Title = ({ title, children }) => {
  return (
    <S.TextContainer data-testid="title-element" title={title}>
      <h1>{children}</h1>
      <S.Line />
    </S.TextContainer>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;

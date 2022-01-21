import React from "react";
import PropTypes from "prop-types";
import * as S from "./TitleStyle";

/*
  Componente title generico
  Controlado/personalizado de acordo com as props que recebe em sua chamada
  Vai exibir uma tag h1 com a mensagem defida por props na chamada do componente
*/

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

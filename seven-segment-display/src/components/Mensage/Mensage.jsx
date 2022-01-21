import React from "react";
import PropTypes from "prop-types";
import * as S from "./MensageStyle";

/*
  Componente mensage generico
  Controlado/personalizado de acordo com as props que recebe em sua chamada
  Recebe as props mensage e state para saber se o usuario acertou ou errou os palpites
  Eventualmente controla qual mensagem exibir e qual cor deixa-la 
*/

const Mensage = ({ title, mensage, state }) => {
  return (
    <S.Mensage data-testid="mensage-element" title={title} state={state}>
      {mensage}
    </S.Mensage>
  );
};

Mensage.propTypes = {
  status: PropTypes.string,
};

export default Mensage;

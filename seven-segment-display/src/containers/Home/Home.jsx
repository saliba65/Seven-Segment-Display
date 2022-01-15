import React from "react";
import * as S from "./HomeStyle";

const Home = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <h1>QUAL É O NÚMERO?</h1>
        <S.Line />
      </S.TextContainer>

      <S.Number>0</S.Number>

      <S.FormContainer>
        <S.Input placeholder="Digite o palpite" />
        <S.Button>ENVIAR</S.Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;

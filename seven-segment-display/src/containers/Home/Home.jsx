import React from "react";
import * as S from "./HomeStyle";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.Number>0</S.Number>
      <S.FormContainer>
        <Input placeholder={"Digite o palpite"} />
        <Button>ENVIAR</Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;

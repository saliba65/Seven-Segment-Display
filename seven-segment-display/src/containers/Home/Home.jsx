import React from "react";
import * as S from "./HomeStyle";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Mensage from "../../components/Mensage/Mensage";
import { ReactComponent as IconRefresh } from "../../assets/icons/icon_refresh.svg";

const Home = () => {
  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.ContainerNumber>
        <Mensage mensage={"É menor"} state={""} />
        <S.Number>0</S.Number>
        <Button isNewGame={true}>
          <IconRefresh />
          NOVA PARTIDA
        </Button>
      </S.ContainerNumber>
      <S.FormContainer>
        <Input placeholder={"Digite o palpite"} />
        <Button>ENVIAR</Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;

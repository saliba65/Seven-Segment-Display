import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import * as S from "./HomeStyle";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Mensage from "../../components/Mensage/Mensage";
import { ReactComponent as IconRefresh } from "../../assets/icons/icon_refresh.svg";

const Home = () => {
  // const dispatch = useDispatch();
  const [guess, setGuess] = useState("");
  const [number, setNumber] = useState(0);

  const handleGuess = async (event) => {
    event.preventDefault();

    console.log(guess);
    setNumber(guess);
    setGuess("");
    // dispatch(
    //   AuthActions.userAuthRequest({ email, password, recaptchaSuccess })
    // );
  };

  const restartGame = () => {
    setNumber(0);
    setGuess("");
  };

  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.ContainerNumber>
        <Mensage mensage={"É menor"} state={""} />
        <S.Number>{number}</S.Number>
        <Button isNewGame={true} onClick={restartGame}>
          <IconRefresh />
          NOVA PARTIDA
        </Button>
      </S.ContainerNumber>
      <S.FormContainer onSubmit={(event) => handleGuess(event)}>
        <Input
          type="text"
          name="guess"
          placeholder={"Digite o palpite"}
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
        />
        <Button type="submit">ENVIAR</Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;

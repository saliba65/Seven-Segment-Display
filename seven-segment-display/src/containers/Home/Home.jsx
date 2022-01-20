import React, { useState } from "react";
import * as S from "./HomeStyle";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Mensage from "../../components/Mensage/Mensage";
import SegmentDisplay from "../../components/SegmentDisplay/SegmentDisplay";
import { ReactComponent as IconRefresh } from "../../assets/icons/icon_refresh.svg";
import { useNumber } from "../../context/Number";

const Home = () => {
  const { number, requestNumber, errorRequest, setErrorRequest } = useNumber();

  const [guess, setGuess] = useState("");
  const [numberDisplay, setNumberDisplay] = useState(0);
  const [mensage, setMensage] = useState("");
  const [state, setState] = useState("");
  const [disable, setDisable] = useState(false);
  const [restartButton, setRestartButton] = useState(false);

  const handleGuess = async (event) => {
    event.preventDefault();

    const guessNumber = parseInt(guess);
    setNumberDisplay(guessNumber);

    compareNumbers(guessNumber, number);
    setGuess("");
  };

  const restartGame = () => {
    setNumberDisplay(0);
    setGuess("");
    setMensage("");
    setState("");
    setDisable(false);
    setRestartButton(false);
    setErrorRequest(false);
    requestNumber();
  };

  const compareNumbers = (guessNumber, number) => {
    if (errorRequest) {
      setMensage("ERRO");
      setState("erro");
      setDisable(true);
      setRestartButton(true);
      setNumberDisplay(502);
      return;
    }
    if (guessNumber === number) {
      setMensage("Você acertou!!!!");
      setState("correct");
      setDisable(true);
      setRestartButton(true);
    } else if (guessNumber < number) {
      setMensage("É maior");
      setState("trying");
    } else if (guessNumber > number) {
      setMensage("É menor");
      setState("trying");
    }
  };

  console.log(number);

  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.ContainerNumber>
        <Mensage mensage={mensage} state={state} />
        {/* <S.Number>{numberDisplay}</S.Number> */}
        <SegmentDisplay numberDisplay={numberDisplay} />
        {restartButton && (
          <Button isNewGame={true} onClick={restartGame}>
            <IconRefresh />
            NOVA PARTIDA
          </Button>
        )}
      </S.ContainerNumber>
      <S.FormContainer onSubmit={(event) => handleGuess(event)}>
        <Input
          type="number"
          name="guess"
          min="1"
          max="300"
          placeholder={"Digite o palpite"}
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
          disable={disable}
        />
        <Button type="submit" disable={disable}>
          ENVIAR
        </Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default Home;

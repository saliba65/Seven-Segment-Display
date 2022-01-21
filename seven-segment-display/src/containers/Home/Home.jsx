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
  //Pegando states do context Number
  const {
    number,
    requestNumber,
    errorRequest,
    setErrorRequest,
    setNumberDisplay,
  } = useNumber();

  //States locais
  const [guess, setGuess] = useState("");
  const [mensage, setMensage] = useState("");
  const [state, setState] = useState("");
  const [disable, setDisable] = useState(false);
  const [restartButton, setRestartButton] = useState(false);
  const [digitCount, setDigitCount] = useState(1);

  //Function disparada ao clicar no botao enviar
  const handleGuess = async (event) => {
    event.preventDefault();

    //Vendo quantos algorismos o numero digitado tem -> implica em quantos displays de led serao renderizados
    setDigitCount(guess.length);

    //Aplicando o palpite no display de led
    const guessNumber = parseInt(guess);
    setNumberDisplay(guessNumber);

    compareNumbers(guessNumber, number);

    //Limpando campo de input
    setGuess("");
  };

  //Function para recomecar o jogo, seta todos os states para seu estado inicial
  const restartGame = () => {
    setNumberDisplay(0);
    setDigitCount(1);
    setGuess("");
    setMensage("");
    setState("");
    setDisable(false);
    setRestartButton(false);
    setErrorRequest(false);
    requestNumber();
  };

  //Funcion para comparar numero correto recebido pela api e palpite do usuario
  const compareNumbers = (guessNumber, number) => {
    //Condicional caso a request tenha falhado
    if (errorRequest) {
      setMensage("ERRO");
      setState("erro");
      setDisable(true);
      setRestartButton(true);
      setDigitCount(3);
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

  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.ContainerNumber>
        <Mensage mensage={mensage} state={state} />
        <SegmentDisplay state={state} digitCount={digitCount} />
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

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as NumberActions } from "../../store/ducks/number";
import * as S from "./HomeStyle";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Mensage from "../../components/Mensage/Mensage";
import { ReactComponent as IconRefresh } from "../../assets/icons/icon_refresh.svg";

const Home = () => {
  const dispatch = useDispatch();

  const [guess, setGuess] = useState("");
  const [numberDisplay, setNumberDisplay] = useState(0);
  const [mensage, setMensage] = useState("");
  const [state, setState] = useState("");
  const [disable, setDisable] = useState(false);
  const [restartButton, setRestartButton] = useState(false);
  const { number, isLoading } = useSelector((state) => state.number);

  const dispatchGetNumber = useCallback(
    () => dispatch(NumberActions.getNumber()),
    [dispatch]
  );

  useEffect(() => {
    dispatchGetNumber();
  }, [dispatchGetNumber]);

  // const handleError = (number) => {
  //   if (number === "Bad Gateway") {
  //     setMensage("ERRO");
  //     setState("erro");
  //     setDisable(true);
  //     setRestartButton(true);
  //     setNumberDisplay(502);
  //   }
  // };

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
    dispatch(NumberActions.getNumber());
  };

  const compareNumbers = (guessNumber, number) => {
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
    } else {
      setMensage("ERRO");
      setState("erro");
      setDisable(true);
      setRestartButton(true);
      setNumberDisplay(502);
    }
  };

  console.log(number);

  return (
    <S.Container>
      <Title>QUAL É O NÚMERO?</Title>
      <S.ContainerNumber>
        <Mensage mensage={mensage} state={state} />
        <S.Number>{numberDisplay}</S.Number>
        {restartButton && (
          <Button isNewGame={true} onClick={restartGame}>
            <IconRefresh />
            NOVA PARTIDA
          </Button>
        )}
      </S.ContainerNumber>
      <S.FormContainer onSubmit={(event) => handleGuess(event)}>
        <Input
          type="text"
          name="guess"
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

// useEffect(() => {
//   axios
//     .get(
//       `https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`
//     )
//     .then(function (response) {
//       const { data } = response;
//       setNumber(data.value);
//     })
//     .catch(function (error) {
//       setNumber("");
//     });
// }, []);

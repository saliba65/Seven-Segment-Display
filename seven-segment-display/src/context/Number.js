import React, { createContext, useContext, useEffect, useState } from "react";
import requestAPI from "../services/requestHelpers";

const NumberContext = createContext();

export default function NumberProvider({ children }) {
  //Criacao de states globais
  const [number, setNumber] = useState("");
  const [errorRequest, setErrorRequest] = useState(false);
  const [numberDisplay, setNumberDisplay] = useState(0);

  //Request do numero correto, utilizacao do helper request number
  const requestNumber = async () => {
    try {
      const {
        data: { value },
      } = await requestAPI({
        method: "GET",
      });
      setNumber(value);
    } catch (error) {
      setErrorRequest(true);
    }
  };

  //Use effetct de chamada de request separado para poder ser acionado quando o usuario reiniciar o jogo
  useEffect(() => {
    requestNumber();
  }, []);

  return (
    <NumberContext.Provider
      //Retornando states globais
      value={{
        number,
        requestNumber,
        errorRequest,
        setErrorRequest,
        numberDisplay,
        setNumberDisplay,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

//Facilitador para a exportacao do context, nao precisando fazer esse processo com o useContext nos outros arquivos
export function useNumber() {
  const context = useContext(NumberContext);
  if (!context)
    throw new Error("useNumber must be used within a NumberProvider");
  const {
    number,
    requestNumber,
    errorRequest,
    setErrorRequest,
    numberDisplay,
    setNumberDisplay,
  } = context;
  return {
    number,
    requestNumber,
    errorRequest,
    setErrorRequest,
    numberDisplay,
    setNumberDisplay,
  };
}

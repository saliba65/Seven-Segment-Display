import React, { createContext, useContext, useEffect, useState } from "react";
import requestAPI from "../services/requestHelpers";

const NumberContext = createContext();

export default function NumberProvider({ children }) {
  const [number, setNumber] = useState("");
  const [errorRequest, setErrorRequest] = useState(false);
  const [numberDisplay, setNumberDisplay] = useState(0);

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

  useEffect(() => {
    requestNumber();
  }, []);

  return (
    <NumberContext.Provider
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

import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home/Home.jsx";
import GlobalStyle from "./styles/global.js";
import NumberProvider from "./context/Number";

/*
  Uso do provider para uso dos states globais do useContext()
  Global Style sendo aplicado em toda a aplicacao
*/

ReactDOM.render(
  <NumberProvider>
    <GlobalStyle />
    <Home />
  </NumberProvider>,
  document.getElementById("root")
);

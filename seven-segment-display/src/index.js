import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home/Home.jsx";
import GlobalStyle from "./styles/global.js";
import NumberProvider from "./context/Number";

ReactDOM.render(
  <NumberProvider>
    <GlobalStyle />
    <Home />
  </NumberProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home/Home.jsx";
import GlobalStyle from "./styles/global.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

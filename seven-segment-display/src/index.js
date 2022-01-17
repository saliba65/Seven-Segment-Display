import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home/Home.jsx";
import GlobalStyle from "./styles/global.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>,
  document.getElementById("root")
);

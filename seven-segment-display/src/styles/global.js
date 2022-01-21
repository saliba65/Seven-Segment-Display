import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%);
  }

  h1{
    background: -webkit-linear-gradient(#EF6C00, #DB6300);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
